import { BottomCta } from "@/components/sections/bottom-cta";
import { Destinations } from "@/components/sections/destinations";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { SiteHeader } from "@/components/sections/site-header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_15%_15%,rgba(14,170,253,0.12),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(250,250,0,0.08),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(14,170,253,0.1),transparent_45%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(14,170,253,0.2),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(250,250,0,0.07),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(14,170,253,0.12),transparent_45%)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(240,249,255,0.9)_50%,rgba(224,244,255,0.85))] dark:bg-[linear-gradient(160deg,rgba(5,12,26,0.97),rgba(5,12,26,0.88)_50%,rgba(7,20,40,0.95))]" />
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <Destinations />
      <PartnerMarquee />
      <BottomCta />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
