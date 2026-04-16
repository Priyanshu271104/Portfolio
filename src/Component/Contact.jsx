export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center px-6">
      
      <h2 className="text-3xl font-bold mb-10 text-indigo-400">
        &lt;Contact Me /&gt;
      </h2>

      {/* 🔥 Main CTA */}
      <p className="mb-6 text-gray-300 max-w-xl mx-auto">
        I’m currently looking for opportunities to build scalable, real-world applications 
        and contribute to impactful products.
      </p>

      {/* 🚀 Action Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        
        <a
          href="mailto:work.priyanshu2711@gmail.com"
          className="px-6 py-3 bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 transition transform"
        >
          📧 Email Me
        </a>

        <a
          href="tel:9811328321"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 transition transform"
        >
          📞 Call Me
        </a>

        <a
          href="https://github.com/Priyanshu271104"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 transition transform"
        >
          💻 GitHub
        </a>

        <a
          href="https://linkedin.com/in/priyanshuuniyal"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 rounded-lg shadow hover:bg-indigo-500 hover:scale-105 transition transform"
        >
          🔗 LinkedIn
        </a>

      </div>

      {/* 🎯 Role Targeting */}
      <p className="mt-4 text-white font-medium">
        🚀 Open to: Flutter Developer | Frontend Engineer | Full Stack Roles
      </p>

      {/* 📍 Availability */}
      <div className="max-w-2xl mx-auto text-gray-400 text-sm mt-6">
        <p>
          💡 Available for full-time roles, internships, and freelance projects in web and mobile development.
        </p>

        <p className="mt-4">
          📍 Based in <span className="text-indigo-400">New Delhi, India</span> — available for remote work worldwide.
        </p>
      </div>

    </section>
  );
}