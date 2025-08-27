const AboutSection = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Mission",
      description: "Empower businesses with digital tools that drive growth and success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Vision",
      description: "A world where every business thrives online with accessible technology."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Values",
      description: "Innovation · Quality · Affordability"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About{" "}
            <span className="text-primary relative">
              IXONITE
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-body leading-relaxed">
              IXONITE is a digital agency helping businesses in Rwanda and beyond embrace technology. 
              We believe going digital shouldn't be expensive, so we offer affordable solutions with 
              world-class quality.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-8 bg-card rounded-2xl border border-border hover-lift hover:border-primary/20 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-xl text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              
              <p className="text-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;