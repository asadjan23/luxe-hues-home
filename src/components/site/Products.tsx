import { useState } from "react";
import { Eye, Heart, ShoppingBag, X, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import p1 from "@/assets/prod-1.jpg";
import p2 from "@/assets/prod-2.jpg";
import p3 from "@/assets/prod-3.jpg";
import p4 from "@/assets/prod-4.jpg";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  tag?: string;
  img: string;
  desc: string;
};

const products: Product[] = [
  { id: 1, name: "Sahara Linen Drape", price: 12500, oldPrice: 16500, tag: "Bestseller", img: p1, desc: "Sheer beige linen panel with grommet top — diffuses light beautifully." },
  { id: 2, name: "Vienna Velvet Curtain", price: 18900, tag: "New", img: p2, desc: "Plush velvet drape in warm caramel tones — luxurious weight and sheen." },
  { id: 3, name: "Onyx Blackout Set", price: 24500, img: p3, desc: "Premium blackout panels with handcrafted gold tassel tiebacks." },
  { id: 4, name: "Ivory Damask Panel", price: 21500, oldPrice: 26000, img: p4, desc: "Embroidered damask pattern with subtle ivory shimmer — timeless elegance." },
];

const fmt = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;

const Products = () => {
  const [quick, setQuick] = useState<Product | null>(null);
  const navigate = useNavigate();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="shop" className="section-premium bg-gradient-soft">
      <div className="container">
        <div 
          ref={titleRef}
          className={`text-center mb-20 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6 font-display font-light">Premium Collection</p>
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Bestsellers This Season</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Handcrafted luxury curtains and accessories, expertly curated for the modern home.</p>
        </div>

        <div ref={gridRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 scroll-stagger ${gridVisible ? 'visible' : ''}`}>
          {products.map((p) => (
            <article key={p.id} className="card-premium overflow-hidden backdrop-blur-sm bg-white/80 card-entrance">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-soft group">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-luxury group-hover:scale-110 duration-700 group-hover:animate-rotate-subtle" />
                {p.tag && (
                  <span className="absolute top-5 left-5 bg-gradient-premium text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 font-display font-bold shadow-gold animate-shimmer-gold">
                    {p.tag}
                  </span>
                )}
                <div className="absolute right-5 top-5 flex flex-col gap-3 translate-x-20 group-hover:translate-x-0 transition-luxury duration-500">
                  <button onClick={() => toast.success("Added to wishlist")} aria-label="Wishlist" className="h-11 w-11 bg-white/95 hover:bg-gradient-premium hover:text-white flex items-center justify-center transition-luxury shadow-premium rounded-lg backdrop-blur-sm hover:animate-ripple">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button onClick={() => setQuick(p)} aria-label="Quick view" className="h-11 w-11 bg-white/95 hover:bg-gradient-premium hover:text-white flex items-center justify-center transition-luxury shadow-premium rounded-lg backdrop-blur-sm hover:animate-ripple">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => toast.success(`${p.name} added to cart`)}
                  className="absolute inset-x-0 bottom-0 bg-gradient-premium text-white py-4 text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-luxury duration-500 font-display font-bold shadow-gold hover:shadow-deep animate-pulse-glow"
                >
                  <ShoppingBag className="h-5 w-5" /> Add to Cart
                </button>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl text-primary mb-3 leading-tight animate-blur-in">{p.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-accent font-display font-bold text-lg">{fmt(p.price)}</span>
                  {p.oldPrice && <span className="text-muted-foreground line-through text-sm font-body">{fmt(p.oldPrice)}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {quick && (
        <div className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuick(null)}>
          <div className="bg-background max-w-4xl w-full grid md:grid-cols-2 shadow-deep rounded-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img src={quick.img} alt={quick.name} className="aspect-[4/5] object-cover w-full animate-blur-in" />
            <div className="p-10 flex flex-col justify-between animate-smooth-slide-up">
              <div>
                <button onClick={() => setQuick(null)} className="self-end hover:text-accent transition-luxury ml-auto mb-4 hover:animate-rotate-subtle">
                  <X className="h-6 w-6" />
                </button>
                {quick.tag && <span className="text-accent text-xs uppercase tracking-[0.4em] mb-4 font-display font-bold block animate-blur-in">{quick.tag}</span>}
                <h3 className="font-display text-4xl text-primary mb-4 leading-tight animate-smooth-slide-up" style={{ animationDelay: '0.1s' }}>{quick.name}</h3>
                <div className="flex items-center gap-2 mb-6 animate-smooth-slide-up" style={{ animationDelay: '0.2s' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent animate-subtle-bounce" style={{ animationDelay: `${i * 100}ms` }} />)}
                  <span className="text-xs text-muted-foreground ml-3">(128 reviews)</span>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-body animate-smooth-slide-up" style={{ animationDelay: '0.3s' }}>{quick.desc}</p>
              </div>
              <div>
                <div className="flex items-baseline gap-4 mb-4 border-b border-accent/20 pb-4 animate-smooth-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="font-display text-4xl text-accent font-bold">{fmt(quick.price)}</span>
                  {quick.oldPrice && <span className="text-muted-foreground line-through font-body">{fmt(quick.oldPrice)}</span>}
                </div>
                <button onClick={() => { toast.success(`${quick.name} added to cart`); setQuick(null); }} className="w-full btn-premium btn-premium-gold shadow-deep hover:shadow-gold animate-smooth-slide-up mb-3" style={{ animationDelay: '0.5s' }}>
                  <ShoppingBag className="h-5 w-5" /> Add to Cart
                </button>
                <button onClick={() => { setQuick(null); navigate(`/product/${quick.id}`); }} className="w-full btn-premium btn-premium-outline border-2 animate-smooth-slide-up" style={{ animationDelay: '0.5s' }}>
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
