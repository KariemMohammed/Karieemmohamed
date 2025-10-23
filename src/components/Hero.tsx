import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 gap-2"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I'm <span className="text-green-400">Kareem Mohamed</span>
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-4xl text-gray-400 mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Frontend Developer & UI Enthusiast
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8 text-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        I build modern, responsive, and user-friendly web interfaces using
        React, TypeScript, Javascript and TailwindCSS.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="flex justify-center align-middle gap-4"
      >
        <motion.a
          href="https://drive.google.com/file/d/1KwjG90HD5pOfJFve57Pnkja9wjqqTmiO/view?usp=drive_link"
          className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
          target="_blank"
        >
          Show CV
        </motion.a>

        <motion.a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}
