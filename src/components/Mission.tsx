import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Green Energy"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <div className="h-1 w-20 bg-primary rounded"></div>
            <p className="text-gray-600 leading-relaxed">
              At Empee Green Energy P Ltd, we are dedicated to providing reliable,
              innovative, and high-quality renewable energy solutions. Our mission
              is to accelerate the transition to sustainable energy through
              cutting-edge technology and exceptional service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With our extensive knowledge and expertise in the field, we deliver
              top-tier solutions in wind energy, solar power, and hybrid systems.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Expertise in renewable energy technologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Comprehensive turnkey solutions tailored to your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Commitment to sustainability and customer satisfaction</span>
                </li>
              </ul>
            </div>
            <a
              href="#services"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
