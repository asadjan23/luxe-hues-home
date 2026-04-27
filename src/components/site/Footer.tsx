import { Instagram, Facebook, Music2, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <img src={logo} alt="Usmani Interior" className="h-14 w-auto mb-5 brightness-0 invert" />
          <p className="text-primary-foreground/70 leading-relaxed text-sm">
            Premium curtains and interior accessories crafted for the modern home.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/usmaniinterior1/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582103248705", label: "Facebook" },
              { Icon: Music2, href: "https://www.tiktok.com/@usmaniinterior123", label: "TikTok" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="h-10 w-10 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5 text-white">Categories</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            {["Curtain Rods", "Finials", "Brackets", "Fabrics", "Complete Sets"].map((l) => (
              <li key={l}><a href="#shop" className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            {["About", "Custom Service", "Shipping", "Returns", "FAQ"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Shop 115, Rabi Center, Wallayat Complex Plaza, Bahria Town Way, Islamabad 46000, Pakistan</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> +92 311 5370357</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> hello@usmaniinterior.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
        <p>© 2026 Usmani Interior. All rights reserved.</p>
        <p>Crafted with care · Premium since 2010</p>
      </div>
    </div>

    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/923115370357"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[hsl(142,70%,45%)] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>
  </footer>
);

export default Footer;
