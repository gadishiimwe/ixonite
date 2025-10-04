import QrImage from "./QrImage";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Quality digital solutions that don't break the bank. We believe in making technology accessible to all businesses."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Get your website or app up and running in record time. We value your time and deliver without compromising quality."
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Eye-catching, responsive designs that look great on all devices and help your brand stand out from the competition."
    },
    {
      icon: "🔧",
      title: "Full Support",
      description: "We don't just build and disappear. Get ongoing support and maintenance to keep your digital presence running smoothly."
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "All our solutions are optimized for mobile devices, ensuring your customers have a seamless experience anywhere."
    },
    {
      icon: "🚀",
      title: "SEO Optimized",
      description: "Built with search engines in mind. Your website will be ready to rank and attract organic traffic from day one."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">IXONITE</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            We combine affordability, quality, and modern technology to deliver digital solutions that drive real results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group p-6 bg-card rounded-2xl border border-border hover-lift hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-body leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 lg:p-12 rounded-3xl border-2 border-primary/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-body mb-6 leading-relaxed">
                  Scan the QR code to connect with us instantly on WhatsApp, or call us directly. 
                  Let's discuss how we can transform your business with digital solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-foreground font-semibold">+250788548084</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-foreground font-semibold">moreaboutus@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <QrImage size={200} className="border-2 border-primary/40 rounded-xl" alt="Scan to contact IXONITE on WhatsApp" />
                  <p className="text-center mt-4 text-sm font-semibold text-foreground">Scan to Chat</p>
                  <p className="text-center text-xs text-body">WhatsApp us instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;