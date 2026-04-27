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
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Usmani Interior" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-accent transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hover:text-accent transition-smooth">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="hover:text-accent transition-smooth">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative hover:text-accent transition-smooth">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-medium">
              2
            </span>
          </button>
          <button aria-label="Menu" className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
