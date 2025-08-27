import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">IXONITE</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Empowering businesses across Rwanda and beyond with affordable, innovative digital solutions.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;