import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Ready to start your digital transformation? Get in touch with us today.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;