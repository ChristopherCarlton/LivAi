"use client";
import React, { useEffect } from "react";
import Image from "next/image";

function MainComponent() {
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

  return (
    <div className="bg-secondary text-primary">
      <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000 max-h-[800px]">
        <div className="w-full h-auto bg-cover bg-top">
          <video
            src="/images/movie3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: '500px' }}
          ></video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-chunkfive">
            AI-Powered Cancer <br /> Diagnostics Using Medical <br /> Imaging
          </h1>
        </div>
      </section>




      <section className="py-24 px-4 md:px-64 bg-gradient-to-br from-black to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-chunkfive mb-4 text-primary">Our MRAI Platform</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/brain.webp"
            alt="AI-driven medical imaging platform"
            width={600}
            height={400}
            className="w-full md:w-1/2 h-auto mb-8 md:mb-0 rounded-lg"
          />
          <div className="text-center md:w-1/2 md:ml-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-gray-400">
              LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.
            </p>
            <button className="bg-primary text-secondary py-2 px-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>


      {/* Clinical & Pharma Workflows Section */}
      <section className="py-12 px-4 md:px-64 bg-gradient-to-r from-secondary via-gray-800 to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center">
            <Image
              src="/images/ClinicalDecisions.png"
              alt="Supporting Clinical Decisions"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4 text-left md:text-center">Supporting Clinical Decisions</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 text-left md:text-center">
              LivAi serves as a clinical decision-support solution for patients. An oncologist/clinical care provider can request a LivAi test through radiology to perform a detailed AI-based analysis of a tumor. Results are instantaneous. All information is stored and can be accessed through our GenAI and private LLM capability. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center delay-100">
            <Image
              src="/images/ClinicalTrials.webp"
              alt="Supporting Clinical Trials"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4 text-left md:text-center">Supporting Clinical Trials</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 text-left md:text-center">
              Recruitment of the right patients for the right trials is challenging. Following patients through the clinical trial journey is difficult due to the lack of availability of reliable biomarkers. LivAi dramatically improves both. Our accurate image-based biomarkers support clinical trials by patient selection and treatment-response assessment. All data is protected and presented using GenAI / LLM interfaces.
            </p>
          </div>
        </div>
      </section>


     {/* Partners Section */}
      <section className="py-12 bg-white fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-center text-lg sm:text-xl md:text-4xl lg:text-4xl font-bold mb-8 text-gray-700">Our Partners</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 lg:space-x-48">
          <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/nvidialogo.webp"
              alt="NVIDIA logo"
              width={200}
              height={150}
              className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.wisc.edu" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/UWMlogo.webp"
              alt="University of Wisconsin-Madison logo"
              width={200}
              height={150}
              className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.handzin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/HandzinLogo.webp"
              alt="Handzin logo"
              width={200}
              height={150}
              className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;