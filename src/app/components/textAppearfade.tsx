'use client';

import { useState, useEffect } from 'react';

const TextAppearFade = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isRemoving, setIsRemoving] = useState(false);
  const texts = [
    'Global Reach.',
    'Secure Platform.',
    'Instant Results.'
  ];

  useEffect(() => {
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      if (!isRemoving && charIndex <= texts[currentText].length) {
        setDisplayedText(texts[currentText].slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeText, 100); // Typing speed (in ms)
      } else if (isRemoving) {
        setDisplayedText('');
        setIsRemoving(false);
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        timeout = setTimeout(typeText, 1000); // Pause before typing the next word
      } else {
        timeout = setTimeout(() => setIsRemoving(true), 2000); // Pause before removing text
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, [currentText, isRemoving]);

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center items-center">
        <span
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white transition-opacity duration-500`}
          
        >
          {displayedText}
        </span>
      </div>
    </div>
  );
};

export default TextAppearFade;
