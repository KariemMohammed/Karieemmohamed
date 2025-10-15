import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "top-5 bg-gray-900/80 backdrop-blur-md w-1/2 py-4 px-8 rounded-4xl shadow-lg"
            : "top-0 w-full py-5 px-10 bg-transparent"
        }`}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
      >
        <h1 className="text-xl font-bold text-green-400">Karem.dev</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition"
            >
              {item}
            </a>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg z-40">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="text-green-400">Karem Mohamed</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-gray-400 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Frontend Developer & UI Enthusiast
        </motion.h2>
        <p className="max-w-xl text-gray-400 mb-8">
          I build modern, responsive, and user-friendly web interfaces using
          React, TypeScript, and TailwindCSS.
        </p>
        <motion.a
          href="#contact"
          className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          I'm a passionate Frontend Developer with experience in building
          interactive web applications. I love turning complex ideas into clean
          and efficient code. My focus is on creating smooth user experiences
          using React, TailwindCSS, and TypeScript.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 md:px-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "React",
            "Node.js",
            "TailwindCSS",
            "Bootstrab",
            "Git & GitHub",
            "Figma",
            "Vite",
            
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 py-6 rounded-2xl shadow-md hover:shadow-green-500/10 transition"
            >
              <p className="font-semibold text-green-400">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Modern Portfolio", tag: "React + Tailwind" },
            { title: "E-commerce UI", tag: "React + API" },
            { title: "Dashboard Design", tag: "Vite + TypeScript" },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-green-500/10 transition"
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <p className="text-green-400 text-sm mb-2">{p.tag}</p>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Interested in working together or have a question? Drop me a message!
        </p>
        <a
          href="mailto:karemmohamed.dev@gmail.com"
          className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition"
        >
          Say Hello
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Karem Mohamed. All rights reserved.
      </footer>
    </div>
  );
}
