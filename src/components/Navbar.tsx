import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Props {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen }: Props) {
  return (
    <motion.nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "top-5 bg-gray-900/80 backdrop-blur-md w-1/2 py-4 px-8 rounded-4xl shadow-lg"
          : "top-0 w-full py-5 px-10 bg-transparent"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      <h1 className="text-xl font-bold text-green-400 text-center">Kareem M.</h1>
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
  );
}
