const Badges = () => {
  const badges = [
    {
      name: "Verified Business",
      image: "/pngwing.com.png"
    },
    {
      name: "ISO 9001 Certified",
      image: "/pngwing.com%20(2).png"
    },
    {
      name: "100% Authentic",
      image: "/pngwing.com%20(1).png"
    },
    {
      name: "Money Back Guarantee",
      image: "/clipart1078570.png"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white/50 backdrop-blur-sm border-b border-accent/10">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-medium">Trusted & Certified</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {badges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg p-4 md:p-6 text-center border border-accent/10 hover:border-accent/30 transition-luxury group cursor-pointer flex flex-col items-center justify-center"
            >
              <img 
                src={badge.image} 
                alt={badge.name}
                className="h-16 md:h-20 w-auto mb-3 object-contain group-hover:scale-110 transition-luxury"
              />
              <p className="text-xs md:text-sm font-display font-bold text-primary text-center leading-tight">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
