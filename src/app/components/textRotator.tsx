'use client';

import { useState, useEffect } from 'react';

const TextRotator = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const texts = [
    'Global Reach',
    'Secure Platform',
    'Instant Results'
  ];

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsFading(true);
      const interval = setInterval(() => {
        setIsFading(false);
        setTimeout(() => {
          setCurrentText((prevText) => (prevText + 1) % texts.length);
          setIsFading(true);
        }, 500); // Half a second for fade-out
      }, 5000); // 5 seconds per text

      return () => clearInterval(interval);
    }, 1000); // 1-second delay before the first text appears

    return () => clearTimeout(initialTimeout);
  }, [texts.length]);

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center items-center">
        <span
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold transition-opacity duration-1000 ${isFading ? 'opacity-100' : 'opacity-0'}`}
        >
          {texts[currentText]}
        </span>
      </div>
    </div>
  );
};

export default TextRotator;
