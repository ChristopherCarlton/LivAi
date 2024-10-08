'use client';

import { useState, useEffect } from 'react';

const TextAppearOnce = () => {
  const [displayedText, setDisplayedText] = useState('');
  const texts = 'Precision Beyond Sight';

  useEffect(() => {
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      if (charIndex <= texts.length) {
        setDisplayedText(texts.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeText, 100); // Typing speed (in ms)
      } else {
        // Reset the text and start again for looping effect
        setTimeout(() => {
          charIndex = 0;
          setDisplayedText('');
          typeText();
        }, 5000); // 5-second pause before looping (in ms)
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-center">
      <span className="text-base sm:text-lg md:text-xl lg:text-xl text-primary font-bold">
        {displayedText}
      </span>
    </div>
  );
};

export default TextAppearOnce;
