import { Button } from "@/components/ui/button";
import heroLaptop from "@/assets/hero-laptop-mockup.jpg";
import heroPattern from "@/assets/hero-pattern.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
              We Build{" "}
              <span className="text-primary">Digital Solutions</span>{" "}
              That Grow Businesses.
            </h1>
            
            <p className="text-xl lg:text-2xl text-body mb-8 max-w-2xl leading-relaxed">
              At IXONITE, we craft affordable, high-performing websites, e-commerce stores, 
              and mobile apps designed for your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Get Started
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              
              <Button 
                variant="hero-outline" 
                size="xl"
                className="group"
              >
                View Our Work
                <svg 
                  className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Laptop Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative animate-float">
              <img 
                src={heroLaptop} 
                alt="Modern laptop displaying IXONITE website design"
                className="w-full max-w-lg h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary-glow rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;