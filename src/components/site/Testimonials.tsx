import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ayesha K.", city: "Dubai", text: "Absolutely stunning quality. The velvet drapes transformed my living room into a hotel suite. Worth every penny.", rating: 5 },
  { name: "Marcus L.", city: "London", text: "Custom-made in 10 days, perfect fit. The brass finials are exquisite — true craftsmanship.", rating: 5 },
  { name: "Sara M.", city: "Karachi", text: "Premium feel without the premium price tag. Customer service was equally impeccable.", rating: 5 },
];

const Testimonials = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">Words from Our Clients</p>
        <h2 className="text-4xl md:text-5xl text-primary">Loved by interior enthusiasts</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-background p-8 shadow-soft hover:shadow-elegant transition-smooth relative">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
            <div className="flex gap-1 mb-5">
              {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 italic font-serif text-lg">"{r.text}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-medium text-primary">{r.name}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{r.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
