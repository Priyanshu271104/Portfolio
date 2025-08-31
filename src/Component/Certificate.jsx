export default function Certificates() {
  const certificates = [
    { title: "Problem Solving (Basic)", link: "https://www.hackerrank.com/certificates/b08fd2582384" },
    { title: "Problem Solving (Intermediate)", link: "https://www.hackerrank.com/certificates/594d478a9dbd" },
    { title: "SQL (Basic)", link: "https://www.hackerrank.com/certificates/15d813b41cc9" },
    { title: "SQL (Intermediate)", link: "https://www.hackerrank.com/certificates/f43bde5c6efa" },
    { title: "Python (Basic)", link: "https://www.hackerrank.com/certificates/6ce1df327c8f" }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-indigo-400">&lt;Certificates /&gt;</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-indigo-500 hover:text-white transition block"
          >
            {cert.title}
          </a>
        ))}
      </div>
    </section>
  );
}
