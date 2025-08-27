import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Business Website",
      price: "70,000 RWF",
      priceUSD: "$50",
      description: "Perfect for small businesses and personal brands",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Forms",
        "SEO Optimization",
        "Social Media Integration",
        "1 Month Support"
      ],
      highlight: false
    },
    {
      name: "E-commerce Website",
      price: "150,000 RWF", 
      priceUSD: "$120",
      description: "Complete online store solution",
      features: [
        "Everything in Business",
        "Product Catalog",
        "Payment Integration",
        "Inventory Management",
        "Order Management",
        "3 Months Support"
      ],
      highlight: true
    },
    {
      name: "Mobile App",
      price: "500,000 RWF",
      priceUSD: "$400", 
      description: "Custom mobile application",
      features: [
        "iOS & Android",
        "Custom Features",
        "API Integration",
        "Push Notifications",
        "Analytics Integration",
        "6 Months Support"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Go Digital Starting From Just{" "}
            <span className="text-primary">70,000 RWF</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            We make digital transformation affordable for every business. 
            Choose the solution that fits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-2xl border-2 hover-lift transition-all duration-300 ${
                plan.highlight 
                  ? 'border-primary bg-primary/5 scale-105 shadow-card-hover' 
                  : 'border-border bg-background hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-black text-primary">
                    {plan.price}
                  </span>
                  <span className="text-xl text-body ml-2">
                    / {plan.priceUSD}
                  </span>
                </div>
                
                <p className="text-body">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlight ? "hero" : "hero-outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;