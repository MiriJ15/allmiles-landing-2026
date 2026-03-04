"use client";

import { useState } from "react";
import { FlightGlobe } from "@/components/ui/flight-globe";

const VARIANTS = [
  { key: "realistic", label: "🌍 Realistic" },
  { key: "dark", label: "🌌 Dark" },
  { key: "minimal", label: "🗺️ Minimal" },
] as const;

type Variant = (typeof VARIANTS)[number]["key"];

export function GlobeSelector() {
  const [variant, setVariant] = useState<Variant>("realistic");

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Pill selector */}
      <div className="flex gap-2 rounded-full bg-slate-100 p-1">
        {VARIANTS.map((v) => (
          <button
            key={v.key}
            onClick={() => setVariant(v.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              variant === v.key
                ? "bg-white text-[#0EAAFD] shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <FlightGlobe variant={variant} />
    </div>
  );
}
