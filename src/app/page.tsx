"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Enews from "./components/enews";

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

      <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000">
        <div className="w-full h-[1100px] bg-cover bg-center">
          <video
            src="/images/movie.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-7xl text-white font-chunkfive mt-8">
            AI-Powered Cancer <br /> Diagnostics Using Medical <br /> Imaging
          </h1>
        </div>
      </section>

      {/* MRAI Platform Section */}
      <section className="py-24 px-4 md:px-64 bg-gradient-to-br from-black to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/brain.webp"
            alt="AI-driven medical imaging platform"
            width={600}
            height={400}
            className="w-full md:w-1/2 h-auto mb-8 md:mb-0 rounded-lg"
          />
          <div className="text-center md:w-1/2 Left">
            <h2 className="text-6xl font-chunkfive mb-4 text-primary">Our MRAI Platform</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-gray-400">
              LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.
            </p>
            <button className="bg-primary text-secondary py-2 px-6 rounded shadow-lg hover:bg-accent transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Clinical & Pharma Workflows Section */}
      <section className="py-12 px-4 md:px-64 bg-gradient-to-r from-secondary via-gray-800 to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center">
            <div className="flex-grow">
              <Image
                src="/images/ClinicalDecisions.png"
                alt="Supporting Clinical Decisions"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Decisions</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400">
              LivAi serves as a clinical decision-support solution for patients. An oncologist/clinical care provider can request a LivAi test through radiology to perform a detailed AI-based analysis of a tumor. Results are instantaneous. All information is stored and can be accessed through our GenAI and private LLM capability. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center delay-100">
            <div className="flex-grow">
              <Image
                src="/images/ClinicalTrials.webp"
                alt="Supporting Clinical Trials"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Trials</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400">
              Recruitment of the right patients for the right trials is challenging. Following patients through the clinical trial journey is difficult due to the lack of availability of reliable biomarkers. LivAi dramatically improves both. Our accurate image-based biomarkers support clinical trials by patient selection and treatment-response assessment. All data is protected and presented using GenAI / LLM interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-12 px-4 md:px-64 bg-gradient-to-br from-secondary to-gray-800 fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Founding Team</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <Image
              src="/images/PallaviTiwari.png"
              alt="Pallavi Tiwari PhD"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Founder &amp; President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
            </p>
          </div>
          <div className="text-center flex-grow delay-100">
            <Image
              src="/images/MikeGalvin.png"
              alt="Mike Galvin"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Co-founder &amp; Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people&apos;s lives.
            </p>
          </div>
          <div className="text-center delay-200">
            <Image
              src="/images/JimKarkanias.png"
              alt="Jim Karkanias PhD"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the world&apos;s biggest companies.
            </p>
          </div>
        </div>
      </section>

      <Enews/>

      {/* Advisors Section */}
      <section className="py-12 px-4 md:px-64 bg-secondary text-white fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Advisors</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="text-center">
            <Image
              src="/images/DavidSchuster.webp"
              alt="David Schuster"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">David Schuster</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/RamyIbrahim.webp"
              alt="Ramy Ibrahim MD"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Ramy Ibrahim MD</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/ManmeetAhluwalia.webp"
              alt="Manmeet Ahluwalia MD"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Manmeet Ahluwalia MD</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/SarvaChannarajurs.webp"
              alt="Sarva Channarajurs"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Sarva Channarajurs</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/GlenTaylor.webp"
              alt="Glen Taylor"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Glen Taylor</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/GaryAdey.webp"
              alt="Gary Adey"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Gary Adey</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/RebeccaDriscoll.webp"
              alt="Rebecca Driscoll"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Rebecca Driscoll</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/JaiKumar.webp"
              alt="Jai Kumar"
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Jai Kumar</p>
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






// "use client";
// import React, { useEffect } from "react";
// import Enews from "./components/enews";

// function MainComponent() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.fade-in');
//       const windowHeight = window.innerHeight;
//       elements.forEach((element) => {
//         const positionFromTop = element.getBoundingClientRect().top;
//         if (positionFromTop - windowHeight <= 0) {
//           element.classList.add('opacity-95', 'translate-y-0');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Trigger once on mount

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-secondary text-primary op">


//       <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000">
//         <div className="w-full h-[1100px] bg-cover bg-center">
//           <video
//             src="/images/movie.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           ></video>
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-7xl text-white font-chunkfive mt-8">
//             AI-Powered Cancer <br /> Diagnostics Using Medical <br /> Imaging
//           </h1>
//           {/* <div className="bg-white w-3/4 h-0.5 mt-10"></div> */}
//         </div>
//       </section>

