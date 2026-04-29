import { Instagram } from "lucide-react";
import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Elfsight widget script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4 font-medium">@usmaniinterior1</p>
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-6">From Our Instagram</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real curtains, real homes. Follow us for daily inspiration and exclusive collections.
          </p>
        </div>

        {/* Elfsight Instagram Widget with your real app ID */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="elfsight-app-622b893c-80ab-450a-9ed4-78153b3f7400" data-elfsight-app-lazy></div>
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/usmaniinterior1/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-3"
          >
            <Instagram className="h-5 w-5" /> Follow @usmaniinterior1
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
