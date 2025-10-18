import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gray-900 text-center text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-8">
        Interested in working together or have a question? Drop me a message!
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/201143176683"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition"
        >
          <FaWhatsapp className="text-xl" /> WhatsApp
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/karem-mohamed-00b921356"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Kareemmohameed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>

        {/* Gmail */}
        <a
          href="mailto:karemmohamed254452@gmail.com"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-400 transition"
        >
          <FaEnvelope className="text-xl" /> Gmail
        </a>
      </div>
    </section>
  );
}
