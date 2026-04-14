import React from "react";

export default function SortingHeader({ setCreateArr }) {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center text-center px-6">

        {/* 🔥 TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 mt-3">
          Sorting Visualizer
        </h1>

        {/* 🔥 DESCRIPTION */}
        <p className="text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
          Understand how sorting algorithms work internally with step-by-step
          visualization.

          <br /><br />

          Explore popular algorithms like
          <span className="text-green-500 font-semibold"> Bubble Sort</span>,
          <span className="text-blue-500 font-semibold"> Selection Sort</span>, and
          <span className="text-purple-500 font-semibold"> Insertion Sort</span>.

          <br />

          Observe how elements are
          <span className="text-indigo-500 font-semibold"> compared</span>,
          <span className="text-orange-500 font-semibold"> swapped</span>, and
          <span className="text-pink-500 font-semibold"> arranged</span> step by step.
        </p>

        {/* 🔥 CTA TEXT */}
        <p className="text-lg text-slate-400 mt-4">
          Select an algorithm to begin
        </p>

        {/* 🔥 BUTTON */}
        <button
          onClick={() => setCreateArr(true)}
          className="
            px-5 py-2.5 rounded-xl
            bg-indigo-500 text-white font-semibold
            shadow-md mt-2
            hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-[1px]
            active:scale-95
            transition-all duration-200
          "
        >
          Create / Randomize Array
        </button>

      </div>
    </>
  );
}