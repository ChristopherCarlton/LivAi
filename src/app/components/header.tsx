"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type HeaderProps = {
  activeTab: "Home" | "About" | "News" | "Products";
};

function Header({ activeTab }: HeaderProps) {
  const navItems = ["Home", "About", "News", "Products"];
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
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      }`}
      style={{ height: isScrolled ? "80px" : "120px" }}
    >
      <div className="px-6 flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          <a href="/" className="h-full">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className={`h-full object-contain transition-opacity ${
                isScrolled
                  ? "duration-700 opacity-100 delay-300"
                  : "duration-0 opacity-0"
              }`}
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-14 h-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-lg lg:text-xl hover:text-[#00BFFF] transition-colors ${
                activeTab === item
                  ? isScrolled
                    ? "text-black border-b-2 border-[#00BFFF]"
                    : "text-[#00BFFF] border-b-2 border-[#00BFFF]"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
          <div className="ml-14"></div>
          <a
            href="/connect"
            className={`text-lg lg:text-xl px-6 py-1 rounded-full transition-colors ${
              isScrolled
                ? "bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                : "bg-transparent border border-white text-white hover:bg-white hover:text-[#00BFFF]"
            }`}
          >
            Request a Meeting
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`text-3xl ${isScrolled ? "text-black" : "text-white"}`}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-[80px] left-0 w-full ${isScrolled ? "bg-white" : "bg-[#424242]"} shadow-lg transition-all duration-700`}>
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-lg transition-colors ${
                  isScrolled
                    ? "text-black hover:text-[#00BFFF]"
                    : "text-white hover:text-[#00BFFF]"
                }`}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="/connect"
              className={`text-lg px-6 py-2 rounded-full transition-colors ${
                isScrolled
                  ? "bg-transparent border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white"
                  : "bg-transparent border border-white text-white hover:bg-white hover:text-[#00BFFF]"
              }`}
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




















// "use client";
// import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// type HeaderProps = {
//   activeTab: "Home" | "About" | "News" | "Products";
// };

// function Header({ activeTab }: HeaderProps) {
//   const navItems = ["Home", "About", "News", "Products"];
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? "bg-[#424242] shadow-lg" : "bg-transparent"
//       }`}
//       style={{ height: isScrolled ? "80px" : "120px" }}
//     >
//       <div className="px-6 flex items-center justify-between h-full">
//         <div className="flex items-center h-full"></div>
//         <nav className="hidden md:flex items-center space-x-14 h-full">
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className={`text-white text-lg lg:text-xl hover:text-[#4caf50] transition-colors ${
//                 activeTab === item
//                   ? "text-[#4caf50] border-b-2 border-[#4caf50]"
//                   : ""
//               }`}
//             >
//               {item}
//             </a>
//           ))}
//           <div className="ml-14"></div>
//           <a
//             href="/connect"
//             className="bg-transparent border border-[#4caf50] text-[#4caf50] text-lg lg:text-xl px-6 py-1 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors"
//           >
//             Request a Meeting
//           </a>
//         </nav>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white text-3xl">
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#424242] shadow-lg transition-all duration-500">
//           <nav className="flex flex-col items-center space-y-4 py-4">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className={`text-white text-lg hover:text-[#4caf50] transition-colors ${
//                   activeTab === item
//                     ? "text-[#4caf50] border-b-2 border-[#4caf50]"
//                     : ""
//                 }`}
//                 onClick={toggleMenu}
//               >
//                 {item}
//               </a>
//             ))}
//             <a
//               href="/connect"
//               className="bg-transparent border border-[#4caf50] text-[#4caf50] text-lg px-6 py-2 rounded-full hover:bg-[#4caf50] hover:text-white transition-colors"
//               onClick={toggleMenu}
//             >
//               Request a Meeting
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
