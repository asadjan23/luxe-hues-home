import rods from "@/assets/cat-rods.jpg";
import finials from "@/assets/cat-finials.jpg";
import brackets from "@/assets/cat-brackets.jpg";
import fabrics from "@/assets/cat-fabrics.jpg";
import sets from "@/assets/cat-sets.jpg";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { name: "Curtain Rods", count: "32 items", img: rods, span: "md:col-span-2" },
  { name: "Rod Ends & Finials", count: "24 items", img: finials, span: "" },
  { name: "Brackets & Holders", count: "18 items", img: brackets, span: "" },
  { name: "Curtain Fabrics", count: "56 items", img: fabrics, span: "" },
  { name: "Complete Sets", count: "40 items", img: sets, span: "md:col-span-2" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">
              Our Collections
            </p>
            <h2 className="text-4xl md:text-5xl text-primary max-w-xl">
              Curated categories for every <span className="italic">interior</span>
            </h2>
          </div>
          <a href="#shop" className="text-sm uppercase tracking-wider hover:text-accent transition-smooth flex items-center gap-2 self-start">
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#shop"
              className={`group relative overflow-hidden bg-muted aspect-[4/5] ${cat.span}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-smooth" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">{cat.count}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">{cat.name}</h3>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-accent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-smooth">
                  Explore <ArrowUpRight className="h-4 w-4" />
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
