import React from 'react';

const Media = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto p-8 bg-secondary">
      <h2 className="text-left text-6xl mt-5 mb-10 font-semibold text-primary">Media</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="w-full">
          <iframe
            className="w-full h-[50vw] md:h-[20vw] max-h-[400px]"
            src="https://www.youtube-nocookie.com/embed/asBnLrwaxEE?start=290"
            title="YouTube video player 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <iframe
            className="w-full h-[50vw] md:h-[20vw] max-h-[400px]"
            src="https://www.youtube-nocookie.com/embed/ysZRaRoj_6M?start=17"
            title="YouTube video player 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <iframe
            className="w-full h-[50vw] md:h-[20vw] max-h-[400px]"
            src="https://www.youtube-nocookie.com/embed/mgOhQ_jvXO0"
            title="YouTube video player 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <a
        href="https://idia.labs.wisc.edu/media-recognition/"
        className="mt-10 text-lg text-secondary bg-primary px-8 py-4 rounded-md transform transition-transform duration-300 hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        Media Room
      </a>      
    </div>
  );
};

export default Media;
