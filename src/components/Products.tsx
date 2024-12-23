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
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
      title: "Hybrid System",
      products: ["Wind & Solar Hybrid System", "Solar Hybrid System"],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Solar Pump System",
      products: ["Deep Well Pumps", "Surface Pumps", "Agricultural Pumps"],
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-4">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-gray-600">• {product}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  View All <ArrowRight className="ml-2 h-4 w-4" />
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