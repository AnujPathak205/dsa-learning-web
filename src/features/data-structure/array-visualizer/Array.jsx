import { useState } from 'react';
import ArrayDisplay from './components/ArrayDisplay';
import PlayerBar from '../../../components/PlayerBar';
import { arrayData } from '../../../data/data-structure/ArrayData';
import CodeVisual from '../../../components/CodeVisual';

import { handleInsertion } from './logic/insertion';
import { handleDeletion } from './logic/deletion';
import { handleSearch } from './logic/search';

export default function Array() {
  const initialArr = [
    { id: 0, value: 12, state: "normal" },
    { id: 1, value: 5, state: "normal" },
    { id: 2, value: 1, state: "normal" },
    { id: 3, value: 7, state: "normal" },
    { id: 4, value: 7, state: "normal" },
    { id: 5, value: 7, state: "normal" },
    { id: 6, value: 7, state: "normal" },
    { id: 8, value: 7, state: "normal" }

  ];

  const [array, setArray] = useState(initialArr);
  const [inputValue, setInputValue] = useState(22);
  const [inputIndex, setInputIndex] = useState(1);
  const [message, setMessage] = useState("Hello, visualize insertion, deletion and search in array");
  const [tasking, setTasking] = useState(false);
  const [currentLine, setCurrentLine] = useState(1);
  const [speed, setSpeed] = useState(1100);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 overflow-hidden">

        {/* LEFT: ARRAY VISUAL */}
        <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 rounded-xl shadow p-3 overflow-hidden">
          
          <ArrayDisplay array={array} />

          {/* Message */}
          <div className="mt-2 w-full text-center px-4 py-2 rounded-lg bg-blue-100 dark:bg-slate-700 text-blue-800 dark:text-blue-300 text-sm">
            {message}
          </div>

        </div>

        {/* RIGHT: CONTROLS + CODE */}
        <div className="flex flex-col gap-4 overflow-hidden">

          

          {/* 🔥 CODE BLOCK (takes remaining height) */}
          <div className=" bg-white dark:bg-slate-800 rounded-xl shadow p-2 overflow-auto">
            <CodeVisual code={arrayData.code.insertion} />
          </div>

          {/* 🔥 INPUT + BUTTONS */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 flex flex-col gap-4">

            {/* Inputs */}
            <div className="flex gap-4">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => !tasking && setInputValue(Number(e.target.value))}
                placeholder="Value"
                className="w-1/2 px-3 py-2 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="number"
                value={inputIndex}
                onChange={(e) => !tasking && setInputIndex(Number(e.target.value))}
                placeholder="Index"
                className="w-1/2 px-3 py-2 rounded border bg-gray-50 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">

              <button
                onClick={handleInsertion}
                disabled={tasking}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition
                  ${tasking
                    ? "bg-gray-400 text-white"
                    : "bg-purple-500 hover:bg-purple-600 text-white"}
                `}
              >
                Insert
              </button>

              <button
                onClick={() =>
                  handleDeletion(array, setArray, inputIndex, setMessage, setTasking, speed)
                }
                disabled={tasking}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition
                  ${tasking
                    ? "bg-gray-400 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"}
                `}
              >
                Delete
              </button>

              <button
                onClick={() =>
                  handleSearch(array, setArray, inputValue, setMessage, setTasking, speed)
                }
                disabled={tasking}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition
                  ${tasking
                    ? "bg-gray-400 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"}
                `}
              >
                Search
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 PLAYER BAR (fixed bottom already) */}
      <PlayerBar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        totalSteps={2}
        step={step}
        setStep={setStep}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  );
}