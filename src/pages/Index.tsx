import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import KeyHighlights from "@/components/KeyHighlights";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <Mission />
        </div>
        <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5">
          <KeyHighlights />
        </div>
        <Services />
        <div className="relative bg-gradient-to-t from-primary/5 to-transparent">
          <Products />
        </div>
        <Gallery />
        <div className="relative bg-gradient-to-br from-secondary/5 to-primary/5">
          <Testimonials />
        </div>
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Index;