import hero from "@/assets/hero-curtains.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Luxury living room with elegant curtains"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 container h-full flex flex-col justify-center text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-6 font-medium">
            Usmani Interior · Est. 2010
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 text-white">
            Transform Your Space with{" "}
            <span className="italic text-accent">Premium</span> Curtains & Accessories
          </h1>
          <p className="text-lg text-white/85 mb-10 max-w-lg leading-relaxed">
            Elegant designs. Durable quality. Affordable luxury — handcrafted for the modern home.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-accent/90 transition-smooth shadow-gold"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
            >
              Explore Collection
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase animate-fade-in">
          <span className="block w-px h-12 bg-white/40 mx-auto mb-3 animate-pulse" />
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
