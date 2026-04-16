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
      title: "SecurePass — Password Generator",
      desc: "Built a secure and user-friendly password generator with real-time strength analysis, improving usability and security awareness through dynamic validation and modern UI.",
      link: "https://password-generator-priyanshu.vercel.app"
    },
    {
      title: "Personal Portfolio Website",
      desc: "Designed and developed a high-performance portfolio using React, TailwindCSS, and GSAP, improving recruiter engagement through smooth animations and optimized UI.",
      link: "https://priyanshuuniyal-portfolio.vercel.app"
    },
    {
      title: "Weather App",
      desc: "Developed a responsive weather application using real-time API integration, enabling users to fetch accurate global weather data instantly.",
      link: "https://priyanshu271104.github.io/Weather-App/"
    },
    {
      title: "EduTech LMS App",
      desc: "Built a role-based mobile application with authentication, content management, and student-specific access, streamlining operations for educational workflows.",
      link: "https://play.google.com/store/apps/details?id=com.irfan.studycircle"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-950 text-white">
      
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
        &lt;Projects /&gt;
      </h2>

      {/* 🔥 FEATURED PROJECT */}
      <div className="mb-16 max-w-5xl mx-auto bg-gradient-to-r from-indigo-800 to-gray-900 p-8 rounded-xl shadow-xl">

        <h3 className="text-2xl font-bold text-indigo-300 mb-4">
          🚀 EduTech LMS Platform (Production App)
        </h3>

        <p className="text-gray-300 mb-6">
          A cross-platform learning management system built with Flutter & Firebase,
          designed for real-time operations, multi-role access, and secure content delivery.
        </p>

        {/* 📸 SCREENSHOT PLACEHOLDER */}
        <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-6 border border-dashed border-gray-600">
          <span className="text-gray-500 text-sm">
            📸 Screenshot / Demo Preview (Add later)
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-gray-400 mb-6">
          <ul className="space-y-2">
            <li>⚡ 100+ users onboarded within 48 hours</li>
            <li>📉 Reduced backend workload by 40%</li>
            <li>💾 Reduced storage usage by 60%</li>
          </ul>

          <ul className="space-y-2">
            <li>🔐 RBAC (Admin / Teacher / Student)</li>
            <li>🔄 Event-driven architecture (Firebase)</li>
            <li>📊 Real-time analytics dashboard</li>
          </ul>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.irfan.studycircle"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
        >
          📱 View on Play Store
        </a>
      </div>

      {/* 📦 OTHER PROJECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
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
                className="text-indigo-400 mt-3 underline block"
              >
                Visit
              </a>
            ) : (
              <p className="text-yellow-400 mt-3 font-semibold">
                🚧 Private / In Progress
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}