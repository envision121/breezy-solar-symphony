import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070",
      title: "Sustainable Energy Solutions",
      description: "Powering the future with renewable energy technology",
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      title: "Innovation in Green Energy",
      description: "Leading the way in renewable energy solutions",
    },
    {
      image: "https://images.unsplash.com/photo-1509390144018-eeef0cba1092?q=80&w=2032",
      title: "Clean Energy for Tomorrow",
      description: "Creating a sustainable future for generations to come",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-text-light mb-6 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-text-light/90 text-xl md:text-2xl mb-8 animate-fadeIn">
                  {slide.description}
                </p>
                <div className="flex gap-4 animate-fadeIn">
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#about"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;