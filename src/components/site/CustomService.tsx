import showcase from "@/assets/showcase-room.png";
import { Ruler, Palette, Scissors, ArrowRight } from "lucide-react";

const steps = [
  { icon: Ruler, label: "Share your measurements" },
  { icon: Palette, label: "Choose fabric & finish" },
  { icon: Scissors, label: "Crafted & delivered" },
];

const CustomService = () => (
  <section id="custom" className="py-24 md:py-32 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <img src={showcase} alt="Custom curtain installation" loading="lazy" className="w-full aspect-square object-cover shadow-elegant" />
        <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-8 hidden md:block shadow-gold">
          <p className="font-serif text-4xl">15+</p>
          <p className="text-xs uppercase tracking-wider mt-1">Years of craft</p>
        </div>
      </div>

      <div>
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">Bespoke Service</p>
        <h2 className="text-4xl md:text-5xl text-primary mb-6 leading-tight">
          Custom curtains, <span className="italic">tailored</span> to your window
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
          Every space is unique. Our master tailors craft made-to-measure curtains in your choice
          of fabric, length, and finish — delivered and installed in as little as 10 days.
        </p>

        <div className="space-y-5 mb-10">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-5">
              <div className="h-12 w-12 bg-secondary text-accent flex items-center justify-center shrink-0">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Step 0{i + 1}</p>
                <p className="font-medium text-primary">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-accent transition-smooth">
          Request Custom Design
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
        </a>
      </div>
    </div>
  </section>
);

export default CustomService;
