import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-teal-400">Priyanshu Uniyal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="hover:text-teal-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-teal-400 transition"
                  onClick={() => setIsOpen(false)} // close menu when link clicked
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
