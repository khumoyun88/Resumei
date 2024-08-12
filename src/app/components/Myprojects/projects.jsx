"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

function Projects() {
  const [images, setImages] = useState([]);

  const data = {
    all: [
      {
        id: 1,
        img: "/travel-journey.png",
        link: "https://travel-journey-two.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/travel-journey.git",
      },
      {
        id: 2,
        img: "/project-1.png",
        link: "https://exam-7-1.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/exam-7.git",
      },
      {
        id: 3,
        img: "/todo.png",
        link: "https://todo-typescipt.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/Todo-Typescipt.git",
      },
      {
        id: 4,
        img: "/calculator1.png",
        link: "https://calculator-psi-coral.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/calculator.git",
      },
    ],
    web: [
      {
        id: 2,
        img: "/project-1.png",
        link: "https://exam-7-1.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/exam-7.git",
      },
      {
        id: 1,
        img: "/travel-journey.png",
        link: "https://travel-journey-two.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/travel-journey.git",
      },
    ],
    mobile: [
      {
        id: 4,
        img: "/calculator1.png",
        link: "https://calculator-psi-coral.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/calculator.git",
      },
      {
        id: 3,
        img: "/todo.png",
        link: "https://todo-typescipt.vercel.app/",
        githubLink: "https://github.com/javohiryusupov77/Todo-Typescipt.git",
      },
    ],
  };

  const handleClick = (category) => {
    setImages(data[category]);
  };

  return (
    <section id="project">
      <div className="p-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            className="py-2 px-4 text-white bg-blue-500 border border-blue-600 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onClick={() => handleClick("all")}
          >
            All
          </button>
          <button
            className="py-2 px-4 text-white bg-gray-700 border border-gray-800 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            onClick={() => handleClick("web")}
          >
            Web
          </button>
          <button
            className="py-2 px-4 text-white bg-green-500 border border-green-600 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            onClick={() => handleClick("mobile")}
          >
            Mobile
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((project) => (
            <div key={project.id} className="relative group">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  width={200}
                  height={200}
                  src={project.img}
                  alt={`Project ${project.id}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black bg-opacity-50 rounded-lg">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <FaEye size={24} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white mx-2"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
