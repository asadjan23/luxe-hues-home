import { Award, Sparkles, Tag, Truck, CheckCircle2, Heart, Shield, Zap } from "lucide-react";

const items = [
  { 
    icon: Award, 
    title: "Premium Craftsmanship", 
    desc: "Sourced from Europe's finest mills. Each piece handcrafted by master artisans with 20+ years of experience.",
    badge: "Expert Made"
  },
  { 
    icon: Sparkles, 
    title: "Contemporary Designs", 
    desc: "Curated collections designed by award-winning interior designers. Timeless elegance meets modern sophistication.",
    badge: "Designer Curated"
  },
  { 
    icon: Tag, 
    title: "Direct Pricing", 
    desc: "Eliminate middlemen markup. Premium quality at prices 40-60% below retail competitors without compromise.",
    badge: "Best Value"
  },
  { 
    icon: Truck, 
    title: "Seamless Delivery", 
    desc: "White-glove delivery service. Free shipping on orders over $99. Installation support available.",
    badge: "Hassle-Free"
  },
];

const features = [
  { icon: CheckCircle2, text: "Lifetime quality guarantee on all products" },
  { icon: Heart, text: "30-day satisfaction guarantee or full refund" },
  { icon: Shield, text: "Fade-resistant & eco-friendly fabrics" },
  { icon: Zap, text: "Expert consultations available 24/7" },
];

const WhyUs = () => (
  <section className="section-premium bg-gradient-to-b from-background to-accent-soft/20 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-10 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl -mr-40 pointer-events-none animate-morph" />
    <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl -ml-30 pointer-events-none animate-float" />
    
    <div className="container relative z-10">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6 font-display font-light animate-blur-in">
          Why Choose Usmani
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-primary mb-6 animate-smooth-slide-up">
          Where <span className="text-gradient">Excellence</span> Meets Affordability
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body animate-smooth-slide-up" style={{ animationDelay: '0.1s' }}>
          Founded in 2010, we've been transforming homes with luxury interiors that don't break the bank. Over 15,000+ satisfied customers across Pakistan and beyond.
        </p>
      </div>

      {/* Main cards section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-stagger">
        {items.map((it, idx) => (
          <div 
            key={it.title} 
            className="card-premium group p-8 relative overflow-hidden backdrop-blur-sm bg-white/85 card-entrance hover:shadow-deep"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-accent/10 text-accent text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full font-display font-bold group-hover:bg-accent group-hover:text-white transition-luxury">
                  {it.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="inline-flex h-24 w-24 items-center justify-center bg-gradient-to-br from-accent/15 to-accent/5 text-accent mb-6 group-hover:from-accent group-hover:to-accent/80 group-hover:text-white transition-luxury duration-500 rounded-2xl shadow-soft group-hover:shadow-gold">
                <it.icon className="h-10 w-10 group-hover:scale-110 transition-luxury" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-primary mb-4 leading-tight animate-blur-in">{it.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base font-body group-hover:text-foreground transition-luxury">
                {it.desc}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-premium transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>

      {/* Features section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 md:p-16 shadow-deep relative overflow-hidden mb-20 animate-fade-up">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        
        <div className="relative z-10">
          <h3 className="font-display text-4xl text-white mb-12 animate-blur-in">
            Our Promise to You
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={feature.text}
                className="flex gap-4 items-start group animate-smooth-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <feature.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1 group-hover:scale-110 group-hover:animate-ripple transition-luxury" />
                <p className="text-white/90 text-lg font-body group-hover:text-white transition-luxury">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid md:grid-cols-4 gap-8 text-center animate-stagger">
        {[
          { number: "15K+", label: "Happy Customers" },
          { number: "16+", label: "Years Experience" },
          { number: "500+", label: "Premium Products" },
          { number: "98%", label: "Satisfaction Rate" },
        ].map((stat, idx) => (
          <div 
            key={stat.label}
            className="p-8 card-premium backdrop-blur-sm bg-white/80 card-entrance hover:shadow-deep"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <h4 className="font-display text-5xl text-accent font-bold mb-3 animate-shimmer-gold">
              {stat.number}
            </h4>
            <p className="text-muted-foreground uppercase tracking-[0.2em] text-xs font-display">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
