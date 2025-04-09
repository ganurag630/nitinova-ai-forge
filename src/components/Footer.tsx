
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-nitinova-500">Nitinova</span>
              <span className="ml-1 text-teal">AI</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Transform your business with AI-powered solutions. From websites to intelligent operations, we're your growth partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-nitinova-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nitinova-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nitinova-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-nitinova-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nitinova-500 transition-colors">Digital Foundation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nitinova-500 transition-colors">Web Presence</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nitinova-500 transition-colors">E-Commerce</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nitinova-500 transition-colors">AI Implementation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-nitinova-500 transition-colors">Custom Apps</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nitinova-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nitinova-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-600 hover:text-nitinova-500 transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-nitinova-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-nitinova-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-nitinova-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">info@nitinova.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-nitinova-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-nitinova-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Innovation Drive, Tech City, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Nitinova AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-nitinova-500 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-nitinova-500 text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
