"use client";
import React from "react";

type HeaderProps = {
  activeTab: "Home" | "About" | "News" | "Careers" | "Products" | "Connect";
};

function Header({ activeTab }: HeaderProps) {
  const navItems = ["Home", "About", "News", "Careers", "Products", "Connect"];

  return (
    <header className="bg-[#0f2f1e] py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Picture Health logo showing a stylized 'ph' in green"
          className="h-8 w-8 mr-2"
        />
        <span className="text-[#4caf50] text-xl font-semibold font-sans">
          Picture Health
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className={`text-white hover:text-[#4caf50] transition-colors ${
              activeTab === item
                ? "text-[#4caf50] border-b-2 border-[#4caf50]"
                : ""
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
      <button className="bg-transparent border border-[#4caf50] text-[#4caf50] px-4 py-2 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors">
        Request a Meeting
      </button>
    </header>
  );
}

export default Header;
