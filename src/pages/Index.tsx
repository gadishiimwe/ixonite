import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeShowcase from "@/components/HomeShowcase";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <HomeShowcase />
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="why-choose">
        <WhyChooseSection />
      </section>
      <section id="stats">
        <StatsSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
