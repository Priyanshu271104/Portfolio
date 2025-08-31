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
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
<section id="projects" ref={sectionRef} className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        <div className="project-card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p>Responsive app with OpenWeatherMap API.</p>
          <a href="https://priyanshu271104.github.io/PRODIGY_WD_04/" target="_blank" className="text-blue-500">Live Demo</a>
        </div>
        <div className="project-card bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Irfan's Study Circle Website</h3>
          <p>Modern responsive website for an educational startup.</p>
          <a href="https://www.irfansstudycircle.com/" target="_blank" className="text-blue-500">Visit</a>
        </div>
      </div>
    </section>
  );
}
