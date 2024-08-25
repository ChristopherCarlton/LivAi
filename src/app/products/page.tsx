import React from 'react';
import Image from 'next/image';
import TextRotator from '@/app/components/textRotator';

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      <div className="relative w-full">
        <Image
            className="w-full h-[400px] object-cover"
            src="/images/y.jpg"
            alt="Supporting Clinical Decisions"
            width={600}
            height={300}

        />
        <div className="absolute inset-0 flex items-center justify-center">
        <TextRotator/>
        </div>
      </div>
      {/* Clinical & Pharma Workflows Section */}
      <section className="py-12 px-4 md:px-16 bg-secondary fade-in transition-opacity duration-1000">
        <h2 className="text-center text-4xl sm:text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center">
            <Image
              src="/images/ClinicalDecisions.jpg"
              alt="Supporting Clinical Decisions"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">
              <span className="inline-flex items-center">
                MRAI
                <img
                  src="/images/trademark.png"
                  alt="Trademark"
                  className="inline-block ml-1 w-4 h-4"
                />
                <span className="ml-2">Diagnostic Solutions for Hospitals & Clinics</span>
              </span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
              Our proprietary 
              <span className="inline-flex items-center ml-2">
                MRAI
                <img
                  src="/images/trademark.png"
                  alt="Trademark"
                  className="inline-block ml-1 w-4 h-4"
                />
                <span className="ml-2"></span>
              </span> 
                solution serves as a clinical decision-support for oncology treatment management. Oncologists/clinical care providers can request 
              <span className="inline-flex items-center ml-2">
                MRAI
                <img
                  src="/images/trademark.png"
                  alt="Trademark"
                  className="inline-block ml-1 w-4 h-4"
                />
                <span className="ml-2"></span>
              </span> 
              analysis to perform detailed tumor assessment, through the entire patient’s journey. Results are instantaneous. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 flex flex-col items-center delay-100">
            <Image
              src="/images/ClinicalTrials.jpg"
              alt="Supporting Clinical Trials"
              width={600}
              height={300}
              className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">
              <span className="inline-flex items-center">
                MRAI
                <img
                  src="/images/trademark.png"
                  alt="Trademark"
                  className="inline-block ml-1 w-4 h-4"
                />
                <span className="ml-2"></span>
              </span>
              Analytics Platform for Pharma & Research
            </h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
              LivAi provides innovative, research-backed AI solutions for oncology to help pharma through the entire cycle of drug development and clinical trial management. We offer diverse services including inclusion/exclusion, patient selection, and treatment management using 
              <span className="inline-flex items-center ml-2">
                MRAI
                <img
                  src="/images/trademark.png"
                  alt="Trademark"
                  className="inline-block ml-1 w-4 h-4"
                />
                <span className="ml-1"></span>
              </span> 
              -driven biomarkers. Our solutions are scientifically proven and offer substantial value as they utilize clinical MRI scans, and thus are non-disruptive to the existing clinical workup for a patient on a clinical trial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;



      {/* <div className="flex justify-center w-full pt-12">
        <div className="w-1/3 flex justify-between items-center">
          <img src="/images/globalreach.png" alt="Global Reach" className="h-auto w-auto max-h-32 max-w-full object-contain" />
          <img src="/images/secureplatform.png" alt="Secure Platform" className="h-auto w-auto max-h-32 max-w-full object-contain" />
          <img src="/images/instantresults.png" alt="Instant Results" className="h-auto w-auto max-h-32 max-w-full object-contain" />
        </div>
      </div> */}


      // <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      // <div className="relative w-full">
      //   <video
      //     className="w-full h-[400px] object-cover"
      //     src="/images/clinical.mp4"
      //     autoPlay
      //     loop
      //     muted
      //     playsInline
      //   />
      //   <div className="absolute inset-0 flex items-center justify-center mb-4">
      //     <ImageRotator/>
      //   </div>
      // </div>