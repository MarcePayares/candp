import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  const images = [
    '/ceja1.jpeg',
    '/ceja3.jpeg',
    '/ceja4.jpeg',
    '/ceja6.jpeg',
    '/pestaña1.jpeg',
    '/pestaña2.jpeg',
    '/pestaña4.jpeg',
  ];

  return (
    <div className="w-full py-10 pb-12 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Galleria</h2>

      <div className="flex overflow-x-scroll space-x-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
