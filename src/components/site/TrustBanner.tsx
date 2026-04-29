import { Award, Shield, Truck, Star } from "lucide-react";

const TrustBanner = () => {
  const trustItems = [
    {
      icon: Award,
      label: "16+ Years",
      description: "Industry Experience"
    },
    {
      icon: Star,
      label: "15K+ Customers",
      description: "Nationwide Trust"
    },
    {
      icon: Truck,
      label: "Free Shipping",
      description: "On Orders 5000+"
    },
    {
      icon: Shield,
      label: "Quality Guaranteed",
      description: "Lifetime Support"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-accent/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center group hover:scale-105 transition-luxury">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-luxury">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <p className="font-display font-bold text-primary text-lg mb-1">{item.label}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
