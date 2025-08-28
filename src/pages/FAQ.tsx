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
      answer: "We offer comprehensive digital solutions including professional website development, complete e-commerce stores, custom mobile app development for iOS & Android, and strategic branding & digital marketing services. Each service is designed to help businesses establish a strong online presence and drive growth."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary by complexity: Business websites typically take 1-2 weeks, e-commerce sites take 2-3 weeks, and mobile apps require 4-6 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Why are your prices significantly lower than other agencies?",
      answer: "We've optimized our development process and operate with a lean but highly skilled team, eliminating unnecessary overhead costs. We use modern tools and frameworks that increase efficiency, and we're passionate about making professional digital solutions accessible to businesses of all sizes. Despite lower prices, we never compromise on quality."
    },
    {
      question: "What kind of ongoing support do you provide?",
      answer: "We offer comprehensive support packages that include regular updates, security monitoring, backup services, performance optimization, technical assistance, and training. Support duration varies by package: 1 month for business websites, 3 months for e-commerce sites, and 6 months for mobile apps."
    },
    {
      question: "Do you help with SEO and digital marketing?",
      answer: "Yes! Our digital strategy service includes comprehensive SEO optimization, keyword research, content strategy, social media marketing plans, Google Analytics setup, and ongoing digital marketing consultation. We ensure your website ranks well in search engines and attracts your target audience."
    },
    {
      question: "Can you work with businesses outside of Rwanda?",
      answer: "Absolutely! While we're proudly based in Kigali, Rwanda, we work with clients across Africa and internationally. We use modern communication tools for seamless remote collaboration and have successfully delivered projects for clients in Kenya, Uganda, Tanzania, and beyond."
    },
    {
      question: "What technologies and tools do you use?",
      answer: "We use cutting-edge, industry-standard technologies including React, Next.js, Node.js, MongoDB, React Native, Firebase, and cloud platforms like AWS. We choose technologies based on reliability, scalability, and future-proofing to ensure your solution grows with your business."
    },
    {
      question: "Can you redesign or improve an existing website?",
      answer: "Yes, we specialize in website redesigns and improvements. We can modernize outdated designs, improve performance, enhance user experience, add new features, optimize for mobile devices, and ensure better search engine visibility. We'll audit your current site and provide recommendations."
    },
    {
      question: "Do you provide training and documentation?",
      answer: "Yes, we provide comprehensive training sessions for you and your team, detailed documentation, video tutorials, and step-by-step guides. We ensure you're completely comfortable managing your digital solution independently, and we're always available for additional support when needed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods for your convenience: bank transfers, mobile money (MTN Mobile Money, Airtel Money), international wire transfers, and digital payment platforms. We also offer flexible payment plans including full payment (5% discount), 50/50 payment, and monthly installments for larger projects."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can handle all technical aspects including domain registration, reliable hosting setup, SSL certificates, email accounts, and ongoing maintenance. We recommend hosting solutions that offer the best performance and value for your specific needs."
    },
    {
      question: "How do you ensure the security of websites and apps?",
      answer: "Security is a top priority. We implement SSL certificates, secure coding practices, regular security updates, backup systems, firewall protection, and follow industry best practices. For e-commerce sites, we ensure PCI compliance and secure payment processing."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We can integrate various third-party services including payment gateways (Stripe, PayPal, MTN Mobile Money), social media platforms, Google services, email marketing tools, analytics platforms, CRM systems, and any other APIs your business requires."
    },
    {
      question: "What makes IXONITE different from other agencies?",
      answer: "Our unique combination of affordability, quality, and personalized service sets us apart. We're a young, innovative team that understands the challenges facing businesses today. We offer transparent pricing, no hidden fees, modern technology solutions, and genuine partnership throughout your digital transformation journey."
    },
    {
      question: "Do you offer maintenance packages after project completion?",
      answer: "Yes, we offer various maintenance packages including regular updates, security monitoring, backup management, performance optimization, content updates, and technical support. Packages are tailored to your specific needs and budget, ensuring your digital solution continues to perform optimally."
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
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Quick <span className="text-primary">Answers</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Find quick answers to common questions organized by category.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  category: "Pricing & Payments",
                  icon: "💰",
                  questions: [
                    "Website: 70,000 RWF ($50)",
                    "E-commerce: 150,000 RWF ($120)", 
                    "Mobile App: 500,000 RWF ($400)",
                    "Flexible payment plans available",
                    "5% discount for full payment"
                  ]
                },
                {
                  category: "Project Timeline",
                  icon: "⏰",
                  questions: [
                    "Business Website: 1-2 weeks",
                    "E-commerce Site: 2-3 weeks",
                    "Mobile App: 4-6 weeks",
                    "Free revisions included",
                    "Regular progress updates"
                  ]
                },
                {
                  category: "Support & Maintenance",
                  icon: "🛠️",
                  questions: [
                    "1-6 months support included",
                    "Security monitoring",
                    "Regular backups",
                    "Performance optimization",
                    "Training and documentation"
                  ]
                }
              ].map((category, index) => (
                <div 
                  key={category.category}
                  className="p-8 bg-background rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.questions.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-body text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 p-8 bg-primary/5 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h3>
              <p className="text-body mb-8 text-lg">
                We're here to help! Get in touch with us directly and we'll provide personalized answers to your questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl mb-3">📧</div>
                  <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                  <p className="text-body text-sm mb-3">Get detailed responses to your questions</p>
                  <a 
                    href="mailto:moreaboutus@gmail.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    moreaboutus@gmail.com
                  </a>
                </div>
                
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="font-bold text-foreground mb-2">WhatsApp</h4>
                  <p className="text-body text-sm mb-3">Quick chat and instant responses</p>
                  <a 
                    href="https://wa.me/250788548084"
                    className="text-primary font-semibold hover:underline"
                  >
                    +250 788 548 084
                  </a>
                </div>
                
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl mb-3">📞</div>
                  <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                  <p className="text-body text-sm mb-3">Direct phone consultation</p>
                  <a 
                    href="tel:+250788548084"
                    className="text-primary font-semibold hover:underline"
                  >
                    +250 788 548 084
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:moreaboutus@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Send us an Email
                </a>
                <a 
                  href="https://wa.me/250788548084"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Chat on WhatsApp
                </a>
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