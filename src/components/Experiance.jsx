import React from "react";
import nodeLogo from "../../public/node.png";
import expressLogo from "../../public/express.png";
import prismaLogo from "../../public/prisma.png"; // add this image in public
import postgresLogo from "../../public/postgresql.png"; // add this image in public

function Experience() {
  const techStack = [
    { id: 1, logo: nodeLogo, name: "Node.js" },
    { id: 2, logo: expressLogo, name: "Express.js" },
    { id: 3, logo: prismaLogo, name: "Prisma ORM" },
    { id: 4, logo: postgresLogo, name: "PostgreSQL" },
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
        
        {/* Company + Role */}
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
            Developed a Lead Management System to handle lead tracking,
            assignment, and status updates.
          </li>
          <li>
            Built scalable REST APIs using Node.js and Express.js for efficient
            data handling.
          </li>
          <li>
            Integrated PostgreSQL database with Prisma ORM for optimized query
            performance and structured data management.
          </li>
          <li>
            Implemented CRUD operations, authentication logic, and backend
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

export default Experience;
