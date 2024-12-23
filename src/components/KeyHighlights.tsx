import { Wind, Sun, Battery, Plug, Factory, Leaf } from "lucide-react";

const KeyHighlights = () => {
  const solutions = [
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      title: "Wind Systems",
      description: "Harness wind energy with our high-efficiency turbines. Tailored solutions for residential, commercial, and industrial use.",
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Solar Systems",
      description: "Efficient solar PV panels and rooftop systems for energy independence. Turnkey solutions for residential and commercial purposes.",
    },
    {
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: "Hybrid Systems",
      description: "The best of solar and wind combined for reliable energy generation. Scalable and cost-effective solutions for continuous power supply.",
    },
    {
      icon: <Plug className="h-8 w-8 text-primary" />,
      title: "Solar Pump Systems",
      description: "Eco-friendly and cost-efficient water pumping solutions.",
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Exhaust Wind Turbines",
      description: "Innovative turbines that utilize waste airflow for additional energy generation.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Aero Leaf Wind Turbines",
      description: "Compact, efficient, and aesthetically pleasing turbines ideal for urban and rural setups.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {solution.icon}
                <h3 className="mt-4 mb-2 text-xl font-semibold">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Achievements and Expertise</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <span>Over 5 MW of small wind systems installed across India</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <span>Leading provider of solar power plants in Tamil Nadu and South India</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <span>Proven expertise in integrating hybrid energy systems and solar water pumps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;