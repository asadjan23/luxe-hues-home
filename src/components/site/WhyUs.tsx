import { Award, Sparkles, Tag, Truck } from "lucide-react";

const items = [
  { icon: Award, title: "High Quality Materials", desc: "Sourced from premium mills, built to last decades." },
  { icon: Sparkles, title: "Modern Designs", desc: "Curated by interior designers with a contemporary eye." },
  { icon: Tag, title: "Affordable Luxury", desc: "Direct from artisan to your home — no middleman markup." },
  { icon: Truck, title: "Fast & Free Delivery", desc: "Complimentary shipping on every order over $99." },
];

const WhyUs = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">Why Usmani</p>
        <h2 className="text-4xl md:text-5xl text-primary">Crafted with intention, delivered with care</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((it) => (
          <div key={it.title} className="text-center group">
            <div className="inline-flex h-20 w-20 items-center justify-center bg-accent-soft text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
              <it.icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
