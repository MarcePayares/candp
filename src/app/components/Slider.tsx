// src/Slider.js
import React, { useState } from 'react';

const Slider = () => {
  // Array of slides with image and text
  const slides = [
    {
      image: '/ceja3.jpeg',
      title: 'Cejas',
      description: 'Manejamos el diseño de las cejas más la depilación con cera o hilo, si deseas se puede implementar el pigmento temporal para manejar un estilo de cejas maquillado',
    },
    {
      image: '/ceja4.jpeg',
      title: 'Pestañas',
      description: 'Extensiones de pestañas con un efecto de ojo maquillado, diferentes tecnicas, atención personalizada para que quedes satisfecha con tu mirada',
    },
    {
      image: '/laminado.jpeg',
      title: 'Laminado de Cejas',
      description: 'Procedimiento diseñado para darle a esta parte del rostro un aspecto mpas definido y disciplinado sin necesidad de maquillaje diario',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[450px] relative">
      <div className="absolute inset-0">
        {/* Flex container for image and text */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Image section (left) */}
          <div className="md:w-1/2 w-full h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text section (right) */}
          <div className="md:w-1/2 w-full h-full bg-white flex flex-col justify-center p-10">
            <h2 className="text-4xl font-bold text-gray-800">{slides[currentSlide].title}</h2>
            <p className="mt-4 text-lg text-gray-600">{slides[currentSlide].description}</p>

            {/* Navigation buttons */}
            <div className="mt-6 flex justify-start space-x-4">
              <button
                onClick={prevSlide}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
