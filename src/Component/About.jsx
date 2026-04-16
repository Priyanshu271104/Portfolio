import profilePic from "../assets/PIC.png";
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">
        &lt;About Me /&gt;
      </h2>

      {/* ✅ Intro Line (FIXED POSITION) */}
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        A quick snapshot of who I am and how I build impactful software
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start items-center gap-10">
        
        {/* Profile Image */}
        <div className="shrink-0">
          <img
  src={profilePic}
  alt="Priyanshu Uniyal"
  className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover hover:scale-105 transition duration-300"
  onError={(e) => {
  e.target.src = "https://via.placeholder.com/150";
}}
/>
        </div>

        {/* About Content */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
          <p className="text-gray-300 5 leading-relaxed">
            Hi 👋 I’m{" "}
            <span className="text-indigo-400 font-bold">Priyanshu Uniyal</span>, a
            <span className="text-teal-400 font-semibold">
              {" "}Flutter-focused Developer
            </span>{" "}
            building real-time, scalable applications used by actual users.
          </p>

          <p className="text-gray-400 mb-5 leading-relaxed">
            I specialize in designing systems — not just interfaces. From
            multi-role architectures (RBAC) to event-driven backends, I focus on
            performance, scalability, and security.
          </p>

          <p className="text-gray-400 mb-5 leading-relaxed">
            My work has onboarded 100+ users within 48 hours, reduced backend
            workload by 40%, and optimized storage usage by 60% through
            performance-driven system design.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>B.Tech CSE @ KCC Institute of Technology</li>
            <li>Specialized in Flutter, Firebase & Real-Time Systems</li>
            <li>Hackathon Winner 🏆 | 5⭐ HackerRank | 350+ DSA Problems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}