import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Kigali Fashion Hub E-commerce",
      category: "E-commerce Development",
      description: "Complete online fashion store with inventory management, payment integration, and mobile app. Increased sales by 300% in 3 months.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "React Native"],
      stats: { sales: "+300%", traffic: "10K+ monthly", conversion: "4.2%" },
      clientType: "Fashion Retail"
    },
    {
      title: "AgriConnect Rwanda Mobile App",
      category: "Mobile App Development", 
      description: "Agricultural marketplace connecting farmers directly with buyers. Features real-time pricing, weather updates, and logistics coordination.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Google Maps API", "WeatherAPI"],
      stats: { users: "5K+", transactions: "1M+ RWF", rating: "4.8/5" },
      clientType: "Agriculture"
    },
    {
      title: "Rwanda Tech Solutions Website",
      category: "Corporate Website",
      description: "Professional corporate website with CMS, client portal, and SEO optimization. Improved online visibility and lead generation by 250%.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind CSS", "Strapi CMS", "Next.js"],
      stats: { leads: "+250%", ranking: "Top 3 SEO", speed: "95/100" },
      clientType: "Technology"
    },
    {
      title: "Ubuzima Health Platform",
      category: "Healthcare Web App",
      description: "Comprehensive telemedicine platform with appointment booking, video consultations, and medical records management.",
      image: "/placeholder.svg",
      technologies: ["React", "WebRTC", "Socket.io", "HIPAA Compliance"],
      stats: { consultations: "1K+ monthly", doctors: "50+", satisfaction: "96%" },
      clientType: "Healthcare"
    },
    {
      title: "Kwigira Learning Platform",
      category: "Educational Website",
      description: "Interactive online learning platform with video streaming, progress tracking, and certification system for vocational training.",
      image: "/placeholder.svg",
      technologies: ["React", "Video.js", "Node.js", "MongoDB"],
      stats: { students: "2K+", courses: "100+", completion: "78%" },
      clientType: "Education"
    },
    {
      title: "FinanceFlow Mobile App",
      category: "Fintech Application",
      description: "Personal finance management app with budgeting tools, expense tracking, and financial goal setting for young professionals.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Chart.js", "Secure APIs", "Biometric Auth"],
      stats: { downloads: "3K+", savings: "20% avg", retention: "85%" },
      clientType: "Financial Services"
    },
    {
      title: "Urban Eats Delivery App",
      category: "Food Delivery Platform",
      description: "Complete food delivery ecosystem with restaurant management, real-time tracking, and integrated payment system.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Google Maps", "Stripe", "Firebase"],
      stats: { restaurants: "100+", orders: "500+ daily", delivery: "25 min avg" },
      clientType: "Food & Beverage"
    },
    {
      title: "Green Energy Rwanda Website",
      category: "Renewable Energy Website",
      description: "Corporate website for renewable energy company with project showcase, calculator tools, and customer portal.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "Calculator APIs", "CMS"],
      stats: { inquiries: "+400%", calculator: "1K+ uses", projects: "50+ showcased" },
      clientType: "Renewable Energy"
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
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Showcasing our latest work and the digital solutions we've delivered for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                    <div className="text-primary/60 text-6xl">
                      {project.category.includes('Mobile') ? '📱' : 
                       project.category.includes('E-commerce') ? '🛒' :
                       project.category.includes('Healthcare') ? '🏥' :
                       project.category.includes('Educational') ? '📚' :
                       project.category.includes('Fintech') ? '💳' :
                       project.category.includes('Food') ? '🍕' :
                       project.category.includes('Energy') ? '⚡' : '💻'}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 text-primary text-xs font-bold px-2 py-1 rounded-full">
                      {project.clientType}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-body mb-4 leading-relaxed text-sm">{project.description}</p>
                    
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-primary/5 rounded-lg">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-primary font-bold text-sm">{value}</div>
                          <div className="text-xs text-body capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Industry <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                We've successfully delivered digital solutions across various industries, 
                each with unique challenges and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Healthcare", icon: "🏥", projects: "15+", description: "Telemedicine platforms, patient management systems" },
                { name: "E-commerce", icon: "🛒", projects: "25+", description: "Online stores, marketplace platforms" },
                { name: "Education", icon: "📚", projects: "20+", description: "Learning platforms, school management systems" },
                { name: "Agriculture", icon: "🌾", projects: "12+", description: "Farm management, marketplace connections" },
                { name: "Finance", icon: "💳", projects: "10+", description: "Banking apps, payment solutions" },
                { name: "Food & Beverage", icon: "🍕", projects: "18+", description: "Delivery apps, restaurant management" },
                { name: "Technology", icon: "💻", projects: "30+", description: "Corporate websites, SaaS platforms" },
                { name: "Renewable Energy", icon: "⚡", projects: "8+", description: "Project showcases, calculator tools" }
              ].map((industry, index) => (
                <div 
                  key={industry.name}
                  className="text-center p-6 bg-background rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{industry.name}</h3>
                  <div className="text-primary font-bold mb-3">{industry.projects} Projects</div>
                  <p className="text-body text-sm leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Client <span className="text-primary">Success Stories</span>
              </h2>
              <p className="text-xl text-body max-w-3xl mx-auto">
                Real results from real businesses. Here's how our digital solutions have transformed our clients' operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  metric: "300%",
                  description: "Sales increase for Kigali Fashion Hub after launching their e-commerce platform",
                  timeline: "Within 3 months"
                },
                {
                  metric: "5,000+",
                  description: "Active users on AgriConnect Rwanda connecting farmers with buyers",
                  timeline: "Within 6 months"
                },
                {
                  metric: "250%",
                  description: "Lead generation improvement for Rwanda Tech Solutions website",
                  timeline: "Within 4 months"
                },
                {
                  metric: "1,000+",
                  description: "Monthly consultations through Ubuzima Health telemedicine platform",
                  timeline: "Within 8 months"
                },
                {
                  metric: "2,000+",
                  description: "Students enrolled in Kwigira Learning Platform courses",
                  timeline: "Within 1 year"
                },
                {
                  metric: "500+",
                  description: "Daily orders processed through Urban Eats delivery platform",
                  timeline: "Within 6 months"
                }
              ].map((story, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-5xl font-black text-primary mb-4">{story.metric}</div>
                  <p className="text-body mb-4 leading-relaxed">{story.description}</p>
                  <div className="text-sm text-primary font-semibold">{story.timeline}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Our Success Stories?</h3>
                <p className="text-body mb-6">
                  Let's discuss how we can help transform your business with a custom digital solution. 
                  Every project starts with understanding your unique needs and goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Start Your Project Today
                  </Button>
                  <Button variant="hero-outline" size="lg">
                    View More Case Studies
                  </Button>
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

export default Portfolio;