import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/images/LivAI-V.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-screen h-full object-cover"
      ></video>
    </div>
  );
};

export default Video;
