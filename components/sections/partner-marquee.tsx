"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";
import { Reveal } from "@/components/ui/reveal";

const partnerAirlines = [
  { name: "AZAL", iata: "J2" },
  { name: "Wizz Air", iata: "W6" },
  { name: "S7 Airlines", iata: "S7" },
  { name: "UTair", iata: "UT" },
  { name: "Lufthansa", iata: "LH" },
  { name: "Qatar Airways", iata: "QR" },
  { name: "Turkish Airlines", iata: "TK" },
  { name: "Emirates", iata: "EK" },
  { name: "Etihad", iata: "EY" },
  { name: "Singapore Airlines", iata: "SQ" },
];

export function PartnerMarquee() {
  const { t } = useTranslation();
  const repeatedSets = [0, 1, 2];

  return (
    <section id="partners" className="pb-20 sm:pb-24">
      <div className="container-shell">
        <Reveal>
          <h2 className="section-title max-w-3xl text-slate-900 dark:text-white">
            Partner Airlines
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            Built for scale with regional leaders and world-class global
            carriers.
          </p>
        </Reveal>
      </div>

      <div className="mt-10 overflow-hidden border-y border-slate-200 py-6 dark:border-white/10">
        <div className="px-4 sm:px-6">
          <div className="flex w-max animate-marquee-third [animation-direction:reverse]">
            {repeatedSets.map((setIndex) => (
              <div key={setIndex} className="flex shrink-0 gap-4 pr-4">
                {partnerAirlines.map((airline, itemIndex) => (
                  <div
                    key={`${setIndex}-${itemIndex}-${airline.name}`}
                    className="glass-panel inline-flex h-14 min-w-[200px] items-center gap-3 rounded-2xl px-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white p-1 shadow-sm">
                      <Image
                        src={`https://www.gstatic.com/flights/airline_logos/70px/${airline.iata}.png`}
                        alt={airline.name}
                        width={24}
                        height={24}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200/90">
                      {airline.name}
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
