import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animate title & subtitle
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(subtitleRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );

    // Typewriter effect with blinking cursor
    const text = "Full Stack Developer | CSE Student | Problem Solver";
    let i = 0;
    const cursor = "|";
    const interval = setInterval(() => {
      if (subtitleRef.current) {
        subtitleRef.current.textContent = text.slice(0, i++) + cursor;
      }
      if (i > text.length) {
        clearInterval(interval);
        // Keep blinking cursor after typing
        let visible = true;
        setInterval(() => {
          if (subtitleRef.current) {
            subtitleRef.current.textContent = text + (visible ? cursor : " ");
            visible = !visible;
          }
        }, 500);
      }
    }, 50);

  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-r from-indigo-900 via-gray-900 to-indigo-950
                 text-white text-center px-6 relative overflow-hidden"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
      >
        Hi, I’m <span className="text-indigo-400">Priyanshu Uniyal</span>
      </h1>
      <p ref={subtitleRef} className="text-lg md:text-2xl text-gray-300 h-8"></p>
      <div className="mt-8 flex gap-6">
        <a href="https://github.com/Priyanshu271104" className="px-4 py-2 bg-gray-800 rounded hover:bg-indigo-500 transition flex items-center gap-2">
          💻 GitHub
        </a>
        <a href="https://linkedin.com/in/priyanshuuniyal" className="px-4 py-2 bg-gray-800 rounded hover:bg-indigo-500 transition flex items-center gap-2">
          🔗 LinkedIn
        </a>
        <a href="https://leetcode.com/u/Priyanshu2711/" className="px-4 py-2 bg-gray-800 rounded hover:bg-indigo-500 transition flex items-center gap-2">
          🏆 LeetCode
        </a>
      </div>

      {/* Animated background circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-700 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 opacity-20 animate-ping"></div>
    </section>
  );
}
