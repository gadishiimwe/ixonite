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
        
        {/* Detailed Service Offerings */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-20">
              
              {/* Website Development */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Website <span className="text-primary">Development</span>
                  </h2>
                  <p className="text-xl text-body mb-8 leading-relaxed">
                    Transform your online presence with modern, responsive websites that convert visitors into customers. 
                    Our websites are built with the latest technologies and optimized for performance, SEO, and user experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Responsive Design (Mobile-First)",
                      "SEO Optimization",
                      "Fast Loading Times",
                      "Content Management System",
                      "Contact Forms & Analytics",
                      "Social Media Integration"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-2">Starting at 70,000 RWF</div>
                    <div className="text-body">Complete business website with 5 pages, SEO optimization, and 1 month support.</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-primary/60 text-8xl">💻</div>
                </div>
              </div>
              
              {/* E-commerce Development */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2">
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    E-commerce <span className="text-primary">Solutions</span>
                  </h2>
                  <p className="text-xl text-body mb-8 leading-relaxed">
                    Launch your online store with our comprehensive e-commerce solutions. From product catalogs 
                    to payment processing, we handle everything to get you selling online quickly and securely.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Product Catalog Management",
                      "Secure Payment Gateway",
                      "Inventory Management",
                      "Order Processing System",
                      "Customer Account Portal",
                      "Mobile Shopping Experience"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-2">Starting at 150,000 RWF</div>
                    <div className="text-body">Full e-commerce platform with payment integration and 3 months support.</div>
                  </div>
                </div>
                
                <div className="lg:order-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-primary/60 text-8xl">🛒</div>
                </div>
              </div>
              
              {/* Mobile App Development */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Mobile App <span className="text-primary">Development</span>
                  </h2>
                  <p className="text-xl text-body mb-8 leading-relaxed">
                    Reach your customers wherever they are with custom mobile applications. We develop native 
                    and cross-platform apps that provide seamless user experiences on both iOS and Android.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Cross-Platform Development",
                      "Native iOS & Android",
                      "Push Notifications",
                      "Offline Functionality",
                      "API Integration",
                      "App Store Deployment"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-2">Starting at 500,000 RWF</div>
                    <div className="text-body">Custom mobile app for iOS & Android with 6 months support.</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-primary/60 text-8xl">📱</div>
                </div>
              </div>
              
              {/* Digital Strategy */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="lg:order-2">
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Digital <span className="text-primary">Strategy</span>
                  </h2>
                  <p className="text-xl text-body mb-8 leading-relaxed">
                    Beyond development, we help you create a comprehensive digital strategy that aligns with 
                    your business goals. From branding to marketing, we ensure your digital presence drives results.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      "Brand Identity Design",
                      "Digital Marketing Strategy",
                      "SEO & Content Strategy",
                      "Social Media Management",
                      "Analytics & Reporting",
                      "Competitor Analysis"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-2">Custom Pricing</div>
                    <div className="text-body">Tailored digital strategy packages based on your specific needs and goals.</div>
                  </div>
                </div>
                
                <div className="lg:order-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-primary/60 text-8xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Technologies We <span className="text-primary">Use</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                We leverage the latest and most reliable technologies to build solutions that are fast, 
                secure, and scalable for your growing business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {[
                "React", "Node.js", "MongoDB", "React Native", 
                "Next.js", "TypeScript", "Tailwind CSS", "Express.js",
                "Firebase", "AWS", "Stripe", "PayPal"
              ].map((tech, index) => (
                <div 
                  key={tech}
                  className="text-center p-6 bg-background rounded-xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="text-sm font-semibold text-foreground">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;