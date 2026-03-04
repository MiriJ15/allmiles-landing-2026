"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Dynamically imported to avoid SSR — react-globe.gl requires browser WebGL
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as any;

/* ─── Hub ─────────────────────────────────────────────────────────────────── */
const BAKU = { lat: 40.4093, lng: 49.8671 };

/* ─── Destinations ────────────────────────────────────────────────────────── */
const DESTINATIONS = [
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
  { lat: 28.6139, lng: 77.209 }, // New Delhi
  { lat: 45.4654, lng: 9.1859 }, // Milan
  { lat: 55.7558, lng: 37.6173 }, // Moscow
  { lat: 21.5433, lng: 39.1728 }, // Jeddah
  { lat: 42.8746, lng: 74.5698 }, // Bishkek
  { lat: 48.8566, lng: 2.3522 }, // Paris
  { lat: 39.9042, lng: 116.4074 }, // Beijing
  { lat: 59.9311, lng: 30.3609 }, // Saint Petersburg
  { lat: 35.6762, lng: 139.6503 }, // Tokyo
  { lat: 25.2048, lng: 55.2708 }, // Dubai
  { lat: 25.2854, lng: 51.531 }, // Doha
  { lat: 24.6877, lng: 46.7219 }, // Riyadh
  { lat: 23.588, lng: 58.3829 }, // Muscat
  { lat: 29.3759, lng: 47.9774 }, // Kuwait City
  { lat: 33.8938, lng: 35.5018 }, // Beirut
  { lat: 31.9454, lng: 35.9284 }, // Amman
  { lat: 30.0444, lng: 31.2357 }, // Cairo
  { lat: 32.0853, lng: 34.7818 }, // Tel Aviv
  { lat: 35.6892, lng: 51.389 }, // Tehran
  { lat: 37.9601, lng: 58.3261 }, // Ashgabat
  { lat: 38.5598, lng: 68.787 }, // Dushanbe
  { lat: 43.222, lng: 76.8512 }, // Almaty
  { lat: 53.9045, lng: 27.5615 }, // Minsk
  { lat: 50.4501, lng: 30.5234 }, // Kyiv
  { lat: 52.2297, lng: 21.0122 }, // Warsaw
  { lat: 52.3676, lng: 4.9041 }, // Amsterdam
  { lat: 48.2082, lng: 16.3738 }, // Vienna
  { lat: 50.1109, lng: 8.6821 }, // Frankfurt
  { lat: 41.3851, lng: 2.1734 }, // Barcelona
  { lat: 40.4168, lng: -3.7038 }, // Madrid
  { lat: 37.9838, lng: 23.7275 }, // Athens
  { lat: 44.4268, lng: 26.1025 }, // Bucharest
  { lat: 44.7866, lng: 20.4489 }, // Belgrade
  { lat: 13.7563, lng: 100.5018 }, // Bangkok
  { lat: 1.3521, lng: 103.8198 }, // Singapore
  { lat: 3.139, lng: 101.6869 }, // Kuala Lumpur
  { lat: 6.9271, lng: 79.8612 }, // Colombo
  { lat: 40.7128, lng: -74.006 }, // New York
  { lat: 48.1351, lng: 11.582 }, // Munich
  { lat: -33.9249, lng: 18.4241 }, // Cape Town
  { lat: -1.2921, lng: 36.8219 }, // Nairobi
  { lat: 33.5731, lng: -7.5898 }, // Casablanca
  { lat: 19.4326, lng: -99.1332 }, // Mexico City
  { lat: -23.5505, lng: -46.6333 }, // São Paulo
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
  { lat: 10.8231, lng: 106.6297 }, // Ho Chi Minh City
  { lat: -6.2088, lng: 106.8456 }, // Jakarta
  { lat: 14.5995, lng: 120.9842 }, // Manila
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: -37.8136, lng: 144.9631 }, // Melbourne
  { lat: -36.8485, lng: 174.7633 }, // Auckland
];

/* ─── Derived data (computed once at module level) ────────────────────────── */
const ARCS = DESTINATIONS.map((d) => ({
  startLat: BAKU.lat,
  startLng: BAKU.lng,
  endLat: d.lat,
  endLng: d.lng,
}));

const DOT_COLORS = ["#00C853", "#7dd3fc", "#0EAAFD"];

const POINTS = [
  // Baku hub — large white dot
  { lat: BAKU.lat, lng: BAKU.lng, size: 0.9, color: "#ffffff" },
  // Destinations — cycling through brand gradient colors
  ...DESTINATIONS.map((d, i) => ({
    lat: d.lat,
    lng: d.lng,
    size: 0.42,
    color: DOT_COLORS[i % DOT_COLORS.length],
  })),
];

/* ─── Component ───────────────────────────────────────────────────────────── */
export function FlightGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeEl = useRef<any>(null);
  const [size, setSize] = useState(500);

  // Responsive: match container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(() => setSize(el.offsetWidth));
    obs.observe(el);
    setSize(el.offsetWidth);
    return () => obs.disconnect();
  }, []);

  // Enable auto-rotation once the globe is mounted
  const handleGlobeReady = () => {
    const controls = globeEl.current?.controls();
    if (!controls) return;
    // Start view centred on the Atlantic Ocean
    globeEl.current?.pointOfView({ lat: 10, lng: -30, altitude: 2.5 }, 0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = -1; // negative = anticlockwise
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[728px] overflow-hidden"
    >
      <Globe
        ref={globeEl}
        width={size}
        height={size}
        // Transparent canvas background — page bg shows through
        backgroundColor="rgba(0,0,0,0)"
        // ── Photorealistic Earth textures (NASA blue marble + topology bump) ──
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        // ── Soft atmosphere glow ─────────────────────────────────────────────
        atmosphereColor="#4da6ff"
        atmosphereAltitude={0.15}
        // ── Animated flight arcs (gold dashes flowing Baku → destination) ────
        arcsData={ARCS}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => ["#00C853", "#0EAAFD"]}
        arcAltitude={0.28}
        arcStroke={0.45}
        arcDashLength={0.35} // length of each dash
        arcDashGap={0.65} // gap between dashes
        arcDashAnimateTime={1800} // ms for one full cycle — flows outward
        // ── Destination dots ─────────────────────────────────────────────────
        pointsData={POINTS}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: { color: string }) => d.color}
        pointAltitude={0.005}
        pointRadius="size"
        // ── Lifecycle ────────────────────────────────────────────────────────
        onGlobeReady={handleGlobeReady}
        enablePointerInteraction={false}
      />
    </div>
  );
}
