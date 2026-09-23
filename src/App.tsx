import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { VideoSection } from './components/VideoSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { AppointmentSection } from './components/AppointmentSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';

export default function App() {
  // Ensure the page stays strictly in daytime mode
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'day');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#FAF8F5');
    }
    try {
      localStorage.removeItem('vanessa_chaves_theme_mode');
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#5B4942]">
      {/* Fixed Header with Navigation and Quick WhatsApp CTA */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section - First Fold */}
        <Hero />

        {/* 2. Trust Section - 4 Differentials */}
        <TrustSection />

        {/* 3. About Vanessa Chaves */}
        <AboutSection />

        {/* 4. Specialized Treatments Cards + Modal */}
        <TreatmentsSection />

        {/* 5. Video Highlight - Vanessa Chaves Instagram Reel */}
        <VideoSection />

        {/* 6. Why Choose Vanessa Chaves */}
        <WhyChooseSection />

        {/* 6. How It Works - 4 Steps */}
        <HowItWorksSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQ - Accordion */}
        <FaqSection />

        {/* 9. Appointment Scheduling Form */}
        <AppointmentSection />

        {/* 10. Final CTA */}
        <CtaSection />
      </main>

      {/* 11. Footer with Legal Disclaimer and Local Info */}
      <Footer />

      {/* 12. Smooth Back to Top Button (appears after Hero) */}
      <BackToTopButton />
    </div>
  );
}
