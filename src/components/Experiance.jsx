import React from "react";

function Experiance() {
  const techStack = [
    { id: 1, logo: "../../public/node.png", name: "Node.js" },
    { id: 2, logo: "../../public/express.png", name: "Express.js" },
    { id: 3, logo: "../../public/prisma.jpg", name: "Prisma ORM" },
    { id: 4, logo: "../../public/postgresql.jpg", name: "PostgreSQL" },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-br from-slate-100 to-slate-200 max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Experience
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          My professional experience working on real-world industry projects and
          building scalable backend systems.
        </p>
      </div>

      {/* Internship Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 hover:shadow-2xl transition duration-300">
        
        {/* Role + Company */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Backend Developer Intern
            </h2>
            <h3 className="text-lg font-semibold text-blue-600">
              Tapitt — Lead Management System
            </h3>
          </div>

          <span className="mt-2 md:mt-0 text-sm font-medium bg-blue-100 text-blue-700 px-4 py-1 rounded-full w-fit">
            Internship
          </span>
        </div>

        {/* Description */}
        <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base space-y-2 mb-8">
          <li>
            Developed a Lead Management System for lead tracking, assignment,
            and status management.
          </li>
          <li>
            Designed and built REST APIs using Node.js and Express.js.
          </li>
          <li>
            Used Prisma ORM with PostgreSQL for efficient database operations.
          </li>
          <li>
            Implemented CRUD APIs, authentication, and scalable backend
            architecture for real-world business workflows.
          </li>
        </ul>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Tech Stack Used
          </h4>

          <div className="flex flex-wrap gap-6">
            {techStack.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center bg-gray-50 border rounded-xl p-4 shadow-sm hover:scale-105 transition duration-300"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-[60px] h-[60px] object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
