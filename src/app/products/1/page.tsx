import React from 'react';
import Image from 'next/image';
import ImageRotator from '../../components/imageRotator';

const Products = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      <div className="relative w-full">
        <Image
            className="w-full h-[400px] object-cover"
            src="/images/z.jpg"
            alt="Supporting Clinical Decisions"
            width={600}
            height={300}

        />
        <div className="absolute inset-0 flex items-center justify-center">
        <ImageRotator/>
        </div>
      </div>
      {/* Clinical & Pharma Workflows Section */}
      <section className="py-12 px-4 md:px-16 bg-secondary fade-in transition-opacity duration-1000">
        <h2 className="text-center text-4xl sm:text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">MRAI Diagnostic Solutions for Hospitals & Clinics</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
              Our proprietary MRAI solution serves as a clinical decision-support for oncology treatment management. Oncologists/clinical care providers can request MRAI analysis to perform detailed tumor assessment, through the entire patient’s journey. Results are instantaneous. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time. 
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
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-left md:text-center">MRAI Analytics Platform for Pharma & Research</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center">
              LivAi provides innovative, research-backed AI solutions for oncology to help pharma through the entire cycle of drug development and clinical trial management. We offer diverse services including inclusion/exclusion, patient selection, and treatment management using MRAI-driven biomarkers . Our solutions are scientifically proven and offer substantial value as they utilize clinical MRI scans, and thus are non-disruptive to the existing clinical workup for a patient on a clinical trial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;