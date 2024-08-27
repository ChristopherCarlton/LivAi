"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import About from "../about/page";
import Media from "../media/page";
import Partners from "../components/partners";

function Page() {
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="bg-secondary text-primary">
      <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000 max-h-[800px]">
        <div className="w-full h-auto bg-cover bg-top flex">
            <video
                ref={videoRef}
                src="/images/movie4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-1/2 h-full object-cover object-top"
                style={{ maxHeight: '1000px' }}
            ></video>
            <video
                ref={videoRef}
                src="/images/movie2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-1/2 h-full object-cover object-top"
                style={{ maxHeight: '1000px' }}
            ></video>
        </div>

        {/* Existing div for larger screens */}
        <div className="hidden sm:flex absolute inset-0 flex-col justify-end items-center text-center pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white pb-36">
            AI-Powered Cancer Diagnostics <br />Using Medical Imaging
          </h1>
        </div>
        {/* New div for mobile screens */}
        <div className="flex sm:hidden absolute inset-0 flex-col justify-end items-center text-center pb-8">
          <h1 className="text-2xl text-white pb-8">
            AI-Powered Cancer Diagnostics <br />Using Medical Imaging
          </h1>
        </div>
      </section>

      <section className="pb-4 pt-4 px-4 md:px-16 bg-secondary fade-in translate-y-4 transition-opacity duration-1000">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-primary">
            Turning MRI into MRAI
            <img
              src="/images/trademark.png"
              alt="Trademark"
              className="inline-block ml-2 w-6 h-6"
            />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/z.png"
            alt="AI-driven medical imaging platform"
            width={150}
            height={150}
            className="w-3/4 h-auto mb-8 md:mb-0 rounded-lg mx-auto"
          />
          <div className="text-center flex flex-col items-center md:items-start">
            <p className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-16 text-gray-800">
              LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.
            </p>
            <div className="flex justify-center md:justify-center w-full">
              <button className="bg-primary text-secondary py-2 px-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
                <a href="/connect">Request Demo</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="partners">
        <Partners />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="media">
        <div className="pt-16"></div>
        <Media />
      </section>
    </div>
  );
}

export default Page;
