import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-white text-black py-32">
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between items-center">
        
        {/* Contact Information */}
        <div className="text-center">
          <p className="text-lg">
            For all matters relating to trials & sales.
            <br />
            Please contact us at:
          </p>
          <a href="mailto:info@liv.ai" className="block mt-2 text-[#D69985] hover:underline">
            info@livai.ai
          </a>
        </div>

        {/* Logo and Social Icons */}
        <div className="text-center">
          <a href="/">
            <Image
              src="/images/logo.webp"
              alt="LivAI Logo"
              width={192} // Set the width (adjust as needed)
              height={192} // Set the height (adjust as needed)
              className="scale-150 mb-4 mx-auto"
            />
          </a>
          {/* <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile">
              <FaTwitter size={32} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
              <FaInstagram size={32} />
            </a>
          </div> */}
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Stay in touch</h3>
          <p className="mb-4 text-gray-300">Updates directly to your inbox</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent text-white"
            />
            <div className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-primary focus:ring-2 focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="subscribe" className="text-gray-300">
                Opt in to receive news and updates.
              </label>
            </div>
            <button className="px-6 py-2 rounded-full bg-transparent border border-[#D69985] text-[#D69985] hover:bg-[#D69985] hover:text-white transition-colors">
              Stay Updated
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
