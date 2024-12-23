import { ArrowRight } from "lucide-react";

const Products = () => {
  const categories = [
    {
      title: "Wind System",
      products: ["UE-6 650 Wind Turbine", "UE-15 1.5KW Wind Turbine", "UE-42 4.2KW Wind Turbine"],
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
    },
    {
      title: "Solar System",
      products: ["On-Grid System", "Off Grid System"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Hybrid System",
      products: ["Wind & Solar Hybrid System", "Solar Hybrid System"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
    {
      title: "Solar Pump System",
      products: ["Deep Well Pumps", "Surface Pumps", "Agricultural Pumps"],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h2 className="section-title">Our Products</h2>
          <h3 className="main-heading">Innovative Solutions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-6">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {product}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full inline-flex items-center group transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;