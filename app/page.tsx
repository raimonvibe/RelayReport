import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all focus:translate-y-0 focus:opacity-100 dark:bg-white dark:text-slate-900"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
