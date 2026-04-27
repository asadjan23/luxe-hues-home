import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Categories from "@/components/site/Categories";
import Products from "@/components/site/Products";
import WhyUs from "@/components/site/WhyUs";
import Showcase from "@/components/site/Showcase";
import Testimonials from "@/components/site/Testimonials";
import CustomService from "@/components/site/CustomService";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <WhyUs />
      <Showcase />
      <Testimonials />
      <CustomService />
      <Footer />
    </main>
  );
};

export default Index;
