import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "John Smith",
      position: "Factory Owner",
      company: "Industrial Solutions Ltd",
      text: "Empee Green Energy's wind turbine installation has significantly reduced our energy costs. Their professional team and excellent after-sales support exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Sarah Johnson",
      position: "Sustainability Director",
      company: "Green Tech Industries",
      text: "The solar system installed by Empee has been performing excellently. Their expertise in renewable energy solutions is truly commendable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "David Chen",
      position: "Operations Manager",
      company: "Pacific Enterprises",
      text: "The hybrid system from Empee Green Energy has proven to be a game-changer for our facility. Reliable power supply and significant cost savings.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h2 className="section-title">Testimonials</h2>
          <h3 className="main-heading">What Our Clients Say</h3>
        </div>
        <div className="relative h-[400px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 transform ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <Quote className="w-16 h-16 text-primary/20 mb-8" />
                <p className="text-xl text-gray-600 mb-8 italic">{testimonial.text}</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-primary/10"
                />
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary w-6" : "bg-primary/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;