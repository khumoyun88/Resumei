"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-black text-white p-4 border border-slate-100 mb-10 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-bold">LOGO</h1>
        <button
          className="block lg:hidden px-3 py-2 text-white border border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute top-16 right-0 bg-gray-800 lg:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          } lg:translate-x-0 lg:opacity-100 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className={`absolute top-4 right-4 lg:hidden px-3 py-2 text-white ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li>
              <Link
                className="block py-2 px-4 hover:bg-gray-700 rounded"
                href="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 hover:bg-gray-700 rounded"
                href="#project"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-4 hover:bg-gray-700 rounded"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
