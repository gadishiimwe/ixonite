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
        
        {/* Detailed Company Story */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Our <span className="text-primary">Story</span>
                  </h2>
                  <div className="space-y-6 text-body leading-relaxed">
                    <p>
                      Founded in 2023 in the heart of Kigali, IXONITE emerged from a simple yet powerful vision: 
                      to democratize digital transformation across Rwanda and beyond. We saw countless talented 
                      entrepreneurs and established businesses being held back by expensive digital solutions 
                      that were out of reach.
                    </p>
                    <p>
                      Our founders, with combined experience of over 15 years in software development and digital 
                      marketing, decided to challenge the status quo. We streamlined our processes, leveraged 
                      modern technologies, and built a lean but highly skilled team to deliver world-class 
                      digital solutions at unprecedented prices.
                    </p>
                    <p>
                      Today, we're proud to have helped over 100 businesses across Rwanda, Kenya, Uganda, and 
                      beyond establish their digital presence. From small local shops to growing enterprises, 
                      we've proven that quality doesn't have to come at a premium.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-background p-8 rounded-2xl border border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-primary mb-2">100+</div>
                        <div className="text-sm text-body">Projects Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-primary mb-2">50+</div>
                        <div className="text-sm text-body">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-primary mb-2">5</div>
                        <div className="text-sm text-body">Countries Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-primary mb-2">24/7</div>
                        <div className="text-sm text-body">Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                The talented individuals behind IXONITE's success. Each team member brings unique expertise 
                and passion to deliver exceptional digital solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "David Uwimana",
                  role: "Founder & CEO",
                  description: "Full-stack developer with 8+ years experience. Passionate about making technology accessible to all businesses.",
                  expertise: ["React", "Node.js", "Business Strategy"]
                },
                {
                  name: "Sarah Mukamana",
                  role: "Lead Designer",
                  description: "Creative director specializing in user experience and brand identity. Believes in design that tells a story.",
                  expertise: ["UI/UX Design", "Branding", "Adobe Creative Suite"]
                },
                {
                  name: "Eric Nshimiyimana",
                  role: "Mobile Developer",
                  description: "Mobile app specialist with expertise in cross-platform development. Focused on creating intuitive user experiences.",
                  expertise: ["React Native", "Flutter", "iOS/Android"]
                }
              ].map((member, index) => (
                <div 
                  key={member.name}
                  className="text-center p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-primary text-3xl">👤</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-4">{member.role}</div>
                  <p className="text-body mb-6 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Deep Dive */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Innovation First",
                  description: "We stay ahead of technology trends and continuously innovate to provide cutting-edge solutions that give our clients a competitive advantage.",
                  icon: "💡"
                },
                {
                  title: "Affordable Excellence",
                  description: "Quality shouldn't be a luxury. We've optimized our processes to deliver premium digital solutions at prices that make sense for businesses of all sizes.",
                  icon: "⭐"
                },
                {
                  title: "Client Partnership",
                  description: "We don't just work for you; we work with you. Your success is our success, and we're committed to building long-term partnerships that drive growth.",
                  icon: "🤝"
                },
                {
                  title: "Transparency",
                  description: "No hidden fees, no surprises. We believe in clear communication, honest pricing, and keeping you informed every step of the way.",
                  icon: "🔍"
                }
              ].map((value, index) => (
                <div 
                  key={value.title}
                  className="flex gap-6 p-8 bg-background rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-5xl">{value.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-body leading-relaxed">{value.description}</p>
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

export default About;