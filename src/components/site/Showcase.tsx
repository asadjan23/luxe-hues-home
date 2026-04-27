import showcase from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-room.png";
import { ArrowRight } from "lucide-react";

const Showcase = () => (
  <section className="relative">
    <div className="grid lg:grid-cols-2">
      <div className="relative h-[500px] lg:h-[700px] overflow-hidden group">
        <img src={showcase} alt="Designed for modern living" loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-10">
          <div className="max-w-md text-white">
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Lookbook 2026</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Designed for Modern Living</h2>
            <a href="#shop" className="inline-flex items-center gap-2 border-b border-accent text-accent hover:gap-4 transition-smooth pb-1 uppercase text-xs tracking-wider">
              View Lookbook <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] lg:h-[700px] overflow-hidden group bg-beige">
        <img src={showcase2} alt="Usmani Interior signature wall" loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
      </div>
    </div>
  </section>
);

export default Showcase;
