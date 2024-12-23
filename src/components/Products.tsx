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
    <section className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-gray-600">• {product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;