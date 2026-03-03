"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { CreditCard, PlaneTakeoff, WalletCards } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      step: "Step 01",
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      icon: CreditCard,
    },
    {
      step: "Step 02",
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      icon: WalletCards,
    },
    {
      step: "Step 03",
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      icon: PlaneTakeoff,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const carousel = carouselRef.current;
    if (!carousel || window.innerWidth >= 1024) return;
    const scrollable = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = latest * scrollable;
  });

  return (
    // On mobile: tall wrapper so page scroll drives the carousel.
    // On lg+: normal auto height, section is not sticky.
    <div ref={wrapperRef} className="max-lg:h-[300svh]">
      <section
        id="how-it-works"
        className="pb-20 pt-8 max-lg:sticky max-lg:top-20 sm:pb-24"
      >
        <div className="container-shell">
          <Reveal>
            <h2 className="section-title max-w-3xl text-slate-900">
              {t.howItWorks.title}
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl">
              {t.howItWorks.subtitle}
            </p>
          </Reveal>

          <div
            ref={carouselRef}
            className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <article className="glass-panel group relative min-w-[320px] flex-1 overflow-hidden rounded-3xl p-6 sm:min-w-[360px] sm:p-7 lg:min-w-0">
                    <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#0EAAFD]/15 blur-2xl transition duration-300 group-hover:bg-[#0EAAFD]/25" />
                    <div className="relative flex flex-col items-start gap-5">
                      <div className="flex w-full items-center gap-3">
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0EAAFD]/10 text-[#0EAAFD] transition group-hover:-translate-y-0.5 group-hover:bg-[#0EAAFD]/20">
                          <Icon size={22} />
                        </span>
                        <div className="inline-flex min-w-[110px] shrink-0 items-center justify-center rounded-xl border border-[#0EAAFD]/30 bg-[#0EAAFD]/8 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#0EAAFD] dark:bg-[#0EAAFD]/10 dark:text-[#7dd3fc]">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-prose text-[0.99rem] leading-relaxed text-slate-700 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
