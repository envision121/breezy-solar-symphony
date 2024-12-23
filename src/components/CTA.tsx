import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Switch to Green Energy?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us in creating a sustainable future with our innovative renewable energy solutions.
            Contact us today for a consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-full hover:bg-primary/5 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
