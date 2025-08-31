import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-950 text-white text-center px-6"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold mb-4 text-teal-400"
      >
        Hi, I&apos;m Priyanshu Uniyal
      </h1>
      <p className="text-lg md:text-2xl text-gray-300">
        B.Tech CSE Student | Full Stack Developer | Problem Solver
      </p>
      <div className="mt-8 flex gap-6">
        <a
          href="https://github.com/Priyanshu271104"
          target="_blank"
          className="hover:text-teal-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/priyanshuuniyal"
          target="_blank"
          className="hover:text-teal-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/Priyanshu2711/"
          target="_blank"
          className="hover:text-teal-400 transition"
        >
          LeetCode
        </a>
      </div>
    </section>
  );
}
