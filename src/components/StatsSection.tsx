const StatsSection = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successful digital solutions delivered"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Businesses transformed digitally"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Proven track record of excellence"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "We're here when you need us"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-primary">Businesses</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-8 bg-background rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-black text-primary mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;