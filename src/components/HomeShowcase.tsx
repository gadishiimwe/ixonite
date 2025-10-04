const HomeShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Design that speaks business
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            We blend clean visual design with motion to help your brand feel modern and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative rounded-2xl bg-white border border-border overflow-hidden group hover:shadow-card-hover transition-all duration-500">
            <img src="/lovable-uploads/web prev.png" alt="Website preview" className="w-full h-full object-contain translate-y-2 group-hover:scale-[1.03] group-hover:-translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative rounded-2xl bg-white border border-border overflow-hidden group hover:shadow-card-hover transition-all duration-500">
            <img src="/lovable-uploads/mobile.png" alt="Mobile app preview" className="w-full h-full object-contain translate-y-2 group-hover:scale-[1.03] group-hover:-translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden p-6 flex items-center justify-center group">
            <div className="text-center">
              <img src="lovable-uploads/qrCode.png" onError={(e)=>{ (e.target as HTMLImageElement).src = "/lovable-uploads/qr-code.png"; }} alt="Scan to chat" className="mx-auto h-28 w-28 object-contain border border-primary/30 rounded-md bg-white group-hover:scale-105 transition-transform" />
              <div className="mt-4 text-sm text-body">Scan to chat with us instantly</div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;


