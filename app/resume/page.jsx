"use client";
import { useState } from "react";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <section className="flex flex-col md:flex-row p-6 text-white gap-10 h-auto">
      {/* LEFT SIDE - Buttons */}
      <div className="flex flex-row md:flex-col gap-4 md:w-1/4 w-full justify-around md:justify-start">
        <button
          onClick={() => {
            // delay 300ms before switching section
            setTimeout(() => setActiveSection("about"), 300);
          }}
          className={`px-4 py-3 rounded text-left transition-all duration-300 cursor-pointer
  ${
    activeSection === "about"
      ? "bg-accent text-black"
      : "bg-gray-700 hover:bg-white hover:text-black"
  }`}
        >
          About Me
        </button>

        <button
          onClick={() => setTimeout(() => setActiveSection("education"), 300)}
          className={`px-4 py-3 rounded text-left transition-all duration-300 cursor-pointer
  ${
    activeSection === "education"
      ? "bg-accent text-black"
      : "bg-gray-700 hover:bg-white hover:text-black"
  }`}
        >
          Education
        </button>

        <button
          onClick={() => setTimeout(() => setActiveSection("skills"), 300)}
          className={`px-4 py-3 rounded text-left transition-all duration-300 cursor-pointer
  ${
    activeSection === "skills"
      ? "bg-accent text-black"
      : "bg-gray-700 hover:bg-white hover:text-black"
  }`}
        >
          Skills
        </button>
      </div>

      {/* RIGHT SIDE - Content */}
      <div className="w-full md:w-3/4 bg-gray-800 p-2 rounded-lg mt-4 md:mt-0">
        {activeSection === "about" && (
          <div>
            <h2 className="text-4xl font-bold mb-6 mt-5 ml-6">About Me</h2>
            <p className="ml-6">
              I am Eshan Harshana, a motivated, disciplined, and responsible
              Information Technology undergraduate at SLIIT. I enjoy learning
              new technologies, taking on challenges, and continuously improving
              myself both personally and professionally. I remain calm and
              focused under pressure and always strive to deliver my best in
              every responsibility entrusted to me.
            </p>

            <p className="mt-6 ml-6">
              I am passionate about software development and problem-solving. I
              enjoy transforming ideas into practical digital solutions and
              building systems that are efficient, scalable, and user-friendly.
            </p>

            <p className="mt-6 ml-6">
              From a technical perspective, I have experience in both web and
              mobile application development. I have worked with technologies
              such as HTML, CSS, Java, JavaScript, React, Next.js, Node.js,
              Express, PHP, Spring Boot, .NET, MongoDB, SQL, Clerk, Neon, AWS,
              and Kotlin. I am comfortable building full-stack applications,
              implementing CRUD operations, authentication systems, and working
              with REST APIs. I also have hands-on experience with tools such as
              Git, Firebase, VS Code, IntelliJ IDEA, and Android Studio. I focus
              on writing clean, maintainable code and continuously expanding my
              technical expertise.
            </p>
          </div>
        )}

        {activeSection === "education" && (
          <div>
            <h2 className="text-4xl font-bold mb-8 mt-5 ml-6">Education</h2>

            {/* Dharmasoka College 2021(2022) */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold">
                Dharmasoka College, Ambalangoda
              </h3>
              <p className="text-gray-400 mt-1">
                Physical Science Stream – 2021(2022)
              </p>
              <p className="text-gray-300 mt-2">
                Grades: Combined Mathematics (C), Chemistry (C), Physics (S)
              </p>
            </div>

            {/* Dharmasoka College 2022(2023) */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold">
                Dharmasoka College, Ambalangoda
              </h3>
              <p className="text-gray-400 mt-1">
                Physical Science Stream – 2022(2023)
              </p>
              <p className="text-gray-300 mt-2">
                Grades: Combined Mathematics (C), Chemistry (B), Physics (S)
              </p>
            </div>

            <div className="space-y-6">
              {/* University */}
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold">
                  BSc (Hons) in Information Technology (SLIIT)
                </h3>
                <p className="text-gray-400 mt-1">May 2023 – Present</p>
                <p className="text-gray-300 mt-2">
                  Specializing in Information Technology
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div>
            <h2 className="text-4xl font-bold mb-6 ml-6 mt-5">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Java",
                "React",
                "Node.js",
                "Express",
                "Kotlin",
                "Next.js",
                "Spring Boot",
                ".NET",
                "MongoDB",
                "SQL",
                "Clerk",
                "Neon",
                "AWS",
                "Git",
                "Firebase",
                "VS Code",
                "IntelliJ IDEA",
                "Android Studio",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center p-4 bg-gray-700 rounded-lg hover:bg-accent transition cursor-pointer"
                >
                  <span className="text-white font-semibold text-center ">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
