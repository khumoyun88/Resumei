"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function About() {
  const [info, setInfo] = useState([]);

  const handleClick = (section) => {
    const sectionData = {
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Tailwind",
        "daisyUI",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Redux Toolkit",
        "Next.js",
      ],
      education: [
        "Fullstack Academy of Code",
        "I am still studying at Najot Ta'lim"
    ],
      certification: [
        "Empty"
    ],
    };

    setInfo(sectionData[section] || []);
  };

  return (
    <div>
      <section id="about">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 p-4">
          <div className="col-span-3">
            <Image src="/image.jpg" alt="flower" width={600} height={600} />
          </div>
          <div className="col-span-3">
            <h1 className="text-2xl text-white font-bold mb-4">About me</h1>
            <p className="text-lg text-white ">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <br />
            <br />
            <div>
              <button
                className="text-white hover:underline hover:decoration-indigo-500 mr-4"
                onClick={() => handleClick("skills")}
              >
                Skills
              </button>
              <button
                className="text-white hover:underline hover:decoration-indigo-500 mr-4"
                onClick={() => handleClick("education")}
              >
                Education
              </button>
              <button
                className="text-white hover:underline hover:decoration-indigo-500 mr-4"
                onClick={() => handleClick("certification")}
              >
                Certification
              </button>
              <div className="mt-4 text-white">
                <ul>
                  {info.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
