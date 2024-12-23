import { Wind, Sun, Battery } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wind className="w-12 h-12 text-primary" />,
      title: "Wind Systems",
      description: "Complete range of wind turbines from 650W to 5.1KW for various applications",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
    },
    {
      icon: <Sun className="w-12 h-12 text-primary" />,
      title: "Solar Systems",
      description: "On-grid and off-grid solar solutions for residential and commercial needs",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
    {
      icon: <Battery className="w-12 h-12 text-primary" />,
      title: "Hybrid Systems",
      description: "Integrated wind & solar hybrid systems for optimal energy generation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h2 className="section-title">Our Services</h2>
          <h3 className="main-heading">Sustainable Energy Solutions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;