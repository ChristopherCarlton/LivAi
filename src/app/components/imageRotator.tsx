'use client';

import { useState, useEffect } from 'react';

const ImageRotator = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const images = [
    { src: '/images/globalreach.png', alt: 'Global Reach' },
    { src: '/images/secureplatform.png', alt: 'Secure Platform' },
    { src: '/images/instantresults.png', alt: 'Instant Results' }
  ];

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsFading(true);
      const interval = setInterval(() => {
        setIsFading(false);
        setTimeout(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          setIsFading(true);
        }, 500); // Half a second for fade-out
      }, 5000); // 5 seconds per image

      return () => clearInterval(interval);
    }, 1000); // 1-second delay before the first image loads

    return () => clearTimeout(initialTimeout);
  }, [images.length]);

  return (
    <div className="flex justify-center w-full pt-12">
      <div className="w-1/3 flex justify-center items-center">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className={`h-auto w-auto max-h-32 max-w-full object-contain transition-opacity duration-1000 ${isFading ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};

export default ImageRotator;
