import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Green Energy"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Empee Green Energy P Ltd, we are dedicated to providing reliable,
              innovative, and high-quality renewable energy solutions. Our mission
              is to accelerate the transition to sustainable energy through
              cutting-edge technology and exceptional service.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With our extensive knowledge and expertise in the field, we deliver
              top-tier solutions in wind energy, solar power, and hybrid systems.
              Our commitment to excellence drives us to understand your unique
              requirements and provide tailored solutions that optimize efficiency.
            </p>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors group"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;