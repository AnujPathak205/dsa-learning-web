import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700  p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 min-h-[150px]">
      
      <p className="text-slate-800 dark:text-slate-100 font-semibold text-lg">
        © {new Date().getFullYear()} Anuj Pathak
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/AnujPathak205"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 px-6 py-4 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-300 transition transform hover:scale-105"
        >
          <FaGithub size={24} /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/anuj-pathak-22876835b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white bg-blue-600 dark:bg-blue-400 dark:text-white px-6 py-4 rounded-xl hover:bg-blue-500 dark:hover:bg-blue-300 transition transform hover:scale-105"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </div>

    </footer>
  );
}