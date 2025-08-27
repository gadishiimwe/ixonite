import ServicesSection from "@/components/ServicesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;