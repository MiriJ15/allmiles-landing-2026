"use client";

import { useTranslation } from "@/lib/i18n";
import { Reveal } from "@/components/ui/reveal";

const destinations = [
  {
    city: "Budapest",
    miles: "120",
    image: "/budapest.png",
  },
  {
    city: "Rome",
    miles: "120",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Tbilisi",
    miles: "130",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Aktau",
    miles: "135",
    image:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Izmir",
    miles: "140",
    image: "/izmir.png",
  },
  {
    city: "Istanbul",
    miles: "155",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Tashkent",
    miles: "160",
    image: "/tashkent.png",
  },
  {
    city: "Antalya",
    miles: "175",
    image: "/antalya.png",
  },
  {
    city: "Abu Dhabi",
    miles: "215",
    image: "/abudhabi.png",
  },
  {
    city: "London",
    miles: "215",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Prague",
    miles: "220",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "New Delhi",
    miles: "220",
    image: "/new_delhi.png",
  },
  {
    city: "Milan",
    miles: "225",
    image: "/milan.png",
  },
  {
    city: "Moscow",
    miles: "230",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Jeddah",
    miles: "250",
    image: "/jeddah.png",
  },
  {
    city: "Bishkek",
    miles: "265",
    image: "/bishkek.png",
  },
  {
    city: "Paris",
    miles: "320",
    image: "/paris.png",
  },
  {
    city: "Beijing",
    miles: "360",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    city: "Saint Petersburg",
    miles: "375",
    image: "/saint_petersbourg.png",
  },
  {
    city: "Tokyo",
    miles: "620",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80",
  },
];

export function Destinations() {
  const { t } = useTranslation();
  const repeatedSets = [0, 1, 2];

  return (
    <section id="destinations" className="py-20 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <h2 className="section-title max-w-3xl text-slate-900 dark:text-white">
            {t.destinations.title}
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            {t.destinations.subtitle}
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />

        <div className="px-4 sm:px-6">
          <div className="flex w-max animate-marquee-third">
            {repeatedSets.map((setIndex) => (
              <div key={setIndex} className="flex shrink-0 gap-4 pr-4">
                {destinations.map((destination, cardIndex) => (
                  <article
                    key={`${setIndex}-${cardIndex}-${destination.city}`}
                    className="group relative h-[380px] w-[290px] overflow-hidden rounded-3xl bg-slate-950/70"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500 group-hover:from-black/60" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:border-white/50 group-hover:bg-white/25">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/75">
                        {t.destinations.fare}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        {t.destinations.cityNames[destination.city] ??
                          destination.city}
                      </p>
                      <p className="mt-1 text-sm text-white/85">
                        {t.destinations.flyTo(
                          t.destinations.cityNames[destination.city] ??
                            destination.city,
                          destination.miles,
                        )}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
