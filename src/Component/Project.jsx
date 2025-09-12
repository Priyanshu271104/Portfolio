import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "Responsive portfolio built with React, TailwindCSS, and GSAP. Showcases projects, skills, and achievements with smooth animations.",
      link: "https://priyanshuuniyal-portfolio.vercel.app"
    },
    {
      title: "Irfan’s Study Circle App",
      desc: "Mobile-only Tuition Center App with Supabase authentication, role-based access, notes upload, and planned modules for results and fees.",
      link: null // not live yet
    },
    {
      title: "Irfan’s Study Circle Website",
      desc: "Modern responsive website for an educational startup, highlighting services, resources, and enrollment options.",
      link: "https://www.irfansstudycircle.com/"
    },
    {
      title: "Weather App",
      desc: "Responsive web app providing real-time weather data worldwide using OpenWeatherMap API.",
      link: "https://priyanshu271104.github.io/PRODIGY_WD_04/"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">&lt;Projects /&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card bg-gray-800 shadow-lg p-6 rounded-lg hover:scale-105 hover:bg-indigo-500 hover:text-white transition"
          >
            <h3 className="text-xl font-semibold text-indigo-300">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 mt-2 underline block"
              >
                Visit
              </a>
            ) : (
              <p className="text-yellow-400 mt-2 font-semibold">🚧 Still Developing</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
