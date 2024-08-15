"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans bg-secondary text-primary">
      <section className="h-[640px] relative">
        <img src="/images/TitleImage.png" alt="Neon themed AI powered cancer diagnostics" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-secondary bg-opacity-50">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold text-primary">AI-Powered Cancer Diagnostics Using Medical Imaging</h1>
        </div>
      </section>

      <section className="py-12 px-4 md:px-64 flex flex-col md:flex-row items-center">
        <img src="/images/brain.webp" alt="AI-driven medical imaging platform" className="w-full md:w-1/2 h-auto mb-8 md:mb-0" />
        <div className="text-center md:w-1/2">
          <h2 className="text-5xl font-semibold mb-4 text-primary">Our MRAI Platform</h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-white">
            LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.
          </p>
          <button className="bg-primary text-secondary py-2 px-6 rounded">Request Demo</button>
        </div>
      </section>

      <section className="py-12 px-4 md:px-64">
        <h2 className="text-center text-5xl font-semibold mb-10 text-primary">Clinical & Pharma Workflows</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center">
            <div className="flex-grow">
              <img src="/images/ClinicalDecisions.png" alt="Supporting Clinical Decisions" className="w-full h-[300px] object-cover mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Decisions</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">
              LivAi serves as a clinical decision-support solution for patients. An oncologist/clinical care provider can request a LivAi test through radiology to perform a detailed AI-based analysis of a tumor. Results are instantaneous. All information is stored and can be accessed through our GenAI and private LLM capability. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center">
            <div className="flex-grow">
              <img src="/images/ClinicalTrials.webp" alt="Supporting Clinical Trials" className="w-full h-[300px] object-cover mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Trials</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">
              Recruitment of the right patients for the right trials is challenging. Following patients through the clinical trial journey is difficult due to the lack of availability of reliable biomarkers. LivAi dramatically improves both. Our accurate image-based biomarkers support clinical trials by patient selection and treatment-response assessment. All data is protected and presented using GenAI / LLM interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-64">
        <h2 className="text-center text-5xl font-semibold mb-10 text-primary">Founding Team</h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <img src="/images/PallaviTiwari.png" alt="Pallavi Tiwari PhD" className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">
              Founder & President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
            </p>
          </div>
          <div className="text-center flex-grow">
            <img src="/images/MikeGalvin.png" alt="Mike Galvin" className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">
              Co-founder & Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people's lives.
            </p>
          </div>
          <div className="text-center">
            <img src="/images/JimKarkanias.png" alt="Jim Karkanias PhD" className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform" />
            <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white">
              Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the world's biggest companies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-64 bg-secondary text-white">
        <h2 className="text-center text-3xl font-bold mb-8 text-primary">Advisors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="text-center">
            <img src="/images/DavidSchuster.webp" alt="David Schuster" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">David Schuster</p>
          </div>
          <div className="text-center">
            <img src="/images/RamyIbrahim.webp" alt="Ramy Ibrahim MD" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Ramy Ibrahim MD</p>
          </div>
          <div className="text-center">
            <img src="/images/ManmeetAhluwalia.webp" alt="Manmeet Ahluwalia MD" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Manmeet Ahluwalia MD</p>
          </div>
          <div className="text-center">
            <img src="/images/SarvaChannarajurs.webp" alt="Sarva Channarajurs" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Sarva Channarajurs</p>
          </div>
          <div className="text-center">
            <img src="/images/GlenTaylor.webp" alt="Glen Taylor" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Glen Taylor</p>
          </div>
          <div className="text-center">
            <img src="/images/GaryAdey.webp" alt="Gary Adey" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Gary Adey</p>
          </div>
          <div className="text-center">
            <img src="/images/RebeccaDriscoll.webp" alt="Rebecca Driscoll" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Rebecca Driscoll</p>
          </div>
          <div className="text-center">
            <img src="/images/JaiKumar.webp" alt="Jai Kumar" className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Jai Kumar</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold mb-4 text-primary">Our Partners</h2>
        <div className="flex justify-center space-x-48">
          <img src="/images/nvidialogo.webp" alt="NVIDIA logo" className="w-[200px] h-auto hover:scale-105 transition-transform" />
          <img src="/images/UWMlogo.webp" alt="University of Wisconsin-Madison logo" className="w-[200px] h-auto hover:scale-105 transition-transform" />
          <img src="/images/HandzinLogo.webp" alt="Handzin logo" className="w-[200px] h-auto hover:scale-105 transition-transform" />
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <h2 className="text-center text-3xl font-bold mb-4 text-primary">Contact Us</h2>
        <div className="bg-white mx-auto w-full md:w-1/2 p-6 text-center rounded shadow">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-4 text-secondary">
            For all matters relating to trials & sales.
            <br />
            Please contact us at:
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-accent">
            <a href="mailto:info@liv.ai">info@liv.ai</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;
