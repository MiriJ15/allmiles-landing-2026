"use client";

import { motion } from "framer-motion";
import { Download, PlaneTakeoff } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { useTranslation } from "@/lib/i18n";

const GOOGLE_PLAY_LINK =
  "https://play.google.com/store/apps/details?id=az.premiumbank.all_miles.app&hl=en";
const APP_STORE_LINK =
  "https://apps.apple.com/in/app/premium-bank-allmiles/id6740502033";

const departureData = [
  { from: "GYD", to: "PAR", gate: "A7", statusKey: "statusBoarding" },
  { from: "GYD", to: "DXB", gate: "B3", statusKey: "statusOnTime" },
  { from: "GYD", to: "LON", gate: "C2", statusKey: "statusGateOpen" },
  { from: "GYD", to: "TYO", gate: "A4", statusKey: "statusPriority" },
] as const;

const barcodePattern = [
  1, 2, 1, 3, 1, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 4, 1, 2,
  1, 3, 1, 1, 2, 3, 1, 2, 1, 4, 1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 4,
];

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
      <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-slate-900 dark:text-white">
        {t.hero.headline}{" "}
        <span className="animate-shimmer bg-gradient-to-r from-cyan-200 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
          AllMiles
        </span>
      </h1>

      <p className="section-subtitle mt-6 max-w-2xl text-balance">
        {t.hero.subtitle}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <DownloadButton href={GOOGLE_PLAY_LINK} store="google-play" />
        <DownloadButton href={APP_STORE_LINK} store="app-store" />
      </div>

      <div className="mt-8 grid max-w-[760px] grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-panel rounded-2xl px-4 py-3 text-center"
          >
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function InfiniteDepartureTicker() {
  const { t } = useTranslation();
  const rows = departureData.map((d) => ({
    from: d.from,
    to: d.to,
    gate: d.gate,
    status: t.hero[d.statusKey],
  }));

  return (
    <div className="relative mt-2 h-[120px] overflow-hidden">
      <motion.div
        className="flex flex-col"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="space-y-3 pb-3 text-sm">
            {rows.map((row, rowIndex) => (
              <div
                key={`${copyIndex}-${rowIndex}-${row.to}`}
                className="grid grid-cols-4 text-slate-800 dark:text-slate-200"
              >
                <span>{row.from}</span>
                <span>{row.to}</span>
                <span>{row.gate}</span>
                <span className="text-cyan-300">{row.status}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function AllMilesBarcode() {
  return (
    <div className="mt-4 rounded-xl border border-cyan-300/25 bg-slate-950/55 p-3">
      <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(120deg,rgba(34,211,238,0.12),rgba(56,189,248,0.04),rgba(16,185,129,0.14))] p-2">
        <div className="flex h-12 w-full items-end gap-px overflow-hidden">
          {barcodePattern.map((segmentWidth, index) => {
            const isBar = index % 2 === 0;

            return (
              <span
                key={`${segmentWidth}-${index}`}
                className={
                  isBar
                    ? "h-full rounded-[1px] bg-cyan-200/90 shadow-[0_0_8px_rgba(34,211,238,0.35)]"
                    : "h-full bg-transparent"
                }
                style={{ flexGrow: segmentWidth, flexBasis: 0 }}
              />
            );
          })}
        </div>

        <motion.div
          className="pointer-events-none absolute inset-y-0 w-14 bg-gradient-to-r from-transparent via-cyan-200/45 to-transparent"
          animate={{ left: ["-3.5rem", "100%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[0.58rem] font-semibold tracking-[0.22em] text-cyan-200">
        <span>ALLMILES</span>
        <span>AM22300</span>
      </div>
    </div>
  );
}

function HeroVisualBoarding() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 26 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[700px]"
    >
      <div className="relative overflow-hidden rounded-[2.8rem]">
        <div className="glass-panel absolute left-10 top-4 h-64 w-[76%] rotate-[-8deg] rounded-3xl border-white/15" />
        <div className="glass-panel absolute right-8 top-12 h-64 w-[72%] rotate-[6deg] rounded-3xl border-white/15" />

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel absolute right-3 top-3 z-20 hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs text-slate-600 dark:text-slate-200 sm:flex"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
          </span>
          <PlaneTakeoff size={12} className="text-cyan-300" />
          <span className="uppercase tracking-[0.12em]">
            {t.hero.routeSync}
          </span>
        </motion.div>

        <div className="glass-panel relative overflow-hidden rounded-[2.6rem] border-white/25 p-7 sm:p-9">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_80%_95%,rgba(16,185,129,0.2),transparent_35%)]" />

          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-cyan-200/70 shadow-[0_0_30px_rgba(34,211,238,0.9)]"
            animate={{ y: [20, 392, 20] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative space-y-4">
            <div className="glass-panel rounded-2xl p-4 font-mono">
              <p className="text-[0.64rem] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
                {t.hero.departureBoard}
              </p>
              <div className="mt-3 grid grid-cols-4 text-[0.66rem] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                <span>{t.hero.colFrom}</span>
                <span>{t.hero.colTo}</span>
                <span>{t.hero.colGate}</span>
                <span>{t.hero.colStatus}</span>
              </div>

              <InfiniteDepartureTicker />
            </div>

            <div className="glass-panel relative overflow-hidden rounded-2xl border-white/20 p-4 sm:p-5">
              <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[var(--bg-primary)]" />
              <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[var(--bg-primary)]" />

              <p className="text-[0.64rem] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
                {t.hero.boardingPassPreview}
              </p>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    GYD to CDG
                  </p>
                  <p className="mt-1 text-sm text-cyan-300">{t.hero.seat}</p>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  22,300 miles
                </p>
              </div>
              <AllMilesBarcode />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr]">
        <HeroCopy />
        <HeroVisualBoarding />
      </div>
    </section>
  );
}
