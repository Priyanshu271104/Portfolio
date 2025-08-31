export default function Skills() {
  const skills = [
  "Python", "C++", "JavaScript", "SQL",
  "HTML/CSS", "React", "Node.js", "Express.js",
  "MongoDB", "Supabase", "Git", "Google Cloud",
  "Pandas", "NumPy", "Matplotlib"
];


  return (
    <section id="skills" className="py-20 bg-gray-950 text-center text-white">
      <h2 className="text-3xl font-bold mb-10 text-teal-400">&lt;Skills /&gt;</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-gray-800 rounded-lg shadow text-teal-300 border border-teal-500 hover:bg-teal-500 hover:text-white transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
