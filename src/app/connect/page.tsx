"use client";
import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Connect() {
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
    <div
      className="min-h-screen bg-cover bg-center text-primary flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: 'url("/images/shack15.jpg")' }}
    >
      {/* <header className="w-full bg-opacity-75 text-white py-4 flex justify-center bg-gradient-to-r from-[#696969] to-[#2F4F4F]">
        <h1 className="text-3xl font-roboto">Contact Us</h1>
      </header> */}

      <main className="flex flex-col bg-transparent rounded-lg overflow-hidden mt-6 w-full max-w-[600px]">
        <div className="p-8 bg-black bg-opacity-50 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 font-roboto text-[#F5DEB3] text-center">Get in Touch</h2>
          <p className="mb-4 font-crimson-text text-[#F5DEB3] text-center">We’re here to answer your questions and provide the support you need. Fill out the form below, and one of our AI Medical Imaging experts will respond as soon as possible.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#F5DEB3]" htmlFor="name">Name</label>
              <input className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" type="text" id="name" name="name"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#F5DEB3]" htmlFor="email">Email</label>
              <input className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" type="email" id="email" name="email"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#F5DEB3]" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" id="message" name="message" rows={4}></textarea>
            </div>
            <button className="w-full bg-[#4682B4] text-[#F5DEB3] py-2 rounded-md font-roboto hover:scale-105 transition-transform duration-300" type="submit">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#F5DEB3] hover:scale-110 transition-transform duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F5DEB3] hover:scale-110 transition-transform duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#F5DEB3] hover:scale-110 transition-transform duration-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Connect;






// "use client";
// import React, { useEffect } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// function Connect() {
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
//     <div
//       className="min-h-screen bg-cover bg-center text-primary flex flex-col items-center justify-center p-4"
//       style={{ backgroundImage: 'url("/images/shack15.jpg")' }}
//     >
//       <header className="w-full bg-gradient-to-r from-[#696969] to-[#2F4F4F] text-white py-4 flex justify-center bg-opacity-75">
//         <h1 className="text-3xl font-roboto">Contact Us</h1>
//       </header>

//       <main className="flex flex-col md:flex-row bg-[#F5DEB3] bg-opacity-90 shadow-lg rounded-lg overflow-hidden mt-6 w-full max-w-[1000px]">
//         <div className="p-8 w-full md:w-1/2 bg-gradient-to-t from-[#696969] to-[#2F4F4F] bg-opacity-70">
//           <h2 className="text-2xl font-semibold mb-4 font-roboto text-[#2F4F4F]">Get in Touch</h2>
//           <p className="mb-4 font-crimson-text text-[#2F4F4F]">We’re here to answer your questions and provide the support you need. Fill out the form below, and one of our AI Medical Imaging experts will respond as soon as possible.</p>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-bold mb-1 font-roboto text-[#2F4F4F]" htmlFor="name">Name</label>
//               <input className="w-full p-2 border border-[#4682B4] rounded-md bg-white bg-opacity-70 text-[#2F4F4F]" type="text" id="name" name="name"/>
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-1 font-roboto text-[#2F4F4F]" htmlFor="email">Email</label>
//               <input className="w-full p-2 border border-[#4682B4] rounded-md bg-white bg-opacity-70 text-[#2F4F4F]" type="email" id="email" name="email"/>
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-1 font-roboto text-[#2F4F4F]" htmlFor="message">Message</label>
//               <textarea className="w-full p-2 border border-[#4682B4] rounded-md bg-white bg-opacity-70 text-[#2F4F4F]" id="message" name="message" rows={4}></textarea>
//             </div>
//             <button className="w-full bg-[#4682B4] text-[#F5DEB3] py-2 rounded-md font-roboto hover:scale-105 transition-transform duration-300" type="submit">Send Message</button>
//           </form>
//           <div className="mt-8 flex justify-center space-x-4">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] hover:scale-110 transition-transform duration-300">
//               <FaFacebook size={30} />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] hover:scale-110 transition-transform duration-300">
//               <FaTwitter size={30} />
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2F4F4F] hover:scale-110 transition-transform duration-300">
//               <FaLinkedin size={30} />
//             </a>
//           </div>
//         </div>
//         <div className="p-8 w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-t from-[#696969] to-[#2F4F4F] bg-opacity-70">
//           <h3 className="text-2xl font-semibold mb-4 font-roboto text-[#F5DEB3]">Visit Us</h3>
//           <p className="mb-4 font-crimson-text text-[#F5DEB3] text-center">We’re located in the Ferry Building, San Francisco. Drop by our office for a more personal interaction and experience the heart of the city.</p>
//           <div className="w-full">
//             <iframe
//               src="https://www.google.com/maps/place/Ferry+Building/@37.796234,-122.3990102,17z/data=!3m1!5s0x80858066b5ce8885:0x6466737455f48376!4m14!1m7!3m6!1s0x8085816d22c6096f:0xaefa1b7aa25af649!2sShack15!8m2!3d37.7962299!4d-122.3941393!16s%2Fg%2F11g0j9bzgd!3m5!1s0x808580668e8f3159:0x6cf7a313d6a53ec7!8m2!3d37.7954425!4d-122.3936136!16zL20vMDV2dnds?hl=en&entry=ttu"
//               width="100%"
//               height="250"
//               allowFullScreen
//               aria-hidden="false"
//               tabIndex={0}
//               className="rounded-md"
//             ></iframe>
//           </div>
//           <p className="mt-4 text-sm text-[#F5DEB3] text-center">Our doors are always open for you.</p>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Connect;
