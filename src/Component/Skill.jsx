import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Skills() {
  const skills = ["React", "Node.js", "Express.js", "MongoDB", "SQL", "Python", "C++", "TailwindCSS", "GSAP"];
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400">&lt;Skills /&gt;</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            ref={(el) => (skillsRef.current[i] = el)}
            className="px-4 py-2 bg-gray-800 rounded-lg shadow text-indigo-300 border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
