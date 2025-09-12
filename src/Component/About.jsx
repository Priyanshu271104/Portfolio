export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center">&lt;About Me /&gt;</h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/000000?v=4" // replace with your photo
            alt="Priyanshu Uniyal"
            className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
          />
        </div>

        {/* About Content */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hi 👋 I’m <span className="text-indigo-400 font-bold">Priyanshu Uniyal</span>, a passionate
            <span className="text-teal-400 font-semibold"> Full Stack Developer</span> and CSE student.  
            I love building modern web & mobile applications and solving real-world problems with code.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>B.Tech CSE @ KCC ITM</li>
            <li>Strong in Web Development, App Development, and Problem Solving</li>
            <li>Hackathon Winner 🏆 | 5⭐ HackerRank | 290+ LeetCode Problems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
