import React from 'react';

const Media = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto p-8 bg-secondary ">
      <h2 className="text-left text-6xl mt-5 mb-10 font-semibold text-primary">Media</h2>
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <iframe
          className="w-full md:w-[40rem] h-64 md:h-[20rem]"
          src="https://www.youtube.com/embed/asBnLrwaxEE?start=290"
          title="YouTube video player 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full md:w-[40rem] h-64 md:h-[20rem]"
          src="https://www.youtube.com/embed/mgOhQ_jvXO0"
          title="YouTube video player 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <a
        href="https://idia.labs.wisc.edu/media-recognition/"
        className="mt-10 text-lg text-secondary bg-primary px-8 py-4 rounded-md transform transition-transform duration-300 hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Media Recognition
      </a>
    </div>
  );
};

export default Media;
