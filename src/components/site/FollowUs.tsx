import { Instagram, Facebook, Music2 } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    handle: "@usmaniinterior1",
    href: "https://www.instagram.com/usmaniinterior1/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "Usmani Interior",
    href: "https://www.facebook.com/profile.php?id=61582103248705",
    Icon: Facebook,
  },
  {
    name: "TikTok",
    handle: "@usmaniinterior123",
    href: "https://www.tiktok.com/@usmaniinterior123",
    Icon: Music2,
  },
];

const FollowUs = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container text-center">
      <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">Stay Connected</p>
      <h2 className="text-4xl md:text-5xl text-primary mb-4">Follow us</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-12">
        Get a daily dose of curtain inspiration, behind-the-scenes craftsmanship, and exclusive offers.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {socials.map(({ name, handle, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={`Follow Usmani Interior on ${name}`}
            className="group border border-border bg-secondary/40 p-8 flex flex-col items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-smooth shadow-soft hover:shadow-elegant"
          >
            <span className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-smooth">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-2xl">{name}</h3>
              <p className="text-sm opacity-70 mt-1">{handle}</p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-80">Follow →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FollowUs;
