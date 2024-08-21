"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import About from "./about/page";
import Media from "./media/page";

function Connect() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('opacity-95', 'translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback rate to half speed
    }
  }, []);

  return (
    <div className="bg-secondary text-primary">
      <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000 max-h-[800px]">
        <div className="w-full h-auto bg-cover bg-top">
          <video
            ref={videoRef}
            src="/images/movie.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: '700px' }}
          ></video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white pb-56">
            AI-Powered Cancer Diagnostics <br />Using Medical Imaging
          </h1>
        </div>
      </section>

      <section className="pb-24 pt-4 px-4 md:px-16 bg-secondary fade-in translate-y-4 transition-opacity duration-1000">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-primary">Turning MRI into MRAI</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/TitleImage.webp"
            alt="AI-driven medical imaging platform"
            width={150}
            height={150}
            className="w-3/4 h-auto mb-8 md:mb-0 rounded-lg mx-auto"
          />
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-600">
              {/* LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology. */}
              LivAi provides a suite of cloud-based, AI-driven, image-based oncology solutions that provide  deep insights into diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology. Our technology, named MRAI™, integrates advanced image analysis and patented AI approaches that capture unique micro and macro-level quantitative descriptions of  lesion morphology on routine clinical imaging (i.e. MRIs) to characterize tumor complexity. MRAI is a revolutionary approach to reading MRI scans, way beyond the manual tumor axis measurements used in current clinical practice. While our end-users are oncologists, LivAi solutions improve the patient treatment journey impacting radiologists, radiation-oncologists, patients, and pharma partners. Our technology integrates seamlessly with clinical workflow, ensuring a non-disruptive addition of the MRAI test to routine clinical work up.
            </p>
            <div className="flex justify-center md:justify-center w-full">
              <button className="bg-primary text-secondary py-2 px-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
                <a href="/connect">Request Demo</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Media/>
    </div>
  );
}

export default Connect;
