import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-white/70 via-green-100/50 to-white/70 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={pic} alt="logo" className="h-12 w-12 rounded-full object-cover" />
          <div>
            <h1 className="font-bold text-xl text-gray-800">
              Durgvijay<span className="text-green-500 text-2xl">l</span>
            </h1>
            <p className="text-sm text-gray-600 -mt-1">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map(({ id, text }) => (
            <li key={id} className="hover:text-green-500 transition-all duration-200 cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-600 font-semibold"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer text-gray-700" onClick={() => setMenu(!menu)}>
          {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl font-semibold z-40">
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenu(false)}
              className="text-gray-800 hover:text-green-500 transition-all"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
