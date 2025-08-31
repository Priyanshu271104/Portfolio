export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">&lt;Contact Me /&gt;</h2>
      <p className="mb-6 text-gray-300 max-w-xl mx-auto">
        I’m always excited to collaborate on interesting projects, contribute to open source,
        or just have a meaningful tech conversation. 🚀  
        Feel free to reach out — I’ll get back to you as soon as possible!
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a
          href="mailto:work.priyanshu2711@gmail.com"
          className="px-6 py-3 bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 transition"
        >
          📧 Email Me
        </a>
        <a
          href="tel:9811328321"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 transition"
        >
          📞 Call Me
        </a>
        <a
          href="https://github.com/Priyanshu271104"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/priyanshuuniyal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 transition"
        >
          🔗 LinkedIn
        </a>
      </div>

      {/* Extra Content */}
      <div className="max-w-2xl mx-auto text-gray-400 text-sm">
        <p>
          💡 Currently open to internships and freelance opportunities in Web & App Development.  
          If you have a role or project that matches my skills, let’s discuss!
        </p>
        <p className="mt-4">
          📍 Based in <span className="text-indigo-400">New Delhi, India</span> — available for remote work worldwide.
        </p>
      </div>
    </section>
  );
}
