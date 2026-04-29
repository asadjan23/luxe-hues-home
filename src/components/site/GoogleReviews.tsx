import { Star, Calendar } from "lucide-react";
import { useRef } from "react";

const googleReviews = [
  { 
    name: "Saira Hussain", 
    date: "2 weeks ago",
    text: "Excellent service! Ordered custom curtains and the quality exceeded my expectations. The team was very helpful in selecting the right fabric. Highly recommend Usmani Interiors!", 
    rating: 5,
    verified: true
  },
  { 
    name: "Muhammad Ali", 
    date: "1 month ago",
    text: "Great collection of rods and finials. Very affordable compared to other stores. Delivery was fast and packaging was excellent. Will definitely order again.", 
    rating: 5,
    verified: true
  },
  { 
    name: "Hina Malik", 
    date: "3 weeks ago",
    text: "Perfect for my home renovation project. Staff helped me choose the right curtain style for my living room. Amazing quality and fair pricing.", 
    rating: 5,
    verified: true
  },
  { 
    name: "Ali Khan", 
    date: "1 month ago",
    text: "Been a customer for 2 years now. Consistent quality, great customer service, and always on time delivery. They're my go-to place for all interior accessories.", 
    rating: 5,
    verified: true
  },
  { 
    name: "Zainab Ahmed", 
    date: "2 weeks ago",
    text: "Love the new collection! The designs are modern yet elegant. The pricing is competitive and the quality is premium. Highly satisfied with my purchase.", 
    rating: 5,
    verified: true
  },
  { 
    name: "Rashid Hassan", 
    date: "3 days ago",
    text: "Wonderful experience! Ordered custom-made curtains with specific measurements. They fit perfectly. The craftsmanship is outstanding. Will recommend to friends.", 
    rating: 5,
    verified: true
  },
];

const GoogleReviews = () => {
  return (
    <section className="section-premium bg-white">
      <div className="container">
        {/* Header with Google Rating */}
        <div className="text-center mb-20">
          <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6 font-display font-light">Customer Reviews</p>
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-8">Trusted on Google</h2>
          
          {/* Google Rating Card */}
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl px-8 py-6 border border-accent/20">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-primary font-display mb-2">4.9</div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div className="border-l border-accent/20 pl-6">
              <p className="text-primary font-bold text-lg">Based on 200+ Reviews</p>
              <p className="text-muted-foreground text-sm">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {googleReviews.map((review, idx) => (
            <div 
              key={idx}
              className="card-premium bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-xl border border-gray-200/50 hover:border-accent/30 transition-luxury group"
            >
              {/* Google Logo */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {review.verified && (
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded font-medium">✓ Verified</span>
                )}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm font-lora">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-display font-bold text-primary text-sm mb-1">{review.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center group">
            <div className="text-4xl font-bold text-accent font-display mb-2 group-hover:scale-110 transition-luxury">4.9★</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-accent font-display mb-2 group-hover:scale-110 transition-luxury">200+</div>
            <p className="text-muted-foreground">Total Reviews</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-accent font-display mb-2 group-hover:scale-110 transition-luxury">98%</div>
            <p className="text-muted-foreground">5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