//       {/* MRAI Platform Section */}
//       <section className="py-24 px-4 md:px-64 bg-gradient-to-br from-black to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
//         <div className="flex flex-col md:flex-row items-center">
//           <img src="/images/brain.webp" alt="AI-driven medical imaging platform" className="w-full md:w-1/2 h-auto mb-8 md:mb-0 rounded-lg" />
//           <div className="text-center md:w-1/2 Left">
//             <h2 className="text-6xl font-chunkfive mb-4 text-primary">Our MRAI Platform</h2>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-gray-400">
//               LivAi provides a suite of cloud-based artificial intelligence (AI)-driven software solutions focused on providing improved analysis and deep insights towards diagnosis, prognosis, prediction to drug response, and treatment monitoring in oncology.
//             </p>
//             <button className="bg-primary text-secondary py-2 px-6 rounded shadow-lg hover:bg-accent transition-colors duration-300">
//               Request Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Clinical & Pharma Workflows Section */}
//       <section className="py-12 px-4 md:px-64 bg-gradient-to-r from-secondary via-gray-800 to-secondary fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
//         <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Clinical & Pharma Workflows</h2>
//         <div className="bg-white h-0.5 mb-10"></div>
//         <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
//           <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center">
//             <div className="flex-grow">
//               <img src="/images/ClinicalDecisions.png" alt="Supporting Clinical Decisions" className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
//             </div>
//             <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Decisions</h3>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400">
//               LivAi serves as a clinical decision-support solution for patients. An oncologist/clinical care provider can request a LivAi test through radiology to perform a detailed AI-based analysis of a tumor. Results are instantaneous. All information is stored and can be accessed through our GenAI and private LLM capability. The cloud platform is accessible to the clinical care providers, radiologists, and patients to access information at any time.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 px-4 text-center flex flex-col items-center delay-100">
//             <div className="flex-grow">
//               <img src="/images/ClinicalTrials.webp" alt="Supporting Clinical Trials" className="w-full h-[300px] object-cover mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
//             </div>
//             <h3 className="text-2xl font-semibold text-primary mb-4">Supporting Clinical Trials</h3>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400">
//               Recruitment of the right patients for the right trials is challenging. Following patients through the clinical trial journey is difficult due to the lack of availability of reliable biomarkers. LivAi dramatically improves both. Our accurate image-based biomarkers support clinical trials by patient selection and treatment-response assessment. All data is protected and presented using GenAI / LLM interfaces.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Founding Team Section */}
//       <section className="py-12 px-4 md:px-64 bg-gradient-to-br from-secondary to-gray-800 fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
//         <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Founding Team</h2>
//         <div className="bg-white h-0.5 mb-10"></div>
//         <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
//           <div className="text-center">
//             <img src="/images/PallaviTiwari.png" alt="Pallavi Tiwari PhD" className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
//               Founder & President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
//             </p>
//           </div>
//           <div className="text-center flex-grow delay-100">
//             <img src="/images/MikeGalvin.png" alt="Mike Galvin" className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
//               Co-founder & Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people's lives.
//             </p>
//           </div>
//           <div className="text-center delay-200">
//             <img src="/images/JimKarkanias.png" alt="Jim Karkanias PhD" className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
//               Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the world's biggest companies.
//             </p>
//           </div>
//         </div>
//       </section>


//        {/* Hero Section with Parallax Effect
//        <section className="relative overflow-hidden fade-in opacity-0 transition-opacity duration-1000">
//         <div className="parallax-bg w-full h-[1100px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/TitleImage.webp")' }}></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-7xl text-white font-chunkfive mt-64">
//             AI-Powered Cancer <br /> Diagnostics Using Medical <br /> Imaging
//           </h1>
//           <div className="bg-white w-3/4 h-0.5 mt-10"></div>
//         </div>
//       </section> */}

//       <Enews/>


//       {/* Advisors Section */}
//       <section className="py-12 px-4 md:px-64 bg-secondary text-white fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
//         <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Advisors</h2>
//         <div className="bg-white h-0.5 mb-10"></div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
//           <div className="text-center">
//             <img src="/images/DavidSchuster.webp" alt="David Schuster" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">David Schuster</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/RamyIbrahim.webp" alt="Ramy Ibrahim MD" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Ramy Ibrahim MD</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/ManmeetAhluwalia.webp" alt="Manmeet Ahluwalia MD" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Manmeet Ahluwalia MD</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/SarvaChannarajurs.webp" alt="Sarva Channarajurs" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Sarva Channarajurs</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/GlenTaylor.webp" alt="Glen Taylor" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Glen Taylor</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/GaryAdey.webp" alt="Gary Adey" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Gary Adey</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/RebeccaDriscoll.webp" alt="Rebecca Driscoll" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Rebecca Driscoll</p>
//           </div>
//           <div className="text-center">
//             <img src="/images/JaiKumar.webp" alt="Jai Kumar" className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
//             <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Jai Kumar</p>
//           </div>
//         </div>
//       </section>

//      {/* Partners Section */}
//       <section className="py-12 bg-white fade-in opacity-0 translate-y-4 transition-opacity duration-1000">
//         <h2 className="text-center text-lg sm:text-xl md:text-4xl lg:text-4xl font-bold mb-8 text-gray-700">Our Partners</h2>
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 lg:space-x-48">
//           <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer">
//             <img src="/images/nvidialogo.webp" alt="NVIDIA logo" className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg" />
//           </a>
//           <a href="https://www.wisc.edu" target="_blank" rel="noopener noreferrer">
//             <img src="/images/UWMlogo.webp" alt="University of Wisconsin-Madison logo" className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg" />
//           </a>
//           <a href="https://www.handzin.com" target="_blank" rel="noopener noreferrer">
//             <img src="/images/HandzinLogo.webp" alt="Handzin logo" className="w-[150px] md:w-[200px] h-auto hover:scale-110 transition-transform duration-300 shadow-lg" />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default MainComponent;
