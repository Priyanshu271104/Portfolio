import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Projects from "./Component/Project";
import Skills from "./Component/Skill";
import Experience from "./Component/Experience";
import Achievements from "./Component/Achievements";
import Certificates from "./Component/Certificate";
import Contact from "./Component/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Certificates />
      <Contact />
    </div>
  );
}
