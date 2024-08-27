import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TextAppearOnce from './textAppearOnce';

const Footer = () => {
  return (
      <footer className="relative bg-white text-black py-16">
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between items-center">
        
        {/* Contact Information */}
        <div className="text-center">
          <p className="text-lg">
            For all matters relating to trials & sales.
            <br />
            Please contact us at:
          </p>
          <a href="mailto:info@liv.ai" className="block mt-2 text-primary hover:underline">
            info@livai.ai
          </a>
        </div>

        {/* Logo and Social Icons */}
        <div className="text-center">
          <a href="/">
            <Image
              // src="/images/logo1.png"
              src="/images/logo2.png"
              alt="LivAI Logo"
              width={292} // Set the width (adjust as needed)
              height={292} // Set the height (adjust as needed)
              className="scale-150 mb-4 mx-auto"
            />
          </a>
          {/* Text Animation */}
          <TextAppearOnce />
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-black">Stay in touch</h3>
          <p className="mb-4 text-black">Updates directly to your inbox</p>
          <form className="space-y-4">
           <input
              type="email"
              placeholder="Email"
              className="w-full md:w-auto px-4 py-2 border border-black rounded bg-transparent text-black md:px-16"
            />
            <div className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-primary focus:ring-2 focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="subscribe" className="text-black">
                Opt in to receive news and updates.
              </label>
            </div>
            <button className="px-6 py-2 rounded-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Stay Updated
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
