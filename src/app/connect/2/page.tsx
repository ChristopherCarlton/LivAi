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
    <div className="min-h-screen bg-gradient-to-r from-secondary via-gray-800 to-secondary fade-in opacity-0 transition-opacity duration-1000 text-primary flex flex-col items-center justify-center p-4">
      <header className="w-full bg-gradient-to-r from-secondary to-gray-800 text-white py-4 flex justify-center">
        <h1 className="text-3xl font-roboto">Contact Us</h1>
      </header>

      <main className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mt-6 w-full max-w-[1000px]">
        <div className="p-8 w-full md:w-1/2 bg-gradient-to-t from-black to-secondary opacity-75">
          <h2 className="text-2xl font-semibold mb-4 font-roboto text-primary">Get in Touch</h2>
          <p className="mb-4 font-crimson-text text-primary">We’re here to answer your questions and provide the support you need. Fill out the form below, and one of our AI Medical Imaging experts will respond as soon as possible.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-primary" htmlFor="name">Name</label>
              <input className="w-full p-2 border border-gray-300 rounded-md" type="text" id="name" name="name"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-primary" htmlFor="email">Email</label>
              <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" name="email"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-primary" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-md" id="message" name="message" rows={4}></textarea>
            </div>
            <button className="w-full bg-primary text-secondary py-2 rounded-md font-roboto hover:scale-105 transition-transform duration-300" type="submit">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition-transform duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition-transform duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:scale-110 transition-transform duration-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div className="p-8 w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-t from-black to-secondary opacity-75">
          <h3 className="text-2xl font-semibold mb-4 font-roboto text-primary">Visit Us</h3>
          <p className="mb-4 font-crimson-text text-primary text-center">We’re located in the Ferry Building, San Francisco. Drop by our office for a more personal interaction and experience the heart of the city.</p>
          <div className="w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.866107099871!2d-122.3967142!3d37.7962341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816d22c6096f%3A0xaefa1b7aa25af649!2sShack15!5e0!3m2!1sen!2sus!4v1603414988603!5m2!1sen!2sus"
    width="100%"
    height="250"
    allowFullScreen
    aria-hidden="false"
    tabIndex={0}
    className="rounded-md"
  ></iframe>
</div>


          <p className="mt-4 text-sm text-gray-400 text-center">Our doors are always open for you.</p>
        </div>
      </main>
    </div>
  );
}

export default Connect;
