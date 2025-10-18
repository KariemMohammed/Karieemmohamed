import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
