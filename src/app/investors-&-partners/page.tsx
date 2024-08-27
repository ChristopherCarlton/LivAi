import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="relative w-full bg-[#080c3c] pt-8 pb-[30rem] md:pb-[35rem] lg:pb-[40rem] xl:pb-[65rem]">
      <div className="w-full h-auto">
        <video
          src="/images/LivAI-V.mp4"
          autoPlay
          loop
          muted
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
//     <div className="relative w-full h-screen">
//       <video
//         src="/images/LivAI-V.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-screen h-full object-cover"
//       ></video>
//     </div>
//   );
// };

// export default Video;
