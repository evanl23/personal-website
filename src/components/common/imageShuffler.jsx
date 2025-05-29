import React, { useState, useEffect } from 'react';

const ImageShuffler = () => {
  const images = [
    '/swimming.JPG',
    '/mountain.png',
    '/cook.png',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="w-full max-w-md h-64 relative overflow-hidden rounded-lg shadow-lg"> 
        {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
        ))}
    </div>
  );
};

export default ImageShuffler;