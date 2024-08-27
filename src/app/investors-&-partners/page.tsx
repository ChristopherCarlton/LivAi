'use client'
import React, { useEffect, useRef } from 'react';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt to play the video with sound after a user interaction
      const playVideo = () => {
        video.play().catch(error => {
          // Handle autoplay restrictions
          console.log('Autoplay with sound was prevented:', error);
        });
      };

      // Add event listener for user interaction
      window.addEventListener('click', playVideo);
      window.addEventListener('touchstart', playVideo);

      return () => {
        window.removeEventListener('click', playVideo);
        window.removeEventListener('touchstart', playVideo);
      };
    }
  }, []);

  return (
    <div className="relative w-full bg-[#080c3c] pt-8 pb-[18rem] md:pb-[35rem] lg:pb-[40rem] xl:pb-[55rem]">
      <div className="w-full h-auto">
        <video
          ref={videoRef}
          src="/images/LivAI-V.mp4"
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-auto object-contain"
        ></video>
      </div>
    </div>
  );
};

export default Video;





// import React from 'react';

// const Video: React.FC = () => {
//   return (
//     <div className="relative w-full bg-[#080c3c] pt-8 pb-[18rem] md:pb-[35rem] lg:pb-[40rem] xl:pb-[55rem]">
//       <div className="w-full h-auto">
//         <video
//           src="/images/LivAI-V.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-auto object-contain"
//         ></video>
//       </div>
//     </div>
//   );
// };

// export default Video;
