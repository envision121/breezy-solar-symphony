import { useState, useEffect } from "react";

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="relative h-[300px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
                <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-gray-500">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;