import { BottomCta } from "@/components/sections/bottom-cta";
import { Destinations } from "@/components/sections/destinations";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { SiteHeader } from "@/components/sections/site-header";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_15%_15%,rgba(125,211,252,0.28),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(96,165,250,0.24),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(52,211,153,0.2),transparent_45%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.25),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.20),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.16),transparent_45%)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(248,250,252,0.9),rgba(241,245,249,0.78)_40%,rgba(219,234,254,0.72))] dark:bg-[linear-gradient(120deg,rgba(15,23,42,0.88),rgba(15,23,42,0.68)_40%,rgba(12,74,110,0.6))]" />
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <Destinations />
      <PartnerMarquee />
      <BottomCta />
      <Footer />
    </main>
  );
}
