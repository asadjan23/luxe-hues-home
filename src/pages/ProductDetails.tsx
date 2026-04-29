import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import p1 from "@/assets/prod-1.jpg";
import p2 from "@/assets/prod-2.jpg";
import p3 from "@/assets/prod-3.jpg";
import p4 from "@/assets/prod-4.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  tag?: string;
  img: string;
  desc: string;
  fullDescription: string;
  specifications: { label: string; value: string }[];
  inStock: boolean;
  reviews: { author: string; rating: number; text: string }[];
};

const products: Product[] = [
  { 
    id: 1, 
    name: "Sahara Linen Drape", 
    price: 12500, 
    oldPrice: 16500, 
    tag: "Bestseller", 
    img: p1, 
    desc: "Sheer beige linen panel with grommet top — diffuses light beautifully.",
    fullDescription: "Experience the perfect blend of elegance and functionality with our Sahara Linen Drape. Crafted from premium quality linen, this sheer panel features a sophisticated grommet top that allows light to diffuse beautifully throughout your space. Perfect for contemporary and classic interiors alike.",
    specifications: [
      { label: "Material", value: "100% Pure Linen" },
      { label: "Dimensions", value: "54\" W x 84\" H" },
      { label: "Color", value: "Warm Beige" },
      { label: "Top", value: "Grommet (1.5\" diameter)" },
      { label: "Care", value: "Machine washable" },
      { label: "Weight", value: "2.5 kg per panel" }
    ],
    inStock: true,
    reviews: [
      { author: "Fatima K.", rating: 5, text: "Beautiful quality! The linen drapes are exactly as pictured. Perfect for my living room." },
      { author: "Ahmed R.", rating: 5, text: "Great value for money. Installation was smooth with the grommet top." },
      { author: "Zainab M.", rating: 4, text: "Very nice fabric, though slightly lighter in color than expected." }
    ]
  },
  { 
    id: 2, 
    name: "Vienna Velvet Curtain", 
    price: 18900, 
    tag: "New", 
    img: p2, 
    desc: "Plush velvet drape in warm caramel tones — luxurious weight and sheen.",
    fullDescription: "Indulge in luxury with our Vienna Velvet Curtain collection. These plush velvet drapes feature a rich caramel tone that adds warmth and sophistication to any space. With their luxurious weight and subtle sheen, they're perfect for creating an elegant, upscale aesthetic.",
    specifications: [
      { label: "Material", value: "100% Polyester Velvet" },
      { label: "Dimensions", value: "54\" W x 96\" H" },
      { label: "Color", value: "Caramel" },
      { label: "Top", value: "Pencil Pleat & Rod Pocket" },
      { label: "Opacity", value: "Blackout" },
      { label: "Weight", value: "4 kg per panel" }
    ],
    inStock: true,
    reviews: [
      { author: "Hassan L.", rating: 5, text: "Premium quality velvet. Looks absolutely stunning in my bedroom." },
      { author: "Sara N.", rating: 5, text: "Excellent blackout capability. The color is rich and luxurious." }
    ]
  },
  { 
    id: 3, 
    name: "Onyx Blackout Set", 
    price: 24500, 
    img: p3, 
    desc: "Premium blackout panels with handcrafted gold tassel tiebacks.",
    fullDescription: "The ultimate in privacy and style, our Onyx Blackout Set includes premium blackout panels paired with handcrafted gold tassel tiebacks. Perfect for bedrooms and media rooms, these panels block 99% of light while adding a touch of elegance with their tiebacks.",
    specifications: [
      { label: "Material", value: "Triple-weave Blackout" },
      { label: "Dimensions", value: "54\" W x 96\" H (2 panels)" },
      { label: "Color", value: "Deep Black" },
      { label: "Includes", value: "2 Panels + 2 Gold Tassels" },
      { label: "Light Blocking", value: "99%" },
      { label: "Weight", value: "5.5 kg per set" }
    ],
    inStock: true,
    reviews: [
      { author: "Ali M.", rating: 5, text: "Perfect blackout solution! The tassels are beautifully crafted." },
      { author: "Hina P.", rating: 5, text: "Best purchase for my bedroom. Completely dark, very professional quality." }
    ]
  },
  { 
    id: 4, 
    name: "Ivory Damask Panel", 
    price: 21500, 
    oldPrice: 26000, 
    img: p4, 
    desc: "Embroidered damask pattern with subtle ivory shimmer — timeless elegance.",
    fullDescription: "Bring timeless elegance to your home with our Ivory Damask Panel. Featuring an intricate embroidered damask pattern with a subtle shimmer, these panels are perfect for formal living rooms and dining areas. The classic pattern never goes out of style.",
    specifications: [
      { label: "Material", value: "Jacquard Damask Polyester" },
      { label: "Dimensions", value: "54\" W x 84\" H" },
      { label: "Color", value: "Ivory White" },
      { label: "Top", value: "Pencil Pleat" },
      { label: "Pattern", value: "Hand-embroidered Damask" },
      { label: "Weight", value: "3.2 kg per panel" }
    ],
    inStock: true,
    reviews: [
      { author: "Amna S.", rating: 5, text: "Absolutely gorgeous! The embroidery is impeccable." }
    ]
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-display text-primary mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate("/")}
          className="btn-premium inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Home
        </button>
      </div>
    );
  }

  const fmt = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-accent hover:text-primary transition-luxury mb-12 font-display font-bold"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Products
        </button>

        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="card-premium bg-gradient-soft p-8 flex items-center justify-center">
            <img 
              src={product.img} 
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg animate-blur-in"
            />
          </div>

          {/* Product Details */}
          <div className="animate-smooth-slide-up">
            {product.tag && (
              <span className="inline-block bg-gradient-premium text-white text-xs uppercase tracking-[0.3em] px-4 py-2 rounded mb-6 font-display font-bold">
                {product.tag}
              </span>
            )}
            
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
              <span className="text-muted-foreground ml-3">({product.reviews.length} verified reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8 border-b-2 border-accent/20 pb-8">
              <span className="font-display text-5xl text-accent font-bold">{fmt(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-muted-foreground line-through text-lg">{fmt(product.oldPrice)}</span>
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded text-sm font-bold">Save {discount}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
              {product.fullDescription}
            </p>

            {/* Stock Status */}
            <div className="mb-8">
              <p className={`text-sm font-display font-bold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : 'Out of Stock'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => { toast.success(`${product.name} added to cart`); }}
                className="flex-1 btn-premium btn-premium-gold shadow-deep hover:shadow-gold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" /> Add to Cart
              </button>
              <button 
                onClick={() => toast.success("Added to wishlist")}
                className="btn-premium btn-premium-outline border-2 px-8 flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" /> Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <Truck className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-xs font-display font-bold text-primary">Free Shipping</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-xs font-display font-bold text-primary">Secure Payment</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <RotateCcw className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-xs font-display font-bold text-primary">30-Day Return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-20">
          <h2 className="font-display text-4xl text-primary mb-8">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="card-premium p-6 flex justify-between items-center">
                <p className="text-muted-foreground font-body">{spec.label}</p>
                <p className="font-display font-bold text-primary text-lg">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-20">
          <h2 className="font-display text-4xl text-primary mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="card-premium p-8 border-l-4 border-accent">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 font-lora italic">"{review.text}"</p>
                <p className="font-display font-bold text-primary">{review.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products CTA */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12 text-center mb-20">
          <h2 className="font-display text-4xl text-primary mb-4">Discover More</h2>
          <p className="text-muted-foreground mb-8 text-lg">Explore our complete collection of premium curtains and accessories</p>
          <button 
            onClick={() => navigate("/")}
            className="btn-premium btn-premium-gold shadow-deep hover:shadow-gold inline-flex items-center gap-2"
          >
            Browse All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
