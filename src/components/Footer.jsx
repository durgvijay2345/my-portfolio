import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo or Brand */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">Durgvijay Portfolio</h2>
              <p className="text-gray-400 text-sm mt-1">
                Built with ❤️ using React and Tailwind CSS
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/1JoJVnasWk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://x.com/tiwari_shu9154?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/tiwaridurgvijay?igsh=cDg1cGgzdWhuanph"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/durgvijay-tiwari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Durgvijay. All rights reserved.</p>
            <p className="mt-1">
              Supportive Partner ❤️ <span className="text-white font-semibold">Shubham</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
