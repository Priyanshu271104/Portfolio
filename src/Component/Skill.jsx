import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiTailwindcss,
  SiFlutter,
  SiSupabase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-sky-400 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500 text-4xl" /> },
      ],
    },
    {
      title: "Database & Languages",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">&lt;Skills /&gt;</h2>

      {/* 🔥 Intro line */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Technologies and tools I use to build scalable, high-performance applications
      </p>

      <div className="max-w-5xl mx-auto space-y-12">
        {skillGroups.map((group, gi) => (
          <div key={gi}>
            <h3 className="text-xl font-semibold text-indigo-300 mb-6">
              {group.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {group.skills.map((skill, i) => (
                <div
                  key={i}
                  ref={(el) => el && (skillsRef.current.push(el))}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow border border-indigo-500 hover:bg-indigo-500 transition">
                    {skill.icon}
                  </div>
                  <span className="mt-2 text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}