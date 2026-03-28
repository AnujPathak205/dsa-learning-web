import { Link } from "react-router-dom";
import { useState } from "react";
import Sitemap from "./Sitemap";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r 
      from-slate-200 to-slate-300 text-slate-800 
      dark:from-slate-900 dark:to-slate-700 dark:text-white 
      px-6 py-4 shadow-md">

      {/* Top Bar */}
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">
          DSA Visualizer
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/topics" className="hover:text-yellow-400 transition">
            Topic List
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDark(prev => !prev)}
            className="px-4 py-2 rounded-lg 
                       bg-slate-300 text-slate-800
                       dark:bg-slate-600 dark:text-white
                       hover:scale-105 transition cursor-pointer"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/topics"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            Topic List
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDark(prev => !prev)}
            className="px-4 py-2 rounded-lg 
                       bg-slate-300 text-slate-800
                       dark:bg-slate-600 dark:text-white
                       w-fit cursor-pointer "
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}