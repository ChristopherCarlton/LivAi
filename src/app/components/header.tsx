"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Header() {
  const navItems = ["Home", "About", "Media", "Products"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // No initial active tab set
  const router = useRouter();

  // Set active tab based on current URL path
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/about")) setActiveTab("About");
    else if (path.includes("/media")) setActiveTab("Media");
    else if (path.includes("/products")) setActiveTab("Products");
    else setActiveTab("Home"); // Default to "Home" if no match
  }, []); // Empty dependency array ensures this runs only on initial load

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Update active tab on click
    setIsMenuOpen(false); // Close the mobile menu after clicking a tab
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (item: string) => {
    if (item === "Home") {
      router.push("/");
    } else if (item === "About" || item === "Media") {
      if (window.location.pathname === "/") {
        handleScrollToSection(item.toLowerCase());
      } else {
        router.push(`/#${item.toLowerCase()}`);
      }
    } else {
      router.push(`/${item.toLowerCase()}`);
    }
  };

  return (
    <header
      className="sticky top-0 w-full z-50 text-white shadow-lg transition-all duration-700"
      style={{
        height: "80px",
        background: "linear-gradient(90deg, #7E57C2 0%, rgba(83,115,188,1) 50%, #7E57C2 100%)", // Updated gradient with new color
      }}
    >
      <div className="px-6 flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <a href="/" className="h-full" onClick={() => handleTabClick("Home")}>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-full object-contain transition-opacity duration-700 opacity-100"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-14 h-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item);
              }}
              className={`text-lg lg:text-xl hover:text-[#00BFFF] transition-colors ${
                activeTab === item ? "text-white border-b-2 border-[#00BFFF]" : ""
              }`}
            >
              {item}
            </a>
          ))}
          <div className="ml-14"></div>
          <a
            href="/connect"
            className="text-lg lg:text-xl px-6 py-1 rounded-full transition-colors bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
          >
            Request a Meeting
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-white">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#1A3677] shadow-lg transition-all duration-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg text-white hover:text-[#00BFFF] transition-colors"
                onClick={() => handleTabClick(item)} // Update active tab on click
              >
                {item}
              </a>
            ))}
            <a
              href="/connect"
              className="text-lg px-6 py-2 rounded-full transition-colors bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
              onClick={toggleMenu}
            >
              Request a Meeting
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
