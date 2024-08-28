import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* Founding Team Section */}
      <div className='bg-secondary fade-in opacity-95 transition-opacity duration-1000'>
        <section className="py-4 px-4 md:px-16 lg:px-32 fade-in transition-opacity duration-1000">
          <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Who are we?</h2>
          <div className="bg-gray-800 h-0.5 mb-10"></div>
          <div className="text-center py-4 px-4 md:px-16 lg:px-32">
              <p className="sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mx-auto">
                  We are a group of driven entrepreneurs, scientists, and clinical care providers who are passionate about making a difference in improving treatment management and patient outcomes in oncology. LivAi is built on over 10-years of innovative and proven-research, with a vision to improve treatment management in cancer, as we know it.
              </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/pallavi-tiwari-51aa0531/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/PallaviTiwari.png" alt="Pallavi Tiwari PhD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Pallavi Tiwari PhD</h3>
              <p className="text-center text-sm sm:text-md md:text-lg lg:text-lg text-gray-800 max-w-[400px] mx-auto">
                Founder &amp; President, Dr. Pallavi Tiwari is a leading biomedical researcher and thought leader in Artificial Intelligence for precision medicine. Pallavi&apos;s research serves as the foundation and patents for LivAi. Pallavi was inducted into the National Academy of Inventors in 2023 and has been a recipient of several scientific awards, including being named as one of 100 women achievers by the Government of India for making a positive impact in the field of Science and Innovation.
              </p>
            </div>
            <div className="text-center flex-grow delay-100">
              <a href="https://www.linkedin.com/in/mike-galvin-sf/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/MikeGalvin.png" alt="Mike Galvin" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Mike Galvin</h3>
              <p className="text-center text-sm sm:text-md md:text-lg lg:text-lg text-gray-800 max-w-[400px] mx-auto">
  Mike, Co-founder &amp; Chairman, is a visionary leader with a proven track record in building global network and cloud infrastructure platforms. With expertise across Hyperscalers, Telcos, IT, and Media, Mike has driven innovation and large-scale deployments. He has led global commercial teams and is passionate about using innovation to solve real-world problems. Over the past decade, Mike has focused on healthcare and AI, making a significant impact on people's lives. He is also a Fellow of the Chartered Institute of Marketing.
</p>


            </div>
            <div className="text-center delay-200">
              <a href="https://www.linkedin.com/in/jimkarkanias/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/JimKarkanias.png" alt="Jim Karkanias PhD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Jim Karkanias PhD</h3>
              <p className="text-center text-sm sm:text-md md:text-lg lg:text-lg text-gray-800 max-w-[400px] mx-auto">
                Jim brings over three decades of unparalleled expertise spanning science, technology, and business. With a distinguished career at leading healthcare technology firms, he&apos;s not only shaped strategies but also catalyzed innovation as an entrepreneur. Jim&apos;s illustrious career includes pivotal roles such as CTO at CZ Biohub, leading clinical operations for Merck&apos;s human health division and spearheading Microsoft&apos;s Cloud + Enterprise Division, where he co-founded the renowned MSFT health division.
                {/* Jim brings over three decades of expertise in science, technology, and business. With a distinguished career at top healthcare technology firms, he has shaped strategies and driven innovation as an entrepreneur. Jim’s career includes pivotal roles such as CTO at CZ Biohub, leading Merck's human health division, and co-founding Microsoft's renowned MSFT health division. */}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-8">
            <div className="text-center delay-300">
              <a href="https://www.linkedin.com/in/manmeetsinghahluwalia/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/ManmeetAhluwalia.png" alt="Manmeet Ahluwalia MD" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Manmeet Ahluwalia MD</h3>
              <p className="text-center text-sm sm:text-md md:text-lg lg:text-lg text-gray-800 max-w-[400px] mx-auto">
                Chief Medical Advisor, Manmeet is a world-renowned medical oncologist at Baptist Health Miami Cancer Institute. Specializing in primary brain tumors and brain metastases, his research has resulted in significant advancements in cancer treatment. He has numerous prestigious awards, including the current Most Distinguished Physician Award of AAPI and ASCO Fellowship.
              </p>
            </div>
            <div className="text-center delay-400">
              <a href="https://www.linkedin.com/in/sarvachannarajurs/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/SarvaChannarajurs.jpeg" alt="Sarva Channarajurs" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded-full mb-4 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <h3 className="text-2xl font-semibold text-primary mb-4">Sarva Channarajurs</h3>
              <p className="text-center text-sm sm:text-md md:text-lg lg:text-lg text-gray-800 max-w-[400px] mx-auto">
                Sarva is a technologist with extensive experience leading programs at large companies and startups. Following the loss of her son to pediatric brain cancer, DIPG, Sarva had advised health tech companies building patient centered innovation. She has moderated panels at the White House Cancer Moonshot’s Childhood Cancer Forum. Sarva is President of Mithil Prasad Foundation.
              </p>
            </div>
          </div>
        </section>
        <section className="py-4 px-4 md:px-16 lg:px-32 text-white fade-in transition-opacity duration-1000">
          <h2 className="text-left text-5xl mt-5 mb-10 font-semibold text-primary">Advisors</h2>
          <div className="bg-gray-800 h-0.5 mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
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
                <Image src="/images/GaryAdey.png" alt="Gary Adey" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Gary Adey</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-8">
            <div className="text-center">
              <a href="https://www.linkedin.com/in/rebecca-driscoll-6aa82926/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/RebeccaDriscoll.png" alt="Rebecca Driscoll" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Rebecca Driscoll</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/jaikum/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/JaiKumar.webp" alt="Jai Kumar" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Jai Kumar</p>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/robertbrown/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/RobertBrown.png" alt="Robert Brown" width={200} height={200} className="w-[200px] h-[200px] object-cover mx-auto rounded mb-2 hover:scale-110 transition-transform duration-300 shadow-lg" />
              </a>
              <p className="pt-2 text-sm sm:text-md md:text-lg lg:text-lg text-primary">Robert Brown MD</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;



