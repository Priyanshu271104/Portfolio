import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".project-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.3,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">&lt;Projects /&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        
        <div className="project-card bg-gray-800 shadow-lg p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-indigo-300">Weather App</h3>
          <p className="text-gray-400 mt-2">Responsive app with OpenWeatherMap API.</p>
          <a href="https://priyanshu271104.github.io/PRODIGY_WD_04/" className="text-indigo-400 hover:underline">Live Demo</a>
        </div>

        <div className="project-card bg-gray-800 shadow-lg p-6 rounded-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-indigo-300">Irfan’s Study Circle</h3>
          <p className="text-gray-400 mt-2">Modern responsive website for an educational startup.</p>
          <a href="https://www.irfansstudycircle.com/" className="text-indigo-400 hover:underline">Visit</a>
        </div>

      </div>
    </section>
  );
}
