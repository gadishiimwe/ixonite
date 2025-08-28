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
        
        {/* Detailed Pricing Information */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What's <span className="text-primary">Included</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Every package includes comprehensive features to ensure your digital solution is complete and professional.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-16">
              
              {/* Business Website Package */}
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Business Website Package</h3>
                    <div className="text-4xl font-black text-primary mb-6">70,000 RWF <span className="text-xl text-body">/ $50</span></div>
                    <p className="text-body mb-8 leading-relaxed">
                      Perfect for small businesses, professionals, and service providers who want to establish 
                      a strong online presence and attract more customers.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground">What You Get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Professional Design", "Mobile Responsive", "SEO Optimized",
                          "Contact Forms", "Google Analytics", "Social Media Links",
                          "1 Year Domain", "3 Months Hosting", "SSL Certificate",
                          "Basic Training", "1 Month Support", "Content Upload"
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
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-foreground mb-3">Delivery Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-body">Design & Planning</span>
                          <span className="text-primary font-semibold">2-3 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Development</span>
                          <span className="text-primary font-semibold">5-7 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Testing & Launch</span>
                          <span className="text-primary font-semibold">1-2 days</span>
                        </div>
                        <div className="border-t border-primary/20 pt-3">
                          <div className="flex justify-between font-bold">
                            <span className="text-foreground">Total Duration</span>
                            <span className="text-primary">1-2 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-6 rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-3">Perfect For:</h4>
                      <ul className="space-y-2 text-body">
                        <li>• Small businesses and startups</li>
                        <li>• Professional service providers</li>
                        <li>• Restaurants and local businesses</li>
                        <li>• Portfolio websites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* E-commerce Package */}
              <div className="bg-background rounded-2xl p-8 border-2 border-primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-3xl font-bold text-foreground">E-commerce Website Package</h3>
                      <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                    <div className="text-4xl font-black text-primary mb-6">150,000 RWF <span className="text-xl text-body">/ $120</span></div>
                    <p className="text-body mb-8 leading-relaxed">
                      Complete online store solution for businesses ready to sell products online with 
                      professional payment processing and inventory management.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground">What You Get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Everything in Business", "Product Catalog", "Shopping Cart",
                          "Payment Gateway", "Inventory System", "Order Management",
                          "Customer Accounts", "Admin Dashboard", "Mobile Optimized",
                          "Security Features", "Backup System", "3 Months Support"
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
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-foreground mb-3">Delivery Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-body">Planning & Design</span>
                          <span className="text-primary font-semibold">3-5 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Development</span>
                          <span className="text-primary font-semibold">10-14 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Testing & Launch</span>
                          <span className="text-primary font-semibold">2-3 days</span>
                        </div>
                        <div className="border-t border-primary/20 pt-3">
                          <div className="flex justify-between font-bold">
                            <span className="text-foreground">Total Duration</span>
                            <span className="text-primary">2-3 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-6 rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-3">Perfect For:</h4>
                      <ul className="space-y-2 text-body">
                        <li>• Retail businesses</li>
                        <li>• Product manufacturers</li>
                        <li>• Fashion and accessories</li>
                        <li>• Electronics and gadgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile App Package */}
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Mobile App Package</h3>
                    <div className="text-4xl font-black text-primary mb-6">500,000 RWF <span className="text-xl text-body">/ $400</span></div>
                    <p className="text-body mb-8 leading-relaxed">
                      Custom mobile application for iOS and Android platforms, designed to engage your 
                      customers and provide seamless mobile experiences.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground">What You Get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "iOS & Android Apps", "Custom Design", "User Authentication",
                          "Push Notifications", "API Integration", "Offline Support",
                          "App Store Publishing", "Admin Panel", "Analytics Integration",
                          "Testing & QA", "User Training", "6 Months Support"
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
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-foreground mb-3">Delivery Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-body">Planning & Design</span>
                          <span className="text-primary font-semibold">1 week</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Development</span>
                          <span className="text-primary font-semibold">3-4 weeks</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body">Testing & Publishing</span>
                          <span className="text-primary font-semibold">1 week</span>
                        </div>
                        <div className="border-t border-primary/20 pt-3">
                          <div className="flex justify-between font-bold">
                            <span className="text-foreground">Total Duration</span>
                            <span className="text-primary">5-6 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/20 p-6 rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-3">Perfect For:</h4>
                      <ul className="space-y-2 text-body">
                        <li>• Service-based businesses</li>
                        <li>• Booking and appointment apps</li>
                        <li>• Delivery and logistics</li>
                        <li>• Community and social apps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Flexible <span className="text-primary">Payment</span> Options
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                We offer multiple payment options to make it easy for you to get started with your digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Full Payment",
                  discount: "5% Discount",
                  description: "Pay the full amount upfront and save 5% on your total project cost.",
                  features: ["5% Discount", "Priority Support", "Faster Delivery"]
                },
                {
                  title: "50/50 Payment",
                  discount: "Most Popular",
                  description: "Pay 50% to start and 50% upon project completion. No additional fees.",
                  features: ["50% Upfront", "50% on Completion", "No Extra Fees"]
                },
                {
                  title: "Monthly Installments",
                  discount: "Available",
                  description: "Spread payments over 3-6 months for larger projects. Small processing fee applies.",
                  features: ["3-6 Month Plans", "Small Processing Fee", "Flexible Terms"]
                }
              ].map((option, index) => (
                <div 
                  key={option.title}
                  className="p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3">{option.title}</h3>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {option.discount}
                  </div>
                  <p className="text-body mb-6 leading-relaxed">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-body">• {feature}</li>
                    ))}
                  </ul>
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

export default Pricing;