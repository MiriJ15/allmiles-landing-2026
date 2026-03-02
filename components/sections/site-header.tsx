"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Destinations", id: "destinations" },
  { label: "Partners", id: "partners" }
];

export function SiteHeader() {
  const smoothScrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/65"
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => smoothScrollTo("top")}
          className="inline-flex items-center gap-2 text-slate-900 dark:text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-600 text-slate-950">
            <Compass size={18} />
          </span>
          <span className="text-lg font-semibold tracking-tight">AllMiles</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => smoothScrollTo(item.id)}
              className="text-sm font-medium tracking-wide text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </motion.header>
  );
}
