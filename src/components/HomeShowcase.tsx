import QrImage from "./QrImage";

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
          <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-primary/10 overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
            <div className="p-4">
              <img 
                src="/lovable-uploads/web prev.png" 
                alt="Professional website development showcasing our web design expertise" 
                className="w-full h-auto object-contain rounded-lg translate-y-2 group-hover:scale-[1.02] group-hover:-translate-y-0 transition-transform duration-500 shadow-lg" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-semibold text-foreground">Website Development</p>
              <p className="text-xs text-body">Custom, responsive websites</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-primary/10 overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
            <div className="p-4 flex items-center justify-center h-full">
              <img 
                src="/lovable-uploads/mobile.png" 
                alt="Mobile app development preview showcasing our mobile expertise" 
                className="w-auto h-[400px] object-contain translate-y-2 group-hover:scale-[1.02] group-hover:-translate-y-0 transition-transform duration-500 drop-shadow-2xl" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-semibold text-foreground">Mobile Apps</p>
              <p className="text-xs text-body">iOS & Android solutions</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden p-8 flex items-center justify-center group hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
            <div className="text-center relative z-10">
              <div className="mb-4 inline-block p-4 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                <QrImage size={120} className="border-2 border-primary/40 rounded-lg" alt="Scan QR code to contact us on WhatsApp" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Connect</h3>
              <p className="text-sm text-body mb-1">Scan to chat with us</p>
              <p className="text-xs text-primary font-semibold">on WhatsApp instantly!</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;


