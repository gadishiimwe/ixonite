import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does IXONITE offer?",
      answer: "We offer comprehensive digital solutions including website development, e-commerce stores, mobile app development, and branding & digital strategy services."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically, a business website takes 1-2 weeks, while e-commerce sites take 2-3 weeks. Mobile apps usually require 4-6 weeks depending on complexity."
    },
    {
      question: "Why are your prices lower than other agencies?",
      answer: "We operate efficiently with a lean team and focus on delivering quality solutions without unnecessary overhead costs, making digital transformation accessible to all businesses."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including updates, security monitoring, backup services, and technical assistance."
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer: "Absolutely! Our branding & digital strategy service includes SEO optimization, digital marketing strategy, and online presence enhancement."
    },
    {
      question: "Do you work with businesses outside Rwanda?",
      answer: "Yes, while we're based in Kigali, we work with clients across Africa and internationally through remote collaboration."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, reliable technologies including React, Node.js, MongoDB, and other cutting-edge tools to ensure your solution is future-proof."
    },
    {
      question: "Can you redesign an existing website?",
      answer: "Yes, we can redesign and modernize existing websites, improve their performance, and add new features as needed."
    },
    {
      question: "Do you provide training on how to use the website/app?",
      answer: "Yes, we provide comprehensive training sessions and documentation to ensure you can manage your digital solution effectively."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, mobile money, and international payment options for our global clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Find answers to common questions about our services, process, and pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="bg-white rounded-xl shadow-elegant border-0 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-foreground hover:text-primary font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-body leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
                <p className="text-body mb-6">
                  We're here to help! Contact us directly and we'll be happy to assist you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:moreaboutus@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send us an Email
                  </a>
                  <a 
                    href="https://wa.me/250788548084"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;