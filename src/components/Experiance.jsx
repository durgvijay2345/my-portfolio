import React from "react";

import reactLogo from "../../public/reactjs.png";
import nodeLogo from "../../public/node.png";
import expressLogo from "../../public/express.png";
import mongodbLogo from "../../public/mongodb.jpg";
import tailwindLogo from "../../public/taiwind.webp";
import cloudinaryLogo from "../../public/cloudinary.webp";
import gitLogo from "../../public/git.webp";
import postmanLogo from "../../public/postman.webp";
import htmlLogo from "../../public/html.png";
import cssLogo from "../../public/css.jpg";
import pythonLogo from "../../public/python.png";
import javaLogo from "../../public/java.png";
import jsLogo from "../../public/javascript.png";
import numpyLogo from "../../public/numpy.png";
import pandasLogo from "../../public/pandas.png";
import mlLogo from "../../public/ml.png"; // ya python icon reuse kr skte ho
import nlpLogo from "../../public/nlp.png"; // optional


function Experience() {
  const cardItem = [
  // Programming Languages (VERY IMPORTANT)
  { id: 1, logo: javaLogo, name: "Java" },
  { id: 2, logo: pythonLogo, name: "Python" },
  { id: 3, logo: jsLogo, name: "JavaScript (ES6+)" },

  // Frontend
  { id: 4, logo: htmlLogo, name: "HTML" },
  { id: 5, logo: cssLogo, name: "CSS" },
  { id: 6, logo: tailwindLogo, name: "Tailwind CSS" },
  { id: 7, logo: reactLogo, name: "React.js" },

  // Backend
  { id: 8, logo: nodeLogo, name: "Node.js" },
  { id: 9, logo: expressLogo, name: "Express.js" },
  { id: 10, logo: mongodbLogo, name: "MongoDB" },

  // AI / ML (Game Changer for your resume)
  { id: 11, logo: mlLogo || pythonLogo, name: "Machine Learning" },
  { id: 12, logo: nlpLogo || pythonLogo, name: "Natural Language Processing" },
  { id: 13, logo: numpyLogo || pythonLogo, name: "NumPy" },
  { id: 14, logo: pandasLogo || pythonLogo, name: "Pandas" },

  // Tools
  { id: 15, logo: cloudinaryLogo, name: "Cloudinary" },
  { id: 16, logo: postmanLogo, name: "Postman" },
  { id: 17, logo: gitLogo, name: "Git & GitHub" },
];


  return (
    <div
      name="Experience"
      className="bg-gradient-to-br from-slate-100 to-slate-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
  Skills & Technologies
</h1>

      <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
  I have hands-on experience in Full Stack Development and AI/ML by building real-world projects like a Course Selling Platform, AI Doctor, and Plagiarism Detection System.
</p>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border-2 rounded-2xl p-4 shadow-md hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={logo}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-full"
              alt={name}
            />
            <div className="mt-3 font-medium text-sm sm:text-base">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
