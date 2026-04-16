import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    const text = "Flutter Developer | Real-Time Systems | Scalable App Builder";
    let i = 0;
    const cursor = "|";

    const typingInterval = setInterval(() => {
      if (subtitleRef.current) {
        subtitleRef.current.textContent = text.slice(0, i++) + cursor;
      }

      if (i > text.length) {
        clearInterval(typingInterval);

        let visible = true;
        const blinkInterval = setInterval(() => {
          if (subtitleRef.current) {
            subtitleRef.current.textContent = text + (visible ? cursor : " ");
            visible = !visible;
          }
        }, 500);

        return () => clearInterval(blinkInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center 
                 bg-linear-to-r from-indigo-900 via-gray-900 to-indigo-950
                 text-white text-center px-6 relative overflow-hidden"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
      >
        Hi, I’m <span className="text-indigo-400">Priyanshu Uniyal</span>
      </h1>

      <p
        ref={subtitleRef}
        className="text-lg md:text-2xl text-gray-300 min-h-8"
      ></p>

      <p className="mt-4 text-gray-400 max-w-xl">
        Built and deployed real-world applications with 100+ users in 48 hours,
        reducing backend workload by 40% and storage usage by 60%.
      </p>

      <div className="mt-8 flex gap-6 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
        >
          🚀 View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-indigo-500 transition"
        >
          📩 Contact Me
        </a>
      </div>

      <div className="mt-6 flex gap-6 justify-center text-gray-400 text-sm">
        <a href="https://github.com/Priyanshu271104" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/priyanshuuniyal" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://leetcode.com/u/Priyanshu2711/" target="_blank" rel="noopener noreferrer">
          LeetCode
        </a>
      </div>

      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-700 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 opacity-20 animate-ping"></div>
    </section>
  );
}