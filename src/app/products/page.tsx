import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      {/* Video Section */}
      <div className="relative w-full">
        <video
          className="w-full h-[400px] object-cover"
          src="/images/clinical.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            AI Imaging
          </h1>
        </div>
      </div>

      {/* Clinical & Pharma Workflows Section */}
      <section className="py-12 px-4 md:px-16 bg-secondary fade-in transition-opacity duration-1000">
        <h2 className="text-left text-4xl sm:text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">Supporting Clinical Decisions</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">Supporting Clinical Trials</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
              Recruitment of the right patients for the right trials is challenging. Following patients through the clinical trial journey is difficult due to the lack of availability of reliable biomarkers. LivAi dramatically improves both. Our accurate image-based biomarkers support clinical trials by patient selection and treatment-response assessment. All data is protected and presented using GenAI / LLM interfaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
