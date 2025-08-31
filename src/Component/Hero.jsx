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
    }, []);

    return (
        <section
            id="hero"
            className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-r from-indigo-900 via-gray-900 to-indigo-950
                 text-white text-center px-6"
        >
            <h1
                ref={titleRef}
                className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
            >
                Hi, I’m <span className="text-indigo-400">Priyanshu Uniyal</span>
            </h1>
            <p ref={subtitleRef} className="text-lg md:text-2xl text-gray-300">
                Full Stack Developer | CSE Student | Problem Solver
            </p>
            <div className="mt-8 flex gap-6">
                <a href="https://github.com/Priyanshu271104" className="hover:text-indigo-400 transition">GitHub</a>
                <a href="https://linkedin.com/in/priyanshuuniyal" className="hover:text-indigo-400 transition">LinkedIn</a>
                <a href="https://leetcode.com/u/Priyanshu2711/" className="hover:text-indigo-400 transition">LeetCode</a>
            </div>
        </section>
    );
}
