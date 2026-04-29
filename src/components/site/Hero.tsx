import hero from "@/assets/hero-curtains.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden pt-24">
      <img
        src={hero}
        alt="Luxury living room with elegant curtains"
        className="absolute inset-0 h-full w-full object-cover scale-105 transition-all duration-[3000ms] hover:scale-110"
      />
      <div className="absolute inset-0 gradient-overlay animate-fade-in" />

      <div className="relative z-10 container h-full flex flex-col justify-center text-primary-foreground">
        <div className="max-w-3xl animate-smooth-slide-up">
          <p className="text-accent uppercase tracking-[0.4em] text-xs mb-8 font-display font-light animate-blur-in">
            Premium Interior Solutions
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white font-bold animate-smooth-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform Your Space with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 italic animate-shimmer-gold">
              Luxury
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed font-body animate-smooth-slide-up" style={{ animationDelay: '0.3s' }}>
            Exquisite handcrafted curtains & premium accessories designed for the discerning home. Where elegance meets durability.
          </p>
          <div className="flex flex-wrap gap-6 animate-smooth-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 btn-premium btn-premium-gold shadow-deep hover:shadow-gold animate-pulse-glow"
            >
              Explore Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-luxury" />
            </a>
            <a
              href="#categories"
              className="group inline-flex items-center gap-3 btn-premium btn-premium-outline border-2 backdrop-blur-md hover:bg-white/10 hover:animate-ripple"
            >
              View Catalog
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.4em] uppercase animate-float">
          <span className="block w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto mb-4 animate-pulse" />
          Scroll To Discover
        </div>
      </div>
    </section>
  );
};

export default Hero;
