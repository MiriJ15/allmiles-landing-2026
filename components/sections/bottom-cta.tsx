"use client";

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

export function BottomCta() {
  const { t } = useTranslation();

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
              {contacts.map((item) =>
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
