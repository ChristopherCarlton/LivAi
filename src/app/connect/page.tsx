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

      <main className="flex flex-col bg-transparent rounded-lg overflow-hidden mt-6 w-full max-w-[600px]">
        <div className="p-8 bg-black bg-opacity-50 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 font-roboto text-[#FFFFFF] text-center">Get in Touch</h2>
          <p className="mb-4 font-crimson-text text-[#FFFFFF] text-center">We’re here to answer your questions and provide the support you need. Fill out the form below, and one of our AI Medical Imaging experts will respond as soon as possible.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#FFFFFF]" htmlFor="name">Name</label>
              <input className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" type="text" id="name" name="name"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#FFFFFF]" htmlFor="email">Email</label>
              <input className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" type="email" id="email" name="email"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 font-roboto text-[#FFFFFF]" htmlFor="message">Message</label>
              <textarea className="w-full p-2 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]" id="message" name="message" rows={4}></textarea>
            </div>
            <button className="w-full bg-[#4682B4] text-[#FFFFFF] py-2 rounded-md font-roboto hover:scale-105 transition-transform duration-300" type="submit">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:scale-110 transition-transform duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:scale-110 transition-transform duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] hover:scale-110 transition-transform duration-300">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Connect;
