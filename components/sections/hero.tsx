"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

function buildContacts(address: string) {
  return [
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
      label: address,
      href: "https://maps.google.com/maps?q=Əlimərdan+Bəy+Topçubaşov+84,+Baku,+Azerbaijan",
    },
  ];
}

type ContactItem = ReturnType<typeof buildContacts>[number];

function ContactRow({ item }: { item: ContactItem }) {
  const inner = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/70 transition group-hover:border-white/40 group-hover:bg-white/20 group-hover:text-white">
        {item.icon}
      </span>
      <span className="text-sm leading-snug">{item.label}</span>
    </>
  );
  return item.href ? (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 text-white/90 transition hover:text-white group"
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-3 text-white/80">{inner}</div>
  );
}

function ContactCard() {
  const { t } = useTranslation();
  const contacts = buildContacts(t.contact.address);
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col justify-center"
    >
      <div className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md p-6 flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60 mb-1">
          {t.cta.contactUs}
        </p>
        {contacts.map((item) => (
          <ContactRow key={item.label} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function HeroCopy() {
  const { t } = useTranslation();
  const contacts = buildContacts(t.contact.address);
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

      <div className="mt-6 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative cursor-default rounded-xl border border-white/25 bg-white/15 px-2 py-3 text-center backdrop-blur-sm transition-all duration-200 hover:z-10 hover:scale-110 hover:border-white/50 hover:bg-white/25 hover:shadow-lg"
          >
            <p className="text-lg font-semibold text-white">{stat.value}</p>
            <p className="text-[10px] uppercase leading-tight tracking-wide text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile-only contact list */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:hidden">
        {contacts.map((item) => (
          <ContactRow key={item.label} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden -mt-20 pb-20 pt-36 sm:pt-44"
    >
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
