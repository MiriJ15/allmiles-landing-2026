"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as any;

const ARCS = [
  { startLat: 40.4093, startLng: 49.8671, endLat: 47.4979, endLng: 19.0402 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 41.9028, endLng: 12.4964 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 41.6941, endLng: 44.8337 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 38.4192, endLng: 27.1287 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 41.0082, endLng: 28.9784 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 41.2995, endLng: 69.2401 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 36.8969, endLng: 30.7133 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 24.4539, endLng: 54.3773 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 51.5074, endLng: -0.1278 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 50.0755, endLng: 14.4378 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 28.6139, endLng:  77.209 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 45.4654, endLng:  9.1859 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 55.7558, endLng: 37.6173 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 21.5433, endLng: 39.1728 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 42.8746, endLng: 74.5698 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 48.8566, endLng:  2.3522 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 39.9042, endLng: 116.4074 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 59.9311, endLng: 30.3609 },
  { startLat: 40.4093, startLng: 49.8671, endLat: 35.6762, endLng: 139.6503 },
];

const POINTS = [
  { lat: 40.4093,  lng:  49.8671, size: 0.825, color: "#ffffff" }, // Baku (+50%)
  { lat: 47.4979,  lng:  19.0402, size: 0.39,  color: "#0EAAFD" },
  { lat: 41.9028,  lng:  12.4964, size: 0.39,  color: "#0EAAFD" },
  { lat: 41.6941,  lng:  44.8337, size: 0.39,  color: "#0EAAFD" },
  { lat: 38.4192,  lng:  27.1287, size: 0.39,  color: "#0EAAFD" },
  { lat: 41.0082,  lng:  28.9784, size: 0.39,  color: "#0EAAFD" },
  { lat: 41.2995,  lng:  69.2401, size: 0.39,  color: "#0EAAFD" },
  { lat: 36.8969,  lng:  30.7133, size: 0.39,  color: "#0EAAFD" },
  { lat: 24.4539,  lng:  54.3773, size: 0.39,  color: "#0EAAFD" },
  { lat: 51.5074,  lng:  -0.1278, size: 0.39,  color: "#0EAAFD" },
  { lat: 50.0755,  lng:  14.4378, size: 0.39,  color: "#0EAAFD" },
  { lat: 28.6139,  lng:   77.209, size: 0.39,  color: "#0EAAFD" },
  { lat: 45.4654,  lng:   9.1859, size: 0.39,  color: "#0EAAFD" },
  { lat: 55.7558,  lng:  37.6173, size: 0.39,  color: "#0EAAFD" },
  { lat: 21.5433,  lng:  39.1728, size: 0.39,  color: "#0EAAFD" },
  { lat: 42.8746,  lng:  74.5698, size: 0.39,  color: "#0EAAFD" },
  { lat: 48.8566,  lng:   2.3522, size: 0.39,  color: "#0EAAFD" },
  { lat: 39.9042,  lng: 116.4074, size: 0.39,  color: "#0EAAFD" },
  { lat: 59.9311,  lng:  30.3609, size: 0.39,  color: "#0EAAFD" },
  { lat: 35.6762,  lng: 139.6503, size: 0.39,  color: "#0EAAFD" },
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
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then(setCountries)
      .catch(() => {/* silently ignore on network failure */});
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

  // Dark navy globe surface — no photo texture
  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x080d2a),
        emissive: new THREE.Color(0x03061a),
        shininess: 10,
      }),
    []
  );

  const handleGlobeReady = () => {
    globeEl.current?.pointOfView({ lat: 42, lng: 53, altitude: 2.0 }, 0);
  };

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
        // Dark custom material — no photo texture
        globeMaterial={globeMaterial}
        atmosphereColor="#1a6fff"
        atmosphereAltitude={0.18}
        // Hex-polygon dots = landmass dots (the GitHub globe effect)
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.65}
        hexPolygonColor={() => "rgba(14, 170, 253, 0.55)"}
        // Animated flight arcs
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
        // Destination dots
        pointsData={POINTS}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: { color: string }) => d.color}
        pointAltitude={0}
        pointRadius="size"
        onGlobeReady={handleGlobeReady}
        enablePointerInteraction={false}
      />
    </div>
  );
}
