"use client";
import React, { useEffect, useState } from "react";

type HeaderProps = {
  activeTab: "Home" | "About" | "News" | "Careers" | "Products" | "Connect";
};

function Header({ activeTab }: HeaderProps) {
  const navItems = ["Home", "About", "News", "Careers", "Products", "Connect"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#424242] py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="px-6 flex items-center justify-between transition-all duration-500">
        <div className="flex items-center ml-16">
          <img
            src="/images/logo.webp"
            alt="Picture Health logo showing a stylized 'ph' in green"
            className={`transform transition-transform duration-500 ${
              isScrolled
                ? "scale-150 h-32 md:h-[12rem] lg:h-[12rem]"
                : "scale-150 h-32 md:h-[12rem] lg:h-[12rem]"
            }`}
          />
        </div>
        <nav className="hidden md:flex items-center space-x-14">
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
      </div>
    </header>
  );
}

export default Header;
