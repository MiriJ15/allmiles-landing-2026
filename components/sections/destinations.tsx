"use client";

import { Reveal } from "@/components/ui/reveal";

const destinations = [
  {
    city: "London",
    miles: "27,500",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
  },
  {
    city: "Dubai",
    miles: "19,900",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    city: "Paris",
    miles: "24,600",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    city: "Tokyo",
    miles: "41,000",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80"
  },
  {
    city: "New York",
    miles: "29,300",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1600&q=80"
  }
];

export function Destinations() {
  const repeatedSets = [0, 1, 2];

  return (
    <section id="destinations" className="py-20 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <h2 className="section-title max-w-3xl text-slate-900 dark:text-white">
            Popular Destinations
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            From city breaks to long-haul escapes, see where your everyday purchases can
            take you next.
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
                        backgroundPosition: "center"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-900/35 to-transparent transition duration-500 group-hover:from-slate-950/80 group-hover:via-slate-900/35" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

                    <div className="glass-panel absolute inset-x-4 bottom-4 rounded-2xl p-4 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/40">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                        AllMiles Fare
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">{destination.city}</p>
                      <p className="mt-1 text-sm text-slate-200">
                        Fly to {destination.city} from {destination.miles} miles
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
