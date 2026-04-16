import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  const experiences = [
  {
    title: "Application Developer Intern",
    company: "Irfan’s Study Circle",
    date: "06/2025 – 11/2025",
    points: [
      "Built and delivered a production-ready LMS mobile application with Admin, Teacher, and Student dashboards",
      "Designed and implemented RBAC-based authentication, enabling secure multi-user access",
      "Developed real-time features including notes distribution, announcements, and student-specific content delivery",
      "Reduced manual operations by automating workflows such as results tracking, fee management, and ID generation",
      "Optimized UI performance using Flutter + Riverpod, ensuring a scalable and responsive user experience"
    ]
  },
  {
  title: "Web Development Intern",
  company: "Irfan’s Study Circle",
  date: "09/2024 – 11/2024",
  points: [
    "Designed and deployed a responsive website to showcase courses and enrollment workflows",
    "Improved institute’s digital presence, increasing student engagement by ~30%",
    "Ensured cross-device compatibility using modern frontend practices (HTML, CSS, JavaScript)",
    "Delivered the project within strict timelines in a real client environment"
  ]
}
];

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: { trigger: item, start: "top 80%" }
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-950 text-white px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-indigo-400">&lt;Experience /&gt;</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
  My experience building real-world applications in production environments
</p>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`timeline-item mb-12 flex md:items-center relative ${
  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
}`}
          >
            {/* Dot marker */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-indigo-400 w-4 h-4 rounded-full border-4 border-gray-950 z-10"></div>

            {/* Card */}
            <div
              className={`
                bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-400
                w-full md:w-5/12
                ${idx % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"}
              `}
            >
              <h3 className="text-xl font-semibold text-indigo-300">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
  {exp.company} • {exp.date}
</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
