import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/photo.avif" alt="logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
          <div>
            <h1 className="font-bold text-lg md:text-xl text-gray-800">
              Durgvija<span className="text-red-500 text-xl md:text-2xl">Y</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-600 -mt-1">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-green-500 transition-all"
                activeClass="text-green-600 font-semibold"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50 cursor-pointer text-gray-800" onClick={() => setIsOpen(true)}>
          <AiOutlineMenu size={28} />
        </div>
      </div>

      {/* Right Sidebar Menu */}
      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-red-800">Menu</h2>
          <IoCloseSharp
            size={24}
            className="cursor-pointer text-gray-700"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col mt-8 space-y-6 pl-6 text-indigo-600 font-semibold text-lg">
          {navItems.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-green-500 transition-all"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
