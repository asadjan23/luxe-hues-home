import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustBanner from "@/components/site/TrustBanner";
import Badges from "@/components/site/Badges";
import Categories from "@/components/site/Categories";
import Products from "@/components/site/Products";
import WhyUs from "@/components/site/WhyUs";
import Showcase from "@/components/site/Showcase";
import GoogleReviews from "@/components/site/GoogleReviews";
import CustomService from "@/components/site/CustomService";
import FollowUs from "@/components/site/FollowUs";
import InstagramFeed from "@/components/site/InstagramFeed";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustBanner />
      <Badges />
      <Categories />
      <Products />
      <WhyUs />
      <Showcase />
      <GoogleReviews />
      <CustomService />
      <InstagramFeed />
      <FollowUs />
      <Footer />
    </main>
  );
};

export default Index;
