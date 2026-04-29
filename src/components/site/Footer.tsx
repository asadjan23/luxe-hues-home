import { Instagram, Facebook, Music2, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full -ml-36 -mb-36 pointer-events-none" />
    
    <div className="container relative z-10">
      <div className="grid md:grid-cols-4 gap-16 py-20 mb-16">
        <div>
          <div className="mb-6">
            <img src={logo} alt="Usmani Interiors" className="h-16 w-auto brightness-0 invert hover:scale-105 transition-luxury" />
            <p className="text-sm font-body font-light tracking-[0.2em] text-primary-foreground/70 mt-2 uppercase">Est. 2010</p>
          </div>
          <p className="text-primary-foreground/75 leading-relaxed text-sm font-body">
            Exquisite handcrafted curtains and premium interior accessories. Where luxury meets affordability.
          </p>
          <div className="flex gap-4 mt-8">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/usmaniinterior1/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582103248705", label: "Facebook" },
              { Icon: Music2, href: "https://www.tiktok.com/@usmaniinterior123", label: "TikTok" },
            ].map(({ Icon, href, label }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener" 
                aria-label={label} 
                className="h-12 w-12 border-2 border-accent/30 flex items-center justify-center hover:bg-accent hover:border-accent text-accent hover:text-white transition-luxury rounded-lg shadow-soft hover:shadow-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-accent">Categories</h4>
          <ul className="space-y-3.5 text-sm">
            {["Curtain Rods", "Finials", "Brackets", "Fabrics", "Complete Sets"].map((l) => (
              <li key={l}>
                <a href="#shop" className="text-primary-foreground/70 hover:text-accent transition-luxury font-body relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-accent">Company</h4>
          <ul className="space-y-3.5 text-sm">
            {["About", "Custom Service", "Shipping", "Returns", "FAQ"].map((l) => (
              <li key={l}>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-luxury font-body relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-6 text-accent">Contact</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-4 group">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:text-white transition-luxury" /> 
              <span className="group-hover:text-white transition-luxury font-body">Shop 115, Rabi Center, Wallayat Complex Plaza, Bahria Town Way, Islamabad</span>
            </li>
            <li className="flex gap-4 group">
              <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:text-white transition-luxury" /> 
              <a href="tel:+92-311-5370357" className="group-hover:text-white transition-luxury font-body hover:text-accent">+92 311 5370357</a>
            </li>
            <li className="flex gap-4 group">
              <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:text-white transition-luxury" /> 
              <a href="mailto:akmalusmani123@gmail.com" className="group-hover:text-white transition-luxury font-body hover:text-accent">akmalusmani123@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider-gold opacity-30" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 text-xs text-primary-foreground/60">
        <p className="font-body">© 2010-2026 Usmani Interiors. All rights reserved.</p>
        <p className="font-display font-light">Crafted with care • Premium since 2010</p>
      </div>
    </div>

    {/* WhatsApp floating button */}
    <a
      href="https://wa.link/pwr9v7"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-40 h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-deep hover:scale-110 transition-luxury animate-float group"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current group-hover:animate-bounce"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>
  </footer>
);

export default Footer;
