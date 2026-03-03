"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ContactCard() {
  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "info@all-trips.az",
      href: "mailto:info@all-trips.az",
    },
    {
      icon: <Phone size={18} />,
      label: "+994 55 455 88 88",
      href: "tel:+994554558888",
    },
    {
      icon: <WhatsAppIcon size={18} />,
      label: "+994 55 455 88 88 (WhatsApp)",
      href: "https://wa.me/994554558888",
    },
    {
      icon: <Instagram size={18} />,
      label: "@alltripsaz",
      href: "https://instagram.com/alltripsaz",
    },
    {
      icon: <MapPin size={18} />,
      label: "Əlimərdan Bəy Topçubaşov 84",
      href: "https://maps.google.com/maps?q=Əlimərdan+Bəy+Topçubaşov+84,+Baku,+Azerbaijan",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col justify-center"
    >
      <div className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md p-6 flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-1">
          Contact Us
        </p>
        {contacts.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-white/90 transition hover:text-white group"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/70 transition group-hover:border-white/40 group-hover:bg-white/20 group-hover:text-white">
                {item.icon}
              </span>
              <span className="text-sm leading-snug">{item.label}</span>
            </a>
          ) : (
            <div
              key={item.label}
              className="flex items-center gap-3 text-white/80"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/70">
                {item.icon}
              </span>
              <span className="text-sm leading-snug">{item.label}</span>
            </div>
          ),
        )}
      </div>
    </motion.div>
  );
}

function HeroCopy() {
  const { t } = useTranslation();
  const stats = [
    { value: "10,000+", label: t.hero.statsMonthly },
    { value: "120+", label: t.hero.statsRoutes },
    { value: "24/7", label: t.hero.statsRedemption },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
        <span className="animate-shimmer bg-gradient-to-r from-[#00C853] via-[#7dd3fc] to-[#0EAAFD] bg-clip-text text-transparent">
          AllTrips
        </span>
        {"\u003a "}
        {t.hero.headline}
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-[clamp(1rem,1.75vw,1.22rem)] text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
        {t.hero.subtitle}
      </p>

      <div className="mt-9" />

      <div className="mt-8 grid max-w-[520px] grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-center backdrop-blur-sm"
          >
            <p className="text-xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <Image
        src="/main_background.jpg"
        alt=""
        fill
        priority
        className="-z-10 object-cover object-center"
      />
      {/* Dark gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
      <div className="relative z-10 container-shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_340px]">
          <HeroCopy />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
