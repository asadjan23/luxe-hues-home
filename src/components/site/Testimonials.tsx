import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Fatima Ahmed", city: "Karachi", text: "I ordered custom curtains for my daughter's wedding venue. Not only were they delivered on time, but the craftmanship was exceptional. The embroidered details matched my vision perfectly. My guests couldn't stop complimenting the elegance.", rating: 5 },
  { name: "Hassan Khan", city: "Lahore", text: "Been sourcing finials and rods from Usmani for 3 years now for my interior design projects. Their quality is consistent, prices are fair, and they always accommodate custom requests. Highly recommended to any serious designer.", rating: 5 },
  { name: "Amna Malik", city: "Islamabad", text: "Ordered velvet curtains with custom fitting for my office. The attention to detail is remarkable. They took measurements carefully and the installation was flawless. Best investment in my workspace.", rating: 5 },
  { name: "Ahmed Raza", city: "Dubai", text: "Discovered Usmani Interiors through a recommendation. Ordered their premium cotton blend curtains and brass rod set. Exceptional quality at prices that don't break the bank. Already ordered for 2 other rooms.", rating: 5 },
];

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-premium bg-gradient-soft">
      <div className="container">
        <div 
          ref={titleRef}
          className={`text-center mb-20 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6 font-display font-light">Client Testimonials</p>
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">Loved by Design Connoisseurs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Discover why customers worldwide choose Usmani Interior for their premium drapery needs.</p>
        </div>
        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 scroll-stagger ${cardsVisible ? 'visible' : ''}`}>
        {reviews.map((r) => (
          <div 
            key={r.name} 
            className="card-premium bg-white/85 backdrop-blur-sm p-10 relative overflow-hidden group card-entrance"
          >
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 group-hover:bg-accent/10 transition-luxury animate-morph" />
            
            <Quote className="relative z-10 h-12 w-12 text-accent/30 mb-6 group-hover:text-accent/50 transition-luxury animate-smooth-slide-up" />
            
            <div className="flex gap-1.5 mb-6 relative z-10">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent group-hover:scale-110 transition-luxury animate-subtle-bounce" style={{ animationDelay: `${i * 50}ms` }} />
              ))}
            </div>
            
            <p className="text-foreground/75 leading-relaxed mb-8 relative z-10 italic font-lora text-lg animate-smooth-slide-up" style={{ animationDelay: '0.1s' }}>
              "{r.text}"
            </p>
            
            <div className="border-t-2 border-accent/20 pt-6 relative z-10 group-hover:border-accent/40 transition-luxury animate-smooth-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-display text-lg text-primary font-bold mb-2 animate-blur-in">{r.name}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-body font-medium animate-blur-in" style={{ animationDelay: '0.05s' }}>{r.city}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
