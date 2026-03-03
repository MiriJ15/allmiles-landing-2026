"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useTranslation } from "@/lib/i18n";

export function SiteHeader() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.howItWorks, id: "how-it-works" },
    { label: t.nav.destinations, id: "destinations" },
    { label: t.nav.partners, id: "partners" },
  ];

  const smoothScrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/20 bg-white/20 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => smoothScrollTo("top")}
          className="inline-flex items-center gap-2"
        >
          <Image
            src="/alltrips_logo.png"
            alt="AllTrips"
            height={60}
            width={200}
            className="h-[60px] w-auto object-contain"
            priority
          />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => smoothScrollTo(item.id)}
              className="inline-flex h-[60px] items-center text-sm font-medium tracking-wide text-slate-900 transition hover:text-slate-700"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex h-[60px] items-center gap-2">
          <LanguageSelector />
        </div>
      </div>
    </motion.header>
  );
}
