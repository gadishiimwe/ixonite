import PricingSection from "@/components/PricingSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Affordable <span className="text-primary">Pricing</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Transparent pricing that makes digital transformation accessible for every business.
              </p>
            </div>
          </div>
        </section>
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pricing;