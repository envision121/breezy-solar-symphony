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
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 animate-fadeIn">
          <h2 className="section-title">Testimonials</h2>
          <h3 className="text-2xl font-medium mb-4">What Our Clients Say</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 mb-8">
            <Quote className="w-10 h-10 text-primary/20 absolute top-4 left-4" />
            <div className="text-center px-8 pt-8">
              <p className="text-gray-600 mb-6">{testimonials[currentSlide].text}</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold">{testimonials[currentSlide].name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentSlide].position} at {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;