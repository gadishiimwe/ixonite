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
        
        {/* Office Information */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Visit Our <span className="text-primary">Office</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Located in the heart of Kigali, Rwanda. We welcome in-person consultations and meetings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        📍
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Office Address</h4>
                        <p className="text-body">
                          Kigali Innovation City<br />
                          Kigali, Rwanda<br />
                          East Africa
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        📧
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Email Address</h4>
                        <a href="mailto:moreaboutus@gmail.com" className="text-primary hover:underline">
                          moreaboutus@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        📞
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Phone Number</h4>
                        <a href="tel:+250788548084" className="text-primary hover:underline">
                          +250 788 548 084
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        🕒
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Business Hours</h4>
                        <p className="text-body">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: By appointment only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose In-Person Meetings?</h3>
                  <ul className="space-y-4 text-body">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Detailed project consultation and planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Live demonstrations of previous work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Personalized strategy development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Meet our team and understand our process</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Quick Response Channels</h3>
                  
                  <div className="space-y-6">
                    <a href="https://wa.me/250788548084" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors group">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        💬
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">WhatsApp Chat</h4>
                        <p className="text-body text-sm">Instant responses • +250 788 548 084</p>
                      </div>
                    </a>
                    
                    <a href="mailto:moreaboutus@gmail.com" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors group">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        📧
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Email Support</h4>
                        <p className="text-body text-sm">Detailed responses • moreaboutus@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+250788548084" className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors group">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        📞
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Direct Call</h4>
                        <p className="text-body text-sm">Voice consultation • +250 788 548 084</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Schedule a Free Consultation</h3>
                  <p className="text-body mb-6">
                    Book a free 30-minute consultation to discuss your project requirements and get a detailed quote.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-body">
                      <div>✅ Project analysis</div>
                      <div>✅ Technology recommendations</div>
                      <div>✅ Timeline estimation</div>
                      <div>✅ Detailed pricing</div>
                    </div>
                    
                    <a 
                      href="https://wa.me/250788548084?text=Hi! I'd like to schedule a free consultation for my project."
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                    >
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Our <span className="text-primary">Clients Say</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Real feedback from businesses we've helped transform digitally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "IXONITE delivered beyond our expectations. Our online sales increased by 300% within 3 months of launching our e-commerce platform.",
                  author: "Grace Uwimana",
                  role: "Founder, Kigali Fashion Hub"
                },
                {
                  quote: "Professional, affordable, and incredibly responsive. They built our mobile app exactly as we envisioned it, and the support has been outstanding.",
                  author: "Jean Claude Muhire", 
                  role: "CEO, AgriConnect Rwanda"
                },
                {
                  quote: "The best investment we made for our business. IXONITE's digital strategy helped us reach new markets and increase our online presence significantly.",
                  author: "Patrick Nzeyimana",
                  role: "Director, Rwanda Tech Solutions"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-body mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-primary text-sm">{testimonial.role}</div>
                  </div>
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

export default Contact;