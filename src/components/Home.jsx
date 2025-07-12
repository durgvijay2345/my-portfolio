import React from "react";
import pic from "../../public/profile.jpg";

import { FaSquareFacebook, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub} from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="bg-gradient-to-br from-slate-100 to-slate-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <span className="text-lg md:text-xl text-gray-600">Welcome to My Portfolio</span>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-2xl md:text-4xl font-semibold text-gray-800">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>

            <p className="text-sm md:text-base text-gray-700 text-justify leading-relaxed">
              I'm a passionate full-stack web developer focused on building modern, scalable,
              and efficient applications using the MERN stack. I love turning ideas into interactive digital experiences.
            </p>

            {/* Social Media & Tech Stack */}
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Social Icons */}
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-800">Available on</h1>
                <ul className="flex justify-center md:justify-start space-x-5 text-gray-700">
                  <li>
                    <a href="https://www.facebook.com/share/1JoJVnasWk/" target="_blank" rel="noreferrer">
                      <FaSquareFacebook className="text-2xl hover:text-blue-600 transition-colors duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/durgvijay-tiwari" target="_blank" rel="noreferrer">
                      <FaLinkedin className="text-2xl hover:text-blue-500 transition-colors duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@shubhamtiwari2533-b4d?si=tFV39Mz-2tlt7oV6" target="_blank" rel="noreferrer">
                      <IoLogoYoutube className="text-2xl hover:text-red-600 transition-colors duration-200" />
                    </a>
                  </li>
                <li>
  <a href="https://github.com/durgvijay2345" target="_blank" rel="noreferrer">
    <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-200" />
  </a>
</li>

                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h1 className="font-bold text-center text-gray-800">Currently Working On</h1>
                <div className="flex justify-center md:justify-start space-x-4 text-green-700">
                  <SiMongodb className="text-3xl hover:scale-110 transition-transform duration-200" />
                  <SiExpress className="text-3xl hover:scale-110 transition-transform duration-200" />
                  <FaReact className="text-3xl hover:scale-110 transition-transform duration-200" />
                  <FaNodeJs className="text-3xl hover:scale-110 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={pic}
              alt="Profile"
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-xl border-4 border-green-400"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />
    </>
  );
}

export default Home;
