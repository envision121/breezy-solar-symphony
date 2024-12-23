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
          <h3 className="main-heading">What Our Clients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-gray-600 mb-6 line-clamp-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;