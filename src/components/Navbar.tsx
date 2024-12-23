import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Empe Green Energy p Ltd, 1st Floor, C1, III Phase –Thiru-vi-ka Industrial Estate, Ekkattuthangal, Guindy Chennai - 600 032, Tamil Nadu, India.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+919841210943" className="flex items-center text-gray-600 hover:text-primary">
              <Phone className="h-4 w-4 text-primary mr-2" />
              <span>+91 9841210943 / +91 9884410943</span>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/60eb7af7-d873-47e6-bc2a-44c12fa25d90.png" 
              alt="Empe Green Energy P Ltd" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-primary px-3 py-2 rounded-md text-base font-bold transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slideIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-primary block px-3 py-2 rounded-md text-base font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;