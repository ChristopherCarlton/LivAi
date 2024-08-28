import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const LogoSoloHeader = () => {
  return (
    <div className="flex items-center space-x-4 mb-4 mx-auto h-full">
      <Image
        src="/images/logoalone.png"
        alt="LivAi Logo"
        layout="intrinsic" // Adjusts based on the original image size
        className="h-full max-h-[200px] w-auto object-contain scale-150"
        width={50} // Set the width
        height={50} // Set the height
      />
      <span className=" text-5xl md:text-6xl">LivAi</span>
    </div>
  );
};

export default LogoSoloHeader;
 