import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      let count = { val: 0 };
      gsap.to(count, {
        val: counter.dataset.value,
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        },
        onUpdate: () => {
          counter.textContent = Math.floor(count.val) + "+";
        },
      });
    });
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-12 text-indigo-400">&lt;Achievements /&gt;</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white">
          <h3 className="text-4xl font-bold text-indigo-400">
            <span ref={(el) => (countersRef.current[0] = el)} data-value="300">0</span>
          </h3>
          <p className="text-gray-300 mt-2">LeetCode Problems Solved</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white">
          <h3 className="text-4xl font-bold text-indigo-400">
            <span ref={(el) => (countersRef.current[1] = el)} data-value="5">0</span>
          </h3>
          <p className="text-gray-300 mt-2">⭐ HackerRank (C++, Python, Problem Solving)</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-white">
          <h3 className="text-4xl font-bold text-indigo-400">
            <span ref={(el) => (countersRef.current[2] = el)} data-value="1">0</span>
          </h3>
          <p className="text-gray-300 mt-2">Hackathon Wins</p>
        </div>
      </div>
    </section>
  );
}
