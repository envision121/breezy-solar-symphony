import { ArrowRight, CheckCircle } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4 opacity-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
              <h2 className="text-primary font-semibold tracking-wider uppercase">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                Pioneering Green Energy Solutions
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 opacity-0 animate-fadeIn" style={{ animationDelay: "400ms" }}>
              At Empee Green Energy, we're committed to revolutionizing the energy sector through
              innovative renewable solutions. Our mission is to accelerate the global transition
              to sustainable energy, making it accessible and efficient for everyone.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
              {[
                "Industry Leading Technology",
                "Certified Professionals",
                "24/7 Support & Maintenance",
                "Sustainable Solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 opacity-0 animate-fadeIn" style={{ animationDelay: "800ms" }}>
              <a
                href="#services"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
              >
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-3xl overflow-hidden opacity-0 animate-fadeIn shadow-2xl" 
                 style={{ animationDelay: "400ms" }}>
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Green Energy Solutions"
                className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform rotate-3 rounded-3xl scale-95 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;