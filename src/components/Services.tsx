const Services = () => {
  const services = [
    {
      title: "Wind Systems",
      description: "Complete range of wind turbines from 650W to 5.1KW for various applications",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Solar Systems",
      description: "On-grid and off-grid solar solutions for residential and commercial needs",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
      title: "Hybrid Systems",
      description: "Integrated wind & solar hybrid systems for optimal energy generation",
      image: "https://images.unsplash.com/photo-1509390144018-eed96ad32b5e",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;