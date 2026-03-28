import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/BackgroundImg.png";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center my-1">

      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-xs "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-3 max-w-3xl">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Master Data Structures & Algorithms
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 mb-8">
          Visualize concepts, understand deeply, and crack interviews with confidence.
        </p>

        <Link
          to="/topics"
          className="inline-block px-6 py-3 text-lg font-semibold 
                     bg-indigo-500 hover:bg-indigo-600 
                     text-white rounded-xl shadow-lg 
                     transition-all duration-300"
        >
          Explore Topics 🚀
        </Link>

      </div>
    </div>
  );
}