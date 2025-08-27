import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Website Development",
      description: "Modern online store with payment integration and inventory management.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"]
    },
    {
      title: "Restaurant Mobile App",
      category: "Mobile App Development",
      description: "Food ordering app with real-time tracking and payment gateway.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "PayPal"]
    },
    {
      title: "Corporate Website",
      category: "Website Development",
      description: "Professional company website with CMS and SEO optimization.",
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind CSS", "Headless CMS"]
    },
    {
      title: "Fintech Web App",
      category: "Web Application",
      description: "Financial management platform with dashboard and analytics.",
      image: "/placeholder.svg",
      technologies: ["React", "Chart.js", "Express.js"]
    },
    {
      title: "Educational Platform",
      category: "Website Development",
      description: "Online learning platform with course management and video streaming.",
      image: "/placeholder.svg",
      technologies: ["React", "Video.js", "Node.js"]
    },
    {
      title: "Healthcare App",
      category: "Mobile App Development",
      description: "Telemedicine app with appointment booking and video consultations.",
      image: "/placeholder.svg",
      technologies: ["React Native", "WebRTC", "Socket.io"]
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
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-primary/60 text-6xl">📱</div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-body mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-body mb-6">Interested in seeing more of our work?</p>
              <Button variant="hero" size="lg">
                Contact Us for More Examples
              </Button>
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