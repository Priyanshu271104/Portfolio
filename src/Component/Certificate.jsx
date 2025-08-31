export default function Certificates() {
  const certificates = [
    { title: "Problem Solving (Basic)", link: "https://www.hackerrank.com/certificates/b08fd2582384" },
    { title: "Problem Solving (Intermediate)", link: "https://www.hackerrank.com/certificates/594d478a9dbd" },
    { title: "SQL (Basic)", link: "https://www.hackerrank.com/certificates/15d813b41cc9" },
    { title: "SQL (Intermediate)", link: "https://www.hackerrank.com/certificates/f43bde5c6efa" },
    { title: "Python (Basic)", link: "https://www.hackerrank.com/certificates/6ce1df327c8f" }
  ];

  return (
<section id="certificates" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Certificates</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {certificates.map((cert, idx) => (
          <a key={idx} href={cert.link} target="_blank" className="px-6 py-3 bg-gray-200 rounded-lg shadow hover:bg-teal-400 hover:text-white transition">
            {cert.title}
          </a>
        ))}
      </div>
    </section>
  );
}
