import React from "react";

function About() {
  return (
    <div
      name="About"
      className="bg-gradient-to-br from-slate-100 to-slate-300 max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            About Me
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hello, I'm{" "}
            <span className="font-semibold text-green-600">Durgvijay</span>, a
            passionate Web Developer focused on building dynamic, responsive,
            and scalable applications using the{" "}
            <span className="font-semibold text-blue-600">MERN Stack</span>. As
            a BTech student with a strong IT foundation, I strive to create
            impactful and visually compelling software solutions that leave a
            lasting impression.
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 border-b-2 pb-1 w-fit">
            Education & Training
          </h2>
          <ul className="list-disc pl-6 md:pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">
                Bachelor of Technology (BTech)
              </span>{" "}
              in Computer Science and Engineering — Harcourt Butler Technical
              University, Kanpur (2023–2026)
            </li>
            <li>
              <span className="font-medium">
                160 Days Complete Coding Challenge
              </span>{" "}
              – GeeksforGeeks (2025)
            </li>
            <li>Full-Stack Web Development (MERN Stack)</li>
            <li>
              Complete Java Programming and Data Structures & Algorithms with
              Java
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 border-b-2 pb-1 w-fit">
            Skills & Expertise
          </h2>
          <ul className="list-disc pl-6 md:pl-8 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Languages:</span> Java, JavaScript,
              HTML, C, Python,  <span className="text-blue-700 font-semibold">SQL</span>
            </li>
            <li>
              <span className="font-medium">Frameworks & Libraries:</span>{" "}
              React.js, Node.js, Express.js
            </li>
            <li>
              <span className="font-medium">Database:</span> MongoDB
            </li>
            <li>
              <span className="font-medium">Tools & Platforms:</span> Git,
              GitHub, Postman, Vercel, Render
            </li>
            <li>
              <span className="font-medium">Other Skills:</span> REST APIs,
              Responsive Design, Problem Solving, Team Collaboration
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 border-b-2 pb-1 w-fit">
            Achievements & Awards
          </h2>
          <ul className="list-disc pl-6 md:pl-8 text-gray-700 space-y-2">
            <li>
              Completed{" "}
              <span className="font-medium">400+ DSA Problems</span> on
              platforms like GeeksforGeeks, LeetCode, Coding Ninjas
            </li>
            <li>
              <span className="font-medium">
                160 Days Coding Challenge Certificate
              </span>{" "}
              – GeeksforGeeks (2025)
            </li>
            <li>
              Consistent Learner with multiple certifications from Coursera,
              Udemy, and other platforms
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 border-b-2 pb-1 w-fit">
            Mission Statement
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            My mission is to leverage my technical skills and creativity to
            build impactful web applications and contribute to meaningful
            digital experiences. I aim to grow as a full-stack developer, take
            on real-world challenges, and continuously learn and improve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
