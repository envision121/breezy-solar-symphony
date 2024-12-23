import { Wind, Sun, Battery, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Wind Energy Systems",
      description: "Cutting-edge wind turbines and systems for optimal energy generation",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Solutions",
      description: "Advanced solar panels and photovoltaic systems for sustainable power",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Hybrid Systems",
      description: "Integrated renewable energy solutions for uninterrupted power supply",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Smart Grid Integration",
      description: "Intelligent power distribution and management systems",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fadeIn">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Energy Solutions
          </h3>
          <p className="text-gray-600 text-lg">
            Discover our range of innovative renewable energy services designed to power a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 bg-white hover:bg-transparent transition-colors duration-500 h-full flex flex-col">
                <div className="mb-6 text-primary group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-white/10 transition-colors duration-500">
                  <a
                    href="#"
                    className="inline-flex items-center text-primary group-hover:text-white transition-colors duration-500"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;