import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Zingari</h3>
          <p className="text-sm leading-relaxed">
            Bringing authentic Maharashtrian spices to your kitchen, crafted with love and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shop All</a></li>
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Recipes</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Spice Street</li>
            <li>Mumbai, Maharashtra</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Email: hello@zingari.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 mb-6" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-4 sm:space-y-0">
        <p>© 2024 Zingari. All rights reserved.</p>
        <div className="flex space-x-6 text-xl">
          <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-white transition-colors" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-white transition-colors" /></a>
          <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-white transition-colors" /></a>
          <a href="#" aria-label="Pinterest"><FaPinterest className="hover:text-white transition-colors" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
