"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DownloadButton } from "@/components/ui/download-button";
import { useTranslation } from "@/lib/i18n";

const GOOGLE_PLAY_LINK =
  "https://play.google.com/store/apps/details?id=az.premiumbank.all_miles.app&hl=en";
const APP_STORE_LINK =
  "https://apps.apple.com/in/app/premium-bank-allmiles/id6740502033";

function HeroCopy() {
  const { t } = useTranslation();
  const stats = [
    { value: "1M+", label: t.hero.statsMonthly },
    { value: "120+", label: t.hero.statsRoutes },
    { value: "<30s", label: t.hero.statsRedemption },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
        {t.hero.headline}{" "}
        <span className="animate-shimmer bg-gradient-to-r from-[#FAFA00] via-[#7dd3fc] to-[#0EAAFD] bg-clip-text text-transparent">
          AllTrips
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-[clamp(1rem,1.75vw,1.22rem)] text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
        {t.hero.subtitle}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <DownloadButton href={GOOGLE_PLAY_LINK} store="google-play" />
        <DownloadButton href={APP_STORE_LINK} store="app-store" />
      </div>

      <div className="mt-8 grid max-w-[520px] grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-center backdrop-blur-sm"
          >
            <p className="text-xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <Image
        src="/main_background.jpg"
        alt=""
        fill
        priority
        className="-z-10 object-cover object-center"
      />
      {/* Dark gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
      <div className="relative z-10 container-shell">
        <HeroCopy />
      </div>
    </section>
  );
}
