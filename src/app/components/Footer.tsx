// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top section with navigation links and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Inicio</a>
            <a href="#" className="hover:text-white">Sobre Nosotros</a>
            <a href="#" className="hover:text-white">Contacto</a>
            <a href="#" className="hover:text-white">Galería</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome */}
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
