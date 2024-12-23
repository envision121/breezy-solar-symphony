import { Leaf, Wind, Sun, Battery } from "lucide-react";

const KeyHighlights = () => {
  const highlights = [
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      title: "Wind Energy",
      description: "Advanced wind turbine solutions for sustainable power generation",
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Solar Power",
      description: "Efficient solar systems for residential and commercial use",
    },
    {
      icon: <Battery className="h-8 w-8 text-primary" />,
      title: "Hybrid Systems",
      description: "Combined wind and solar solutions for optimal energy production",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Green Solutions",
      description: "Eco-friendly energy solutions for a sustainable future",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {highlight.icon}
                <h3 className="mt-4 mb-2 text-xl font-semibold">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;