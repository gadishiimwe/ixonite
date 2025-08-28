const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jean Claude Muhire",
      role: "CEO, Rwanda Tech Solutions",
      content: "IXONITE transformed our online presence completely. Their team delivered a stunning e-commerce platform that increased our sales by 300% in just 3 months.",
      rating: 5
    },
    {
      name: "Grace Uwimana",
      role: "Founder, Kigali Fashion Hub",
      content: "Professional, affordable, and incredibly talented. They built our mobile app and website within budget and on time. Highly recommended!",
      rating: 5
    },
    {
      name: "Patrick Nzeyimana",
      role: "Director, Agro Processing Ltd",
      content: "The best investment we made for our business. IXONITE's digital strategy helped us reach new markets across East Africa.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="p-8 bg-background rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-body mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-primary text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;