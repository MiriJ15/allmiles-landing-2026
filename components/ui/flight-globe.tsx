"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as any;

const BAKU = { lat: 40.4093, lng: 49.8671 };

const DESTINATIONS = [
  // Existing routes
  { lat: 47.4979, lng: 19.0402 }, // Budapest
  { lat: 41.9028, lng: 12.4964 }, // Rome
  { lat: 41.6941, lng: 44.8337 }, // Tbilisi
  { lat: 38.4192, lng: 27.1287 }, // Izmir
  { lat: 41.0082, lng: 28.9784 }, // Istanbul
  { lat: 41.2995, lng: 69.2401 }, // Tashkent
  { lat: 36.8969, lng: 30.7133 }, // Antalya
  { lat: 24.4539, lng: 54.3773 }, // Abu Dhabi
  { lat: 51.5074, lng: -0.1278 }, // London
  { lat: 50.0755, lng: 14.4378 }, // Prague
  { lat: 28.6139, lng: 77.2090 }, // New Delhi
  { lat: 45.4654, lng: 9.1859  }, // Milan
  { lat: 55.7558, lng: 37.6173 }, // Moscow
  { lat: 21.5433, lng: 39.1728 }, // Jeddah
  { lat: 42.8746, lng: 74.5698 }, // Bishkek
  { lat: 48.8566, lng: 2.3522  }, // Paris
  { lat: 39.9042, lng: 116.4074 }, // Beijing
  { lat: 59.9311, lng: 30.3609 }, // Saint Petersburg
  { lat: 35.6762, lng: 139.6503 }, // Tokyo
  // New routes
  { lat: 25.2048, lng: 55.2708 }, // Dubai
  { lat: 25.2854, lng: 51.5310 }, // Doha
  { lat: 24.6877, lng: 46.7219 }, // Riyadh
  { lat: 23.5880, lng: 58.3829 }, // Muscat
  { lat: 29.3759, lng: 47.9774 }, // Kuwait City
  { lat: 33.8938, lng: 35.5018 }, // Beirut
  { lat: 31.9454, lng: 35.9284 }, // Amman
  { lat: 30.0444, lng: 31.2357 }, // Cairo
  { lat: 32.0853, lng: 34.7818 }, // Tel Aviv
  { lat: 35.6892, lng: 51.3890 }, // Tehran
  { lat: 37.9601, lng: 58.3261 }, // Ashgabat
  { lat: 38.5598, lng: 68.7870 }, // Dushanbe
  { lat: 43.2220, lng: 76.8512 }, // Almaty
  { lat: 53.9045, lng: 27.5615 }, // Minsk
  { lat: 50.4501, lng: 30.5234 }, // Kyiv
  { lat: 52.2297, lng: 21.0122 }, // Warsaw
  { lat: 52.3676, lng: 4.9041  }, // Amsterdam
  { lat: 48.2082, lng: 16.3738 }, // Vienna
  { lat: 50.1109, lng: 8.6821  }, // Frankfurt
  { lat: 41.3851, lng: 2.1734  }, // Barcelona
  { lat: 40.4168, lng: -3.7038 }, // Madrid
  { lat: 37.9838, lng: 23.7275 }, // Athens
  { lat: 44.4268, lng: 26.1025 }, // Bucharest
  { lat: 44.7866, lng: 20.4489 }, // Belgrade
  { lat: 13.7563, lng: 100.5018 }, // Bangkok
  { lat: 1.3521,  lng: 103.8198 }, // Singapore
  { lat: 3.1390,  lng: 101.6869 }, // Kuala Lumpur
  { lat: 6.9271,  lng: 79.8612  }, // Colombo
  { lat: 40.7128, lng: -74.0060 }, // New York
  { lat: 48.1351, lng: 11.5820  }, // Munich
  // Africa
  { lat: -33.9249, lng: 18.4241  }, // Cape Town
  { lat:  -1.2921, lng: 36.8219  }, // Nairobi
  { lat:  33.5731, lng: -7.5898  }, // Casablanca
  // Central & South America
  { lat:  19.4326, lng: -99.1332 }, // Mexico City
  { lat: -23.5505, lng: -46.6333 }, // São Paulo
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
  // Southeast Asia
  { lat:  10.8231, lng: 106.6297 }, // Ho Chi Minh City
  { lat:  -6.2088, lng: 106.8456 }, // Jakarta
  { lat:  14.5995, lng: 120.9842 }, // Manila
  // Australia & New Zealand
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: -37.8136, lng: 144.9631 }, // Melbourne
  { lat: -36.8485, lng: 174.7633 }, // Auckland
];

const ARCS = DESTINATIONS.map((d) => ({
  startLat: BAKU.lat,
  startLng: BAKU.lng,
  endLat: d.lat,
  endLng: d.lng,
}));

const POINTS = [
  { lat: BAKU.lat, lng: BAKU.lng, size: 0.825, color: "#ffffff" },
  ...DESTINATIONS.map((d) => ({ lat: d.lat, lng: d.lng, size: 0.39, color: "#0EAAFD" })),
];

export function FlightGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const [size, setSize] = useState(500);
  const [countries, setCountries] = useState<{ features: object[] }>({ features: [] });

  // Load countries GeoJSON for hex-polygon dot landmasses
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson",
    )
      .then((r) => r.json())
      .then(setCountries)
      .catch(() => {/* silently ignore */});
  }, []);

  // Responsive sizing
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(() => setSize(el.offsetWidth));
    obs.observe(el);
    setSize(el.offsetWidth);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    let frame: number;
    const animate = () => {
      if (globeEl.current) {
        const controls = globeEl.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.6;
          controls.update();
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Dark navy globe surface
  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x080d2a),
        emissive: new THREE.Color(0x03061a),
        shininess: 10,
      }),
    [],
  );

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden"
    >
      <Globe
        ref={globeEl}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeMaterial={globeMaterial}
        atmosphereColor="#1a6fff"
        atmosphereAltitude={0.18}
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.65}
        hexPolygonColor={() => "rgba(14, 170, 253, 0.55)"}
        arcsData={ARCS}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => "#0EAAFD"}
        arcAltitude={0.3}
        arcStroke={0.5}
        arcDashLength={0.5}
        arcDashGap={0.5}
        arcDashAnimateTime={2000}
        pointsData={POINTS}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: { color: string }) => d.color}
        pointAltitude={0}
        pointRadius="size"
        enablePointerInteraction={false}
      />
    </div>
  );
}
