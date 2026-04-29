import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const links = ["Home", "Shop", "Categories", "Custom", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-luxury ${
        scrolled 
          ? "bg-background/98 backdrop-blur-xl shadow-premium border-b border-accent/10" 
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24">
        <a href="#" className="flex items-center gap-4 group">
          <img src={logo} alt="Usmani Interiors" className="h-16 w-auto transition-luxury group-hover:scale-105 group-hover:animate-subtle-bounce" />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-body font-light tracking-[0.3em] text-muted-foreground">Premium</span>
            <span className="text-2xl font-display font-bold text-foreground animate-fade-in">Usmani Interiors</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((l, idx) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-body-medium tracking-wide text-foreground/75 hover:text-accent transition-luxury relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-gradient-premium hover:after:w-full after:transition-all duration-500"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button aria-label="Search" className="p-2 hover:text-accent transition-luxury rounded-lg hover:bg-accent-soft/30 hover:animate-ripple">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="p-2 hover:text-accent transition-luxury rounded-lg hover:bg-accent-soft/30 hover:animate-ripple">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative p-2 hover:text-accent transition-luxury rounded-lg hover:bg-accent-soft/30 group">
            <ShoppingBag className="h-5 w-5 group-hover:animate-subtle-bounce" />
            <span className="absolute top-0 right-0 bg-gradient-premium text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold shadow-gold animate-pulse-glow">
              2
            </span>
          </button>
          <button aria-label="Menu" className="md:hidden p-2 hover:text-accent transition-luxury animate-fade-in">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
