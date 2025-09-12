import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["hero", "about", "projects", "skills", "experience", "achievements", "certificates", "contact"];

  return (
    <nav className="fixed w-full bg-gray-950 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-400 cursor-pointer">Priyanshu</h1>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth={true}
              duration={500}
              spy={true}        // tracks active section
              offset={-80}      // adjust if navbar height overlaps
              className="text-gray-300 hover:text-indigo-400 cursor-pointer transition"
              activeClass="text-indigo-400 font-semibold"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-indigo-400 text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-950 flex flex-col gap-4 py-4 px-6 transition-all duration-300">
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
        </div>
      )}
    </nav>
  );
}
