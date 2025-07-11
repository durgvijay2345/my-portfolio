import React from "react";

import course from "../../public/course.jpg";

import todo from "../../public/todo.webp";
import weather from "../../public/weather.webp";
import portfolio from "../../public/portfolio.jpg";

function PortFolio() {
  const projects = [
    {
      id: 1,
      logo: course,
      name: "Course Selling Web App",
      desc: "A full-stack MERN application with Razorpay payment integration, admin dashboard, course reviews, and user authentication.",
      userLink: "https://course-selling-app-sage.vercel.app", // User frontend or main repo
      adminLink: "https://course-selling-app-sage.vercel.app/admin", // Admin panel repo if separate
    },
    {
      id: 2,
      logo: todo,
      name: "Todo App",
      desc: "This todo app built using React and Tailwind CSS with add todo delete and reset",
      codeLink: "https://todo-ten-eta-62.vercel.app/",
    },
    {
      id: 3,
      logo: weather,
      name: "Weather App (HTML,CSS,JAVASCRIPT)",
      desc: "Weather app built using React and OpenWeatherMap API to display real-time data with location search.",
      codeLink: "https://durgvijay2345.github.io/weather-app/",
    },
    {
      id: 4,
      logo: portfolio,
      name: "Portfolio Website",
      desc: "My personal portfolio built using React and Tailwind CSS showcasing my skills, education, and projects.",
      codeLink: "my-portfolio-lime-ten-42.vercel.app",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-br from-slate-100 to-slate-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Portfolio</h1>
        <p className="text-green-600 font-semibold text-lg underline">
          Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map(({ id, logo, name, desc, codeLink, userLink, adminLink }) => (
          <div
            key={id}
            className="w-full bg-white border-2 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={logo}
                className="w-[90px] h-[90px] rounded-full border-2"
                alt={name}
              />
              <h2 className="text-xl font-bold mt-4 text-center">{name}</h2>
              <p className="text-gray-600 text-sm mt-2 text-center">{desc}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              {userLink && (
                <a href={userLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                    User Side
                  </button>
                </a>
              )}
              {adminLink && (
                <a href={adminLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
                    Admin Side
                  </button>
                </a>
              )}
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                    Open Link
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
