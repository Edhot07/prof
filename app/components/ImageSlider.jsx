"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="overflow-hidden w-full flex justify-center items-center relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="min-w-full flex justify-center items-center" key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={400} // Adjust the width as needed
              height={300} // Adjust the height as needed
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
