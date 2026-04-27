import { Instagram } from "lucide-react";

// 👉 Replace SNAPWIDGET_SRC with the iframe src URL from snapwidget.com
// (after creating an Instagram Responsive Grid widget for @usmaniinterior1)
const SNAPWIDGET_SRC = "https://snapwidget.com/embed/1100489"; // placeholder demo widget

const InstagramFeed = () => (
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">@usmaniinterior1</p>
        <h2 className="text-4xl md:text-5xl text-primary mb-4">From our Instagram</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real curtains, real homes. Tag us in your photos for a chance to be featured.
        </p>
      </div>

      <div className="bg-background p-2 md:p-4 shadow-soft max-w-6xl mx-auto">
        <iframe
          src={SNAPWIDGET_SRC}
          title="Usmani Interior Instagram feed"
          className="w-full border-0 block"
          style={{ height: "600px" }}
          scrolling="no"
          allowTransparency
        />
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.instagram.com/usmaniinterior1/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase text-xs tracking-[0.3em] hover:bg-accent transition-smooth"
        >
          <Instagram className="h-4 w-4" /> Follow on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default InstagramFeed;
