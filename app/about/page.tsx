"use client";

import { SiteHeader } from "@/components/sections/site-header";
import { Footer } from "@/components/sections/footer";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { FlightGlobe } from "@/components/ui/flight-globe";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_15%_15%,rgba(14,170,253,0.08),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(250,250,0,0.05),transparent_35%)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(240,249,255,0.9)_50%,rgba(224,244,255,0.85))]" />
      <SiteHeader />

      <section className="container-shell py-20 sm:py-28">
        {/* Heading + Globe */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#0EAAFD]">
              {a.eyebrow}
            </p>
            <h1 className="mt-3 text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-slate-900">
              <span className="animate-shimmer bg-gradient-to-r from-[#00C853] via-[#7dd3fc] to-[#0EAAFD] bg-clip-text text-transparent">
                AllTrips
              </span>
              {a.headline1.replace("AllTrips", "")} {a.headline2}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {a.body}
            </p>
            <p className="mt-4 text-sm text-slate-400">{a.voen}</p>
          </div>
          <FlightGlobe />
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-slate-200" />

        {/* Two-column: mission + values */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {a.missionTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {a.missionBody}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {a.whyTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {a.whyItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0EAAFD]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-slate-200" />

        {/* Contact */}
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold text-slate-900">
            {a.contactTitle}
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              {
                icon: <MapPin size={18} />,
                label: t.contact.address,
                href: "https://maps.google.com/maps?q=Əlimərdan+Bəy+Topçubaşov+84,+Baku,+Azerbaijan",
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
                icon: <Mail size={18} />,
                label: "info@all-trips.az",
                href: "mailto:info@all-trips.az",
              },
              {
                icon: <Instagram size={18} />,
                label: "@alltripsaz",
                href: "https://instagram.com/alltripsaz",
              },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 text-slate-700 transition hover:text-[#0EAAFD]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition group-hover:border-[#0EAAFD]/40 group-hover:bg-[#0EAAFD]/5 group-hover:text-[#0EAAFD]">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
