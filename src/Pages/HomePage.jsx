import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/BackgroundImg.png";

import {
  Rocket,
  PlayCircle,
  Brain,
  Gamepad2,
  HelpCircle,
  FlaskConical
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION (FULL SCREEN ONLY) */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image ONLY for hero */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Understand{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
              DSA Visually
            </span>{" "}
            — Not Just Memorize it
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Learn Data Structures & Algorithms through interactive visualizations,
            step-by-step explanations, and interview-focused practice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

            <Link
              to="/topics"
              className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
              bg-indigo-500 hover:bg-indigo-600 
              text-white rounded-xl shadow-lg 
              transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Start Learning
            </Link>

            <Link
              to="/visualizer"
              className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
              bg-white/10 hover:bg-white/20 
              text-white rounded-xl border border-white/20
              backdrop-blur-md
              transition-all duration-300 hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              Try Visualizer
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <Gamepad2 className="w-5 h-5 text-indigo-400" />
              <span>Interactive Visuals</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <Brain className="w-5 h-5 text-purple-400" />
              <span>Deep Intuition</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <HelpCircle className="w-5 h-5 text-pink-400" />
              <span>Interview Prep</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-lg text-slate-200">
              <FlaskConical className="w-5 h-5 text-green-400" />
              <span>Practice Problems</span>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 SECOND SECTION (SCROLL AFTER HERO) */}
      <div className="py-20 px-4 
        bg-gradient-to-b from-slate-50 to-slate-100 
        dark:from-slate-900 dark:to-slate-950">

        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold 
          text-slate-800 dark:text-white mb-3">
            Try Interactive Visualizers
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Practice and understand concepts with real-time step-by-step execution
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Array Visualizer */}
          <Link
            to="/topics/data-structures/array/visual"
            className="group relative overflow-hidden rounded-2xl p-6
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            shadow-md hover:shadow-xl
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
            bg-indigo-400 blur-2xl transition"></div>

            <div className="relative z-10 text-left">
              <h3 className="text-xl font-semibold 
              text-slate-800 dark:text-white mb-2">
                Array Visualizer
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Insert, delete, search, reverse with clear step-by-step logic
              </p>

              <span className="text-indigo-500 font-medium">
                Explore →
              </span>
            </div>
          </Link>

          {/* Sorting Visualizer */}
          <Link
            to="/topics/algorithms/sorting/visual"
            className="group relative overflow-hidden rounded-2xl p-6
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            shadow-md hover:shadow-xl
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 
            bg-purple-400 blur-2xl transition"></div>

            <div className="relative z-10 text-left">
              <h3 className="text-xl font-semibold 
              text-slate-800 dark:text-white mb-2">
                Sorting Visualizer
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Learn Bubble, Selection, Insertion with animations + code sync
              </p>

              <span className="text-purple-500 font-medium">
                Explore →
              </span>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}