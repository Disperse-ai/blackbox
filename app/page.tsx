"use client";
import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/sections/hero-section';
import SocialProofSection from '@/components/sections/social-proof-section';
import BenefitsSection from '@/components/sections/benefits-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CaseStudiesSection from '@/components/sections/case-studies-section';
import FaqSection from '@/components/sections/faq-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.8)_100%)]"></div>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <BenefitsSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}