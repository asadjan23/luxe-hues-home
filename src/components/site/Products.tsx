import { useState } from "react";
import { Eye, Heart, ShoppingBag, X, Star } from "lucide-react";
import p1 from "@/assets/prod-1.jpg";
import p2 from "@/assets/prod-2.jpg";
import p3 from "@/assets/prod-3.jpg";
import p4 from "@/assets/prod-4.jpg";
import { toast } from "sonner";

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
  { id: 1, name: "Sahara Linen Drape", price: 89, oldPrice: 120, tag: "Bestseller", img: p1, desc: "Sheer beige linen panel with grommet top — diffuses light beautifully." },
  { id: 2, name: "Vienna Velvet Curtain", price: 149, tag: "New", img: p2, desc: "Plush velvet drape in warm caramel tones — luxurious weight and sheen." },
  { id: 3, name: "Onyx Blackout Set", price: 199, img: p3, desc: "Premium blackout panels with handcrafted gold tassel tiebacks." },
  { id: 4, name: "Ivory Damask Panel", price: 169, oldPrice: 210, img: p4, desc: "Embroidered damask pattern with subtle ivory shimmer — timeless elegance." },
];

const Products = () => {
  const [quick, setQuick] = useState<Product | null>(null);

  return (
    <section id="shop" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">Featured Selection</p>
          <h2 className="text-4xl md:text-5xl text-primary">Bestsellers this season</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group bg-background overflow-hidden shadow-soft hover:shadow-elegant transition-smooth">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] uppercase tracking-wider px-3 py-1">
                    {p.tag}
                  </span>
                )}
                <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-smooth">
                  <button onClick={() => toast.success("Added to wishlist")} aria-label="Wishlist" className="h-10 w-10 bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth shadow-soft">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button onClick={() => setQuick(p)} aria-label="Quick view" className="h-10 w-10 bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth shadow-soft">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => toast.success(`${p.name} added to cart`)}
                  className="absolute inset-x-0 bottom-0 bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-smooth"
                >
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl text-primary mb-1">{p.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-accent font-medium">${p.price}</span>
                  {p.oldPrice && <span className="text-muted-foreground line-through text-sm">${p.oldPrice}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {quick && (
        <div className="fixed inset-0 z-[60] bg-primary/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuick(null)}>
          <div className="bg-background max-w-3xl w-full grid md:grid-cols-2 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img src={quick.img} alt={quick.name} className="aspect-[4/5] object-cover w-full" />
            <div className="p-8 flex flex-col">
              <button onClick={() => setQuick(null)} className="self-end hover:text-accent transition-smooth">
                <X className="h-5 w-5" />
              </button>
              {quick.tag && <span className="text-accent text-xs uppercase tracking-[0.3em] mb-3">{quick.tag}</span>}
              <h3 className="font-serif text-3xl text-primary mb-3">{quick.name}</h3>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                <span className="text-xs text-muted-foreground ml-2">(128 reviews)</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{quick.desc}</p>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-serif text-3xl text-accent">${quick.price}</span>
                {quick.oldPrice && <span className="text-muted-foreground line-through">${quick.oldPrice}</span>}
              </div>
              <button onClick={() => { toast.success(`${quick.name} added to cart`); setQuick(null); }} className="bg-primary text-primary-foreground py-4 uppercase text-xs tracking-[0.3em] hover:bg-accent transition-smooth flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
