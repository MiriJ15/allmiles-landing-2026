"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

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
];

export function BottomCta() {
  const { t } = useTranslation();
  const allContacts = [
    ...contacts,
    {
      icon: <MapPin size={18} />,
      label: t.contact.address,
      href: "https://maps.google.com/maps?q=Əlimərdan+Bəy+Topçubaşov+84,+Baku,+Azerbaijan",
    },
  ];

  return (
    <section className="pb-16 pt-8 sm:pb-20">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-14"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(14,170,253,0.35),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(250,250,0,0.18),transparent_34%)]" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_300px]">
            {/* Copy */}
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-[#0EAAFD]">
                {t.cta.label}
              </p>
              <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4.6vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-slate-900">
                {t.cta.headline}
              </h2>
              <p className="section-subtitle mt-4 max-w-2xl">
                {t.cta.subtitle}
              </p>
            </div>

            {/* Contact card */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/50 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">
                {t.cta.contactUs}
              </p>
              {allContacts.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 text-slate-700 transition hover:text-[#0EAAFD] group"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition group-hover:border-[#0EAAFD]/40 group-hover:bg-[#0EAAFD]/5 group-hover:text-[#0EAAFD]">
                      {item.icon}
                    </span>
                    <span className="text-sm leading-snug">{item.label}</span>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400">
                      {item.icon}
                    </span>
                    <span className="text-sm leading-snug">{item.label}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
