import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* Founding Team Section */}
      <section className="py-12 px-4 md:px-64 bg-gradient-to-br from-secondary to-gray-800 fade-in opacity-95 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Founding Team</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <a href="https://www.linkedin.com/in/pallavi-tiwari-51aa0531/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/PallaviTiwari.png"
                alt="Pallavi Tiwari PhD"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Founder &amp; President, Pallavi is a lead AI in Healthcare Researcher and Biomedical Engineer. Over the past 15 years, she has developed the foundation and patents for LivAi. Pallavi is a keynote and TEDX speaker with a growing reputation as a leader in her field.
            </p>
          </div>
          <div className="text-center flex-grow delay-100">
            <a href="https://www.linkedin.com/in/mike-galvin-sf/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/MikeGalvin.png"
                alt="Mike Galvin"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Co-founder &amp; Chairman, Mike has a history building global network and cloud infrastructure platforms. He has spent the last ten years working in healthcare and AI looking to solve problems that make a meaningful difference in people&apos;s lives.
            </p>
          </div>
          <div className="text-center delay-200">
            <a href="https://www.linkedin.com/in/jimkarkanias/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/JimKarkanias.png"
                alt="Jim Karkanias PhD"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-400 max-w-[400px] mx-auto">
              Chief Technology Officer, Jim has a long and distinguished career working in healthcare and life sciences specifically on ML/AI. He has founded teams for some of the world&apos;s biggest companies.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-12 px-4 md:px-64 bg-secondary text-white fade-in opacity-95 translate-y-4 transition-opacity duration-1000">
        <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Advisors</h2>
        <div className="bg-white h-0.5 mb-10"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="text-center">
            <a href="https://www.linkedin.com/in/schusterdavid/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/DavidSchuster.webp"
                alt="David Schuster"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">David Schuster</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/ramy-ibrahim-91587515/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/RamyIbrahim.webp"
                alt="Ramy Ibrahim MD"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Ramy Ibrahim MD</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/manmeetsinghahluwalia/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/ManmeetAhluwalia.webp"
                alt="Manmeet Ahluwalia MD"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Manmeet Ahluwalia MD</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/sarvachannarajurs/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/SarvaChannarajurs.webp"
                alt="Sarva Channarajurs"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Sarva Channarajurs</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/glen-taylor-a92b9843/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/GlenTaylor.webp"
                alt="Glen Taylor"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Glen Taylor</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/gary610/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/GaryAdey.webp"
                alt="Gary Adey"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Gary Adey</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/rebecca-driscoll-6aa82926/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/RebeccaDriscoll.webp"
                alt="Rebecca Driscoll"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Rebecca Driscoll</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/in/jaikum/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/JaiKumar.webp"
                alt="Jai Kumar"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </a>
            <p className="pt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Jai Kumar</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
