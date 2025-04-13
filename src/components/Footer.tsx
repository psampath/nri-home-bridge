
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold mb-4">
              NRI <span className="text-nri-gold">HomeConnect</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Bridging the US and India, one property at a time. We provide reliable property management and investment services for NRIs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nri-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nri-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nri-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nri-blue transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#trust" className="text-gray-300 hover:text-white transition-colors">Why Trust Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Real Estate Investment</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Legal Support</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Virtual Updates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-nri-gold" />
                  <span className="text-gray-300">contact@nrihomeconnect.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-nri-gold" />
                  <span className="text-gray-300">+91 9876543210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">
            &copy; {currentYear} NRI HomeConnect. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-8">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
