import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/Mission";
import KeyHighlights from "@/components/KeyHighlights";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <KeyHighlights />
      <Services />
      <Products />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;