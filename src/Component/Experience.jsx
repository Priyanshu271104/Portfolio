import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 }, // alternate left/right
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-950 text-white px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
        &lt;Experience /&gt;
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>

        {/* Experience 1 (Right side) */}
        <div className="timeline-item mb-12 flex justify-start">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-5/12 ml-auto border-l-4 border-indigo-400">
            <h3 className="text-xl font-semibold text-indigo-300">
              Application Developer Intern
            </h3>
            <p className="text-gray-400">
              Irfan’s Study Circle | 06/2025 – Present
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2 text-sm">
              <li>Developing a   <span className="text-indigo-400">mobile-only Tuition Center App</span> with <span className="text-teal-400">Admin, Teacher & Student dashboards.</span></li>
              <li>Implemented <span className="text-indigo-400">Supabase authentication & role-based</span> <span className="text-teal-400">access control for each user type.</span></li>

              <li>Built teacher <span className="text-indigo-400">notes upload system</span> with <span className="text-teal-400">class- and subject-specific restrictions.</span></li>

              <li>Integrated <span className="text-indigo-400">Supabase Storage</span> for <span className="text-teal-400">secure file handling</span> & future features like <span className="text-teal-400">results tracking.</span></li>

            </ul>
          </div>
        </div>

        {/* Example Future Experience (Left side) */}

      </div>
    </section>
  );
}
