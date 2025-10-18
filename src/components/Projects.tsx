import { motion } from "framer-motion";
// @ts-ignore: allow importing image without a module declaration file
import FoodieZonez from "../assets/FoodieZone.jpeg";
import Ecommerce from "../assets/Ecommerce.png";
import dashboard from "../assets/dashboard.png";

export default function Projects() {
  const projects = [
    {
      img: FoodieZonez,
      title: "FoodieZone",
      tag: "Vanilla Javascript + Bootstrap + API",
      link: "https://github.com/Kareemmohameed/FoodieZone",
      demo: "https://kareemmohameed.github.io/FoodieZone/",
    },
    {
      img: Ecommerce,
      title: "E-Commerce UI",
      tag: "React + API",
      link: "https://github.com/Kareemmohameed/Ecommerce",
      demo: "https://kareemmohameed.github.io/Ecommerce",
    },
    {
      img: dashboard,
      title: "Dashboard Design",
      tag: "Vite + TypeScript",
      link: "https://ecommerce-concept.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-green-500/10 transition"
          >
            <div className="w-full h-48 bg-gray-700 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex items-start justify-between">
              {/* النص ناحية الشمال */}
              <div className="text-left">
                <p className="text-green-400 text-sm mb-2 w-[150px]">{p.tag}</p>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {p.title}
                </h3>
              </div>

              {/* الزراير ناحية اليمين وتحت بعض */}
              <div className="flex flex-col gap-3 text-center">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-black font-medium px-4 py-2 rounded-full hover:bg-green-400 transition"
                >
                  View Project
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-green-500 text-green-400 font-medium px-4 py-2 rounded-full hover:bg-green-500 hover:text-black transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
