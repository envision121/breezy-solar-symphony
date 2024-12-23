import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Sustainable Energy Solutions",
      description: "Powering the future with renewable energy technology",
    },
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      title: "Innovation in Green Energy",
      description: "Leading the way in renewable energy solutions",
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl animate-fadeIn">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;