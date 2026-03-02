"use client";

import { Reveal } from "@/components/ui/reveal";

const partnerAirlines = [
  "AZAL",
  "Wizz Air",
  "S7 Airlines",
  "UTair",
  "Lufthansa",
  "Qatar Airways",
  "Turkish Airlines",
  "Emirates",
  "Etihad",
  "Singapore Airlines"
];

export function PartnerMarquee() {
  const repeatedSets = [0, 1, 2];

  return (
    <section id="partners" className="pb-20 sm:pb-24">
      <div className="container-shell">
        <Reveal>
          <h2 className="section-title max-w-3xl text-slate-900 dark:text-white">
            Partner Airlines
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            Built for scale with regional leaders and world-class global carriers.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 overflow-hidden border-y border-slate-200 py-6 dark:border-white/10">
        <div className="px-4 sm:px-6">
          <div className="flex w-max animate-marquee-third [animation-direction:reverse]">
            {repeatedSets.map((setIndex) => (
              <div key={setIndex} className="flex shrink-0 gap-4 pr-4">
                {partnerAirlines.map((name, itemIndex) => (
                  <div
                    key={`${setIndex}-${itemIndex}-${name}`}
                    className="glass-panel inline-flex h-14 min-w-[180px] items-center justify-center rounded-2xl px-6"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200/90">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
