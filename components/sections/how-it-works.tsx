"use client";

import { CreditCard, PlaneTakeoff, WalletCards } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    step: "Step 01",
    title: "Shop & Spend",
    description:
      "Connect your card in seconds or pay through the app. Every everyday transaction becomes a travel opportunity.",
    icon: CreditCard
  },
  {
    step: "Step 02",
    title: "Earn Miles Automatically",
    description:
      "Cashback converts to miles in real time, with transparent tracking and premium partner boosters built in.",
    icon: WalletCards
  },
  {
    step: "Step 03",
    title: "Redeem & Fly",
    description:
      "Search routes and book flights directly in AllMiles using your balance. Your miles are your ticket.",
    icon: PlaneTakeoff
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pb-20 pt-8 sm:pb-24">
      <div className="container-shell">
        <Reveal>
          <h2 className="section-title max-w-3xl text-slate-900 dark:text-white">How It Works</h2>
          <p className="section-subtitle mt-4 max-w-2xl">
            A streamlined 3-step mechanism designed for zero friction between spending,
            earning, and travel redemption.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <article className="glass-panel group relative min-w-[320px] flex-1 overflow-hidden rounded-3xl p-6 sm:min-w-[360px] sm:p-7 lg:min-w-0">
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-300/20 blur-2xl transition duration-300 group-hover:bg-cyan-300/35" />
                  <div className="relative flex flex-col items-start gap-5">
                    <div className="flex w-full items-center gap-3">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900/70 text-cyan-200 transition group-hover:-translate-y-0.5 group-hover:text-cyan-100">
                        <Icon size={22} />
                      </span>
                      <div className="inline-flex min-w-[110px] shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-100/60 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-sky-800 dark:bg-cyan-400/10 dark:text-cyan-200">
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
  );
}
