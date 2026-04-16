import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "hero",
    "about",
    "projects",
    "skills",
    "experience",
    "achievements",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed w-full bg-gray-950/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* 🔥 Clickable Logo */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold text-indigo-400 cursor-pointer hover:scale-105 transition"
        >
          Priyanshu Uniyal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="text-gray-300 hover:text-indigo-400 cursor-pointer transition"
              activeClass="text-indigo-400 font-semibold border-b-2 border-indigo-400"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          ))}

          {/* 🚀 Resume Button (HIGH IMPACT) */}
          <a
            href="/resume.pdf" // replace with your resume file
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-indigo-400 text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 flex flex-col gap-4 py-4 px-6">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-indigo-400 cursor-pointer transition"
              activeClass="text-indigo-400 font-semibold"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          ))}

          {/* Resume in mobile */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-indigo-600 rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}