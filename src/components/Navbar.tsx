
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-nitinova-500">Nitinova</span>
              <span className="ml-1 text-teal">AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-nitinova-500 font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-nitinova-500 font-medium transition-colors">
              Services
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-nitinova-500 font-medium transition-colors">
              Packages
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-nitinova-500 font-medium transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-nitinova-500 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact">
              <Button className="bg-nitinova-500 hover:bg-nitinova-600 text-white">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-nitinova-500 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-nitinova-500 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-nitinova-500 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/packages"
                className="text-gray-700 hover:text-nitinova-500 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Packages
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-nitinova-500 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-nitinova-500 font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="inline-block"
                onClick={toggleMenu}
              >
                <Button className="w-full bg-nitinova-500 hover:bg-nitinova-600 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
