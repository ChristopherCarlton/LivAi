import React from 'react';
import Image from 'next/image';

const LogoSolo = () => {
  return (
    <div className="flex items-center mb-4 mx-auto">
      <Image
        src="/images/logoalone.png"
        alt="LivAi Logo"
        width={180}
        height={180}
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
      />
      <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-primary ml-4">
        LivAi
      </span>
    </div>
  );
};

export default LogoSolo;
