import React, { useState, useEffect } from "react";

export default function BubbleSortVisual() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(250);
  const [current, setCurrent] = useState([]);
  const [sorted, setSorted] = useState([]);

  // Generate random array
  const generateArray = () => {
    if (isSorting) return;

    const newArr = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 90) + 10
    );

    setArray(newArr);
    setSorted([]);
    setCurrent([]);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // Sleep for animation
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  // Bubble Sort Animation
  const bubbleSort = async () => {
    setIsSorting(true);

    let arr = [...array];
    let n = arr.length;
    let sortedIndices = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setCurrent([j, j + 1]);

        // FIXED SPEED (inverted)
        await sleep(550 - speed);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);

          await sleep(550 - speed);
        }
      }

      sortedIndices.push(n - i - 1);
      setSorted([...sortedIndices]);
    }

    // Mark all sorted
    setSorted(Array.from({ length: n }, (_, i) => i));
    setCurrent([]);
    setIsSorting(false);
  };

  // Reset array
  const reset = () => {
    if (isSorting) return;
    generateArray();
  };

  return (
    <div
      className="mt-6 p-6 rounded-xl 
      bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100
      dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
      shadow-lg"
    >
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-center 
      text-slate-800 dark:text-slate-100">
        🎮 Bubble Sort Visualizer
      </h2>

      {/* Bars + Values */}
      <div className="flex items-end justify-center h-72 gap-2 mb-6 flex-wrap">
        {array.map((value, index) => {
          let bg = "bg-indigo-400 dark:bg-indigo-500";

          if (current.includes(index)) bg = "bg-red-400";
          else if (sorted.includes(index)) bg = "bg-green-400";

          return (
            <div key={index} className="flex flex-col items-center">
              
              {/* BAR */}
              <div
                className={`${bg} w-5 sm:w-7 rounded-t-lg 
                transition-all duration-300 ease-in-out`}
                style={{ height: `${value * 2}px` }}
              ></div>

              {/* VALUE */}
              <span
                className={`mt-2 text-xs sm:text-sm font-semibold 
                transition-all duration-300
                ${
                  current.includes(index)
                    ? "text-red-500"
                    : sorted.includes(index)
                    ? "text-green-500"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-4 items-center">

        {/* Start */}
        <button
          onClick={bubbleSort}
          disabled={isSorting}
          className="px-4 py-2 rounded-lg 
          bg-green-500 hover:bg-green-600 
          text-white font-semibold shadow disabled:opacity-50"
        >
          ▶ Start
        </button>

        {/* Reset */}
        <button
          onClick={reset}
          disabled={isSorting}
          className="px-4 py-2 rounded-lg 
          bg-yellow-500 hover:bg-yellow-600 
          text-white font-semibold shadow disabled:opacity-50"
        >
          🔄 Reset
        </button>

        {/* Speed */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-700 dark:text-slate-300">
            ⚡ Speed
          </span>
          <input
            type="range"
            min="50"
            max="500"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}