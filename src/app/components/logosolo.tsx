import React from 'react';
import Image from 'next/image';

const LogoSolo = () => {
  return (
    <div className="flex items-center mb-4 mx-auto">
      <Image
        src="/images/logosolo.png"
        alt="LivAi Logo"
        width={180}
        height={180}
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
      />
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-primary pr-4">
        LivAi
      </span>
    </div>
  );
};

export default LogoSolo;
