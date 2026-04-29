import rods from "@/assets/cat-rods.jpg";
import finials from "@/assets/cat-finials.jpg";
import brackets from "@/assets/cat-brackets.jpg";
import fabrics from "@/assets/cat-fabrics.jpg";
import sets from "@/assets/cat-sets.jpg";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { name: "Curtain Rods", count: "32 items", img: rods, span: "md:col-span-2" },
  { name: "Rod Ends & Finials", count: "24 items", img: finials, span: "" },
  { name: "Brackets & Holders", count: "18 items", img: brackets, span: "" },
  { name: "Curtain Fabrics", count: "56 items", img: fabrics, span: "" },
  { name: "Complete Sets", count: "40 items", img: sets, span: "md:col-span-2" },
];

const Categories = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="categories" className="section-premium bg-background">
      <div className="container">
        <div 
          ref={titleRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <div className="max-w-2xl">
            <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6 font-display font-light animate-blur-in">
              Our Collections
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-primary leading-tight">
              Curated Categories for Every{" "}
              <span className="italic text-gradient">Interior</span>
            </h2>
          </div>
          <a href="#shop" className="text-sm uppercase tracking-[0.3em] text-accent hover:text-primary transition-luxury flex items-center gap-3 self-start font-display font-bold group">
            View All 
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-luxury" />
          </a>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-3 gap-6 scroll-stagger ${gridVisible ? 'visible' : ''}`}>
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#shop"
              className={`group relative overflow-hidden bg-muted aspect-[4/5] ${cat.span} card-premium shadow-premium hover:shadow-deep card-entrance`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-luxury duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-70 group-hover:opacity-85 transition-luxury duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3 font-body font-medium animate-blur-in">{cat.count} Available</p>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight animate-smooth-slide-up">{cat.name}</h3>
                <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-luxury duration-500 font-display font-bold">
                  Explore Collection
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-luxury" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
