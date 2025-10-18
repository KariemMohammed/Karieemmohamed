import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
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
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {skills.map((skill, i) => (
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
  );
}
