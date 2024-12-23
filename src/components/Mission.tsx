import { ArrowRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Green Energy"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Empee Green Energy P Ltd, we are dedicated to providing reliable,
              innovative, and high-quality renewable energy solutions. Our mission
              is to accelerate the transition to sustainable energy through
              cutting-edge technology and exceptional service.
            </p>
            <a
              href="#about"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;