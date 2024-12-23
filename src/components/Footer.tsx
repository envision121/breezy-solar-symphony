import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Empee Green Energy</h3>
            <p className="text-gray-400 mb-4">
              Leading the way in renewable energy solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wind System</li>
              <li className="text-gray-400">Solar System</li>
              <li className="text-gray-400">Hybrid System</li>
              <li className="text-gray-400">Aero Leaf Wind Turbine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-400">123 Green Energy Street, Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@empeegreenenergy.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Empee Green Energy P Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;