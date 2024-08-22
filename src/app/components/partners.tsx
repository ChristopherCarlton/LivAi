import React from 'react';
import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-white fade-in translate-y-4 transition-opacity duration-1000">
      <div className="overflow-hidden px-16">
        <div className="flex justify-start items-center animate-scroll space-x-16 lg:space-x-48 w-[calc(220vw+40rem)]">
          <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/nvidialogo.webp"
              alt="NVIDIA logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://idia.labs.wisc.edu/media-recognition/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/UWMlogo.webp"
              alt="University of Wisconsin-Madison logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.handzin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/HandzinLogo.webp"
              alt="Handzin logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.cancerhelpdesk.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/cancerHelpDesk.png"
              alt="Cancer Help Desk logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/isthmus.png"
              alt="Isthmus logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/glaser.png"
              alt="Glaser logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/aws.png"
              alt="AWS logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          {/* Duplicate logos for seamless looping */}
          <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/nvidialogo.webp"
              alt="NVIDIA logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://idia.labs.wisc.edu/media-recognition/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/UWMlogo.webp"
              alt="University of Wisconsin-Madison logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.handzin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/HandzinLogo.webp"
              alt="Handzin logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://www.cancerhelpdesk.org" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/cancerHelpDesk.png"
              alt="Cancer Help Desk logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/isthmus.png"
              alt="Isthmus logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/glaser.png"
              alt="Glaser logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/aws.png"
              alt="AWS logo"
              width={600}
              height={100}
              className="w-[600px] h-[100px] hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
