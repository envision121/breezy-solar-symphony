import { Wind, Sun, Battery, Plug, Factory, Leaf, ArrowRight } from "lucide-react";

const KeyHighlights = () => {
  const solutions = [
    {
      icon: <Wind className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Wind Systems",
      description: [
        "Harness wind energy with our high-efficiency turbines.",
        "Tailored solutions for residential, commercial, and industrial use.",
      ],
    },
    {
      icon: <Sun className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Solar Systems",
      description: [
        "Efficient solar PV panels and rooftop systems for energy independence.",
        "Turnkey solutions for residential and commercial purposes.",
      ],
    },
    {
      icon: <Battery className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Hybrid Systems",
      description: [
        "The best of solar and wind combined for reliable energy generation.",
        "Scalable and cost-effective solutions for continuous power supply.",
      ],
    },
    {
      icon: <Plug className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Solar Pump Systems",
      description: [
        "Eco-friendly and cost-efficient water pumping solutions.",
      ],
    },
    {
      icon: <Factory className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Exhaust Wind Turbines",
      description: [
        "Innovative turbines that utilize waste airflow for additional energy generation.",
      ],
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
      title: "Aero Leaf Wind Turbines",
      description: [
        "Compact, efficient, and aesthetically pleasing turbines ideal for urban and rural setups.",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Key Solutions</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {solution.icon}
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors inline-flex items-center group"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Achievements and Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">5+ MW</div>
              <p className="text-gray-600">Small wind systems installed across India</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">#1</div>
              <p className="text-gray-600">Leading provider of solar power plants in Tamil Nadu and South India</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Proven expertise in integrating hybrid energy systems and solar water pumps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;