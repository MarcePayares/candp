// src/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-[400px] bg-cover bg-center relative bg-indigo-800">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Promocíon exclusiva!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
            Obtenga hasta un 50% de descuento si agenda su cita antes del 31 de diciembre
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700">
          Agendar cita
        </button>
      </div>
    </div>
  );
};

export default Banner;
