"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

type HeaderProps = {
  activeTab: "Home" | "About" | "News" | "Careers" | "Products" | "Connect";
};

function Header({ activeTab }: HeaderProps) {
  const navItems = ["Home", "About", "News", "Careers", "Products", "Connect"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#424242] shadow-lg" : "bg-transparent"
      }`}
      style={{ height: isScrolled ? '80px' : '120px' }}
    >
      <div className="px-6 flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <Image
            src="/images/logo.webp"
            alt="Picture Health logo showing a stylized 'ph' in green"
            width={192}
            height={192}
            className={`transform transition-transform duration-500 ${
              isScrolled
                ? "scale-150 h-32 md:h-[12rem] lg:h-[12rem]"
                : "scale-150 h-32 md:h-[12rem] lg:h-[12rem]"
            }`}
          />
        </div>
        <nav className="hidden md:flex items-center space-x-14 h-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`text-white text-lg lg:text-xl hover:text-[#4caf50] transition-colors ${
                activeTab === item
                  ? "text-[#4caf50] border-b-2 border-[#4caf50]"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
          <div className="ml-14"></div>
          <button className="bg-transparent border border-[#4caf50] text-[#4caf50] text-lg lg:text-xl px-6 py-1 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors">
            Request a Meeting
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#424242] shadow-lg transition-all duration-500">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`text-white text-lg hover:text-[#4caf50] transition-colors ${
                  activeTab === item
                    ? "text-[#4caf50] border-b-2 border-[#4caf50]"
                    : ""
                }`}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <button className="bg-transparent border border-[#4caf50] text-[#4caf50] text-lg px-6 py-2 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors">
              Request a Meeting
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
