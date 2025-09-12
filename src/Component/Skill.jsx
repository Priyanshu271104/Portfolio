import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiCplusplus, SiTailwindcss, SiFlutter, SiSupabase } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-400 text-4xl" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-500 text-4xl" /> },
  ];

  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400">&lt;Skills /&gt;</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (skillsRef.current[i] = el)}
            className="group flex flex-col items-center"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow border border-indigo-500 hover:bg-indigo-500 transition cursor-pointer">
              {skill.icon}
            </div>
            {/* Hidden until hover */}
            <span className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
