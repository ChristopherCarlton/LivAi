import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#424242] text-white py-32">
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between items-center">
        <div className="text-center">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Connect
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a href="/">
            <img
              src="/images/logo.webp"
              alt="Building Healthier America"
              className="scale-150 h-48 w-48 mb-4 mx-auto"
            />
          </a>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

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
