import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* Founding Team Section */}
      {/* bg-gradient-to-br from-secondary to-gray-800 */}
      <div className='bg-secondary fade-in opacity-95 transition-opacity duration-1000'>
        <section className="py-4 px-4 md:px-16 lg:px-32 fade-in transition-opacity duration-1000">
          <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Who are we?</h2>
          <div className="bg-gray-800 h-0.5 mb-10"></div>

          <div className="text-center py-4 px-4 md:px-16 lg:px-32">
        <p className="text-3xl font-medium text-gray-600 pb-8 mx-auto">
            We are a group of driven entrepreneurs, scientists, and clinical care providers who are passionate about making a difference in improving treatment management and patient outcomes in oncology. LivAi is built on over 10-years of innovative and proven-research, with a vision to improve treatment management in cancer, as we know it.
        </p>
    </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/pallavi-tiwari-51aa0531/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/PallaviTiwari.png" alt="Pallavi Tiwari PhD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
              <p className="text-left text-sm sm:text-md md:text-lg lg:text-lg text-gray-600 max-w-[400px] mx-auto">
                Founder &amp; President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
              </p>
            </div>
            <div className="text-center flex-grow delay-100">
              <a href="https://www.linkedin.com/in/mike-galvin-sf/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/MikeGalvin.png" alt="Mike Galvin" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
              <p className="text-left text-sm sm:text-md md:text-lg lg:text-lg text-gray-600 max-w-[400px] mx-auto">
                Co-founder &amp; Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people&apos;s lives.
              </p>
            </div>
            <div className="text-center delay-200">
              <a href="https://www.linkedin.com/in/jimkarkanias/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/JimKarkanias.png" alt="Jim Karkanias PhD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
              <p className="text-left text-sm sm:text-md md:text-lg lg:text-lg text-gray-600 max-w-[400px] mx-auto">
                Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the world&apos;s biggest companies.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-8">
            <div className="text-center delay-300">
              <a href="https://www.linkedin.com/in/manmeetsinghahluwalia/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/ManmeetAhluwalia.png" alt="Manmeet Ahluwalia MD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Manmeet Ahluwalia MD</h3>
              <p className="text-left text-sm sm:text-md md:text-lg lg:text-lg text-gray-600 max-w-[400px] mx-auto">
                Chief Medical Advisor, Manmeet is a world-renowned neuro-oncologist and medical oncologist at Baptist Health Miami Cancer Institute, serving as Chief Scientific Officer, Chief of Medical Oncology, and Deputy Director. Specializing in primary brain tumors and brain metastases, his research has resulted in significant advancements in cancer treatment. He has numerous prestigious awards, including the current Most Distinguished Physician Award of AAPI and ASCO Fellowship.
              </p>
            </div>
            <div className="text-center delay-400">
              <a href="https://www.linkedin.com/in/sarvachannarajurs/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/SarvaChannarajurs.jpeg" alt="Sarva Channarajurs" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Sarva Channarajurs</h3>
              <p className="text-left text-sm sm:text-md md:text-lg lg:text-lg text-gray-600 max-w-[400px] mx-auto">
                Co-founder &amp; Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people&apos;s lives.
              </p>
            </div>
          </div>
        </section>
        <section className="py-4 px-4 md:px-16 lg:px-32 text-white fade-in transition-opacity duration-1000">
          <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Advisors</h2>
          <div className="bg-gray-800 h-0.5 mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/schusterdavid/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/DavidSchuster.jpeg" alt="David Schuster" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">David Schuster</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/ramy-ibrahim-91587515/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/RamyIbrahim.webp" alt="Ramy Ibrahim MD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Ramy Ibrahim MD</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/glen-taylor-a92b9843/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/GlenTaylor.webp" alt="Glen Taylor" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Glen Taylor</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/gary610/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/GaryAdey.webp" alt="Gary Adey" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Gary Adey</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/rebecca-driscoll-6aa82926/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/RebeccaDriscoll.webp" alt="Rebecca Driscoll" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Rebecca Driscoll</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/jaikum/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/JaiKumar.webp" alt="Jai Kumar" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Jai Kumar</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;



