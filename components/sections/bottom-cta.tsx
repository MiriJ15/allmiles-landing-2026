"use client";

import { motion } from "framer-motion";
import { DownloadButton } from "@/components/ui/download-button";

const GOOGLE_PLAY_LINK =
  "https://play.google.com/store/apps/details?id=az.premiumbank.all_miles.app&hl=en";
const APP_STORE_LINK =
  "https://apps.apple.com/in/app/premium-bank-allmiles/id6740502033";

export function BottomCta() {
  return (
    <section className="pb-16 pt-8 sm:pb-20">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.35),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.28),transparent_34%)]" />
          <p className="text-sm uppercase tracking-[0.26em] text-sky-700 dark:text-cyan-100">
            Start your journey
          </p>
          <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4.6vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-slate-900 dark:text-white">
            Download AllMiles Today and Convert Everyday Spending Into Takeoff Moments.
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            Unlock instant miles, premium routes, and a smarter way to travel with every
            payment you make.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <DownloadButton href={GOOGLE_PLAY_LINK} store="google-play" />
            <DownloadButton href={APP_STORE_LINK} store="app-store" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
