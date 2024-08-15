"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans bg-black text-[#00FF00]">
      <div className="h-[640px] relative">
        <img
          src="/images/TitleImage.png"
          alt="Neon themed AI powered cancer diagnostics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold text-[#39FF14]">
            AI-Powered Cancer Diagnostics Using Medical Imaging
          </h1>
        </div>
      </div>

      <div className="py-12 flex flex-col md:flex-row items-center">
        <img
          src="/images/brain.webp"
          alt="AI-driven medical imaging platform"
          className="w-full md:w-1/2 h-auto"
        />
        <div className="text-center px-4 py-8 md:w-1/2">
          <h2 className="text-5xl font-semibold mb-4 text-[#39FF14]">
            Our MRAI Platform
          </h2>
          <p className="text-lg mb-8 text-white">
            LivAi provides a suite of cloud-based artificial intelligence
            (AI)-driven software solutions focused on providing improved
            analysis and deep insights towards diagnosis, prognosis, prediction
            to drug response, and treatment monitoring in oncology.
          </p>
          <button className="bg-[#39FF14] text-black py-2 px-6 rounded">
            Request Demo
          </button>
        </div>
      </div>




      <div className="py-12 px-64">
        <h2 className="text-center text-5xl font-semibold mb-4 text-[#39FF14]">
          Clinical & Pharma Workflows
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 px-4 text-center">
            <img
              src="/images/ClinicalDecisions.png"
              alt="Supporting Clinical Decisions"
              className="w-full h-auto max-h-[500px] object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#39FF14]">
              Supporting Clinical Decisions
            </h3>
            <p className="text-white">
              LivAi serves as a clinical decision-support solution for patients.
              An oncologist/clinical care provider can request a LivAi test
              through radiology to perform a detailed AI-based analysis of a
              tumor. Results are instantaneous. All information is stored and
              can be accessed through our GenAI and private LLM capability. The
              cloud platform is accessible to the clinical care providers,
              radiologists, and patients to access information at any time.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 text-center">
            <img
              src="/images/ClinicalTrials.webp"
              alt="Supporting Clinical Trials"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#39FF14]">
              Supporting Clinical Trials
            </h3>
            <p className="text-white">
              Recruitment of the right patients for the right trials is
              challenging. Following patients through the clinical trial journey
              is difficult due to the lack of availability of reliable
              biomarkers. LivAi dramatically improves both. Our accurate
              image-based biomarkers support clinical trials by patient
              selection and treatment-response assessment. All data is protected
              and presented using GenAI / LLM interfaces.
            </p>
          </div>
        </div>
      </div>




      <div className="py-12 px-64">
        <h2 className="text-center text-5xl font-semibold mb-8 text-[#39FF14]">
          Founding Team
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <img
              src="/images/PallaviTiwari.png"
              alt="Pallavi Tiwari PhD"
              className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform"
            />
            <h3 className="text-xl font-semibold text-[#39FF14]">
              Pallavi Tiwari PhD
            </h3>
            <p className="text-white">
              Founder & President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/MikeGalvin.png"
              alt="Mike Galvin"
              className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform"
            />
            <h3 className="text-xl font-semibold text-[#39FF14]">
              Mike Galvin
            </h3>
            <p className="text-white">
              Co-founder & Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people's lives.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/JimKarkanias.png"
              alt="Jim Karkanias PhD"
              className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-105 transition-transform"
            />
            <h3 className="text-xl font-semibold text-[#39FF14]">
              Jim Karkanias PhD
            </h3>
            <p className="text-white">
              Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the worlds biggest companies.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-black text-white">
        <h2 className="text-center text-3xl font-bold mb-8 text-[#39FF14]">
          Advisors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="text-center">
            <img
              src="/images/DavidSchuster.webp"
              alt="David Schuster"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">David Schuster</p>
          </div>
          <div className="text-center">
            <img
              src="/images/RamyIbrahim.webp"
              alt="Ramy Ibrahim MD"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Ramy Ibrahim MD</p>
          </div>
          <div className="text-center">
            <img
              src="/images/ManmeetAhluwalia.webp"
              alt="Manmeet Ahluwalia MD"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Manmeet Ahluwalia MD</p>
          </div>
          <div className="text-center">
            <img
              src="/images/SarvaChannarajurs.webp"
              alt="Sarva Channarajurs"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Sarva Channarajurs</p>
          </div>
          <div className="text-center">
            <img
              src="/images/GlenTaylor.webp"
              alt="Glen Taylor"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Glen Taylor</p>
          </div>
          <div className="text-center">
            <img
              src="/images/GaryAdey.webp"
              alt="Gary Adey"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Gary Adey</p>
          </div>
          <div className="text-center">
            <img
              src="/images/RebeccaDriscoll.webp"
              alt="Rebecca Driscoll"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Rebecca Driscoll</p>
          </div>
          <div className="text-center">
            <img
              src="/images/JaiKumar.webp"
              alt="Jai Kumar"
              className="w-[200px] h-auto object-cover mx-auto rounded mb-2 hover:scale-105 transition-transform"
            />
            <p className="text-[#39FF14]">Jai Kumar</p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
  <h2 className="text-center text-3xl font-bold mb-4 text-[#39FF14]">
    Our Partners
  </h2>
  <div className="flex justify-center space-x-48">
    <img
      src="/images/nvidialogo.webp"
      alt="NVIDIA logo"
      className="w-[200px] h-auto hover:scale-105 transition-transform"
    />
    <img
      src="/images/UWMlogo.webp"
      alt="University of Wisconsin-Madison logo"
      className="w-[200px] h-auto hover:scale-105 transition-transform"
    />
    <img
      src="/images/HandzinLogo.webp"
      alt="Handzin logo"
      className="w-[200px] h-auto hover:scale-105 transition-transform"
    />
  </div>
</div>



      <div className="py-12 bg-gray-200">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#39FF14]">
          Contact Us
        </h2>
        <div className="bg-white mx-auto w-full md:w-1/2 p-6 text-center rounded shadow">
          <p className="text-lg mb-4">
            For all matters relating to trials & sales.
            <br />
            Please contact us at:
          </p>
          <p className="text-lg text-blue-500">
            <a href="mailto:info@liv.ai">info@liv.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;