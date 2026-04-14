import { useEffect, useState } from "react";
import ArrayDisplay from "../../../components/ArrayDisplay";
import CodeVisual from "../../../components/CodeVisual";
import PlayBar from "../../../components/PlayBar";

import SortingHeader from "./components/SortingHeader";
import SortingSelector from "./components/SortingSelector";
import ArrayCreator from "./components/ArrayCreator";

import { bubbleSortData } from "../../../data/algorithm/sorting/bubbleSortData";
import { selectionSortData } from "../../../data/algorithm/sorting/selectionSortData";
import { insertionSortData } from "../../../data/algorithm/sorting/insertionSortData";

import { handleBubble } from "./logic/bubbleSort";

export default function SortingVisual() {
  const initialArr = [
    { id: 0, value: 12, state: "normal" },
    { id: 1, value: 5, state: "normal" },
    { id: 2, value: 1, state: "normal" },
    { id: 3, value: 7, state: "normal" },
    { id: 4, value: 8, state: "normal" },
    { id: 5, value: 21, state: "normal" },
    { id: 6, value: 10, state: "normal" },
    { id: 7, value: 4, state: "normal" },
    { id: 8, value: 12, state: "normal" },
    { id: 9, value: 2, state: "normal" },
  ];

  const code = {
    bubble: bubbleSortData.code,
    selection: selectionSortData.code,
    insertion: insertionSortData.code,
  };

  const [array, setArray] = useState(initialArr);
  const [stepArr, setStepArr] = useState([]);
  const [output, setOutput] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const [algorithm, setAlgorithm] = useState("none");

  const [message, setMessage] = useState(
    "Choose a sorting algorithm to start visualization"
  );
  const [messageArr, setMessageArr] = useState([]);

  const [currentLine, setCurrentLine] = useState(-1);
  const [currentLineArr, setCurrentLineArr] = useState([]);

  const [speed, setSpeed] = useState(1000);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [createArr, setCreateArr] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      if (step >= stepArr.length) {
        setStep(0);
        setIsPlaying(false);
        return;
      }

      if (step === stepArr.length - 1) {
        setOutputValue(output);
        setTimeout(() => setOutputValue(""), 5000);
      }

      const timer = setTimeout(() => {
        setArray(stepArr[step]);
        setCurrentLine(currentLineArr[step]);
        if (messageArr[step]) setMessage(messageArr[step]);
        setStep((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      if (step === 0) return;

      if (step >= stepArr.length) {
        setStep(0);
        setIsPlaying(false);
        return;
      }

      setArray(stepArr[step]);
      setCurrentLine(currentLineArr[step]);
      if (messageArr[step]) setMessage(messageArr[step]);
    }
  }, [step, stepArr, isPlaying]);

  function onQuit() {
    setMessage("Choose a sorting algorithm to start visualization");
    if (stepArr.length) {
      setArray([...stepArr[0]]);
      setStepArr([]);
    }
    setCurrentLine(-1);
    setOutput("");
    setIsPlaying(false);
  }

  const handleStart = () => {
    setIsPlaying(true);
    setOutput("");
    const ARRAY = stepArr.length
      ? [...stepArr[stepArr.length - 1]]
      : [...array];

    if (algorithm === "bubble") {
      return handleBubble(
        ARRAY,
        stepArr,
        setStepArr,
        setMessageArr,
        setCurrentLineArr,
        setOutput
      );
    }
  };

  function shuffleArray() {
    const newArr = [...array];

    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    setArray([...newArr]);
  }

  const isDisabled = isPlaying;
  const totalSteps = stepArr.length;

  return (
    <div className="h-screen flex flex-col bg-gray-100 dark:bg-slate-900">

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 p-4 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="flex flex-col justify-center items-center 
          bg-white dark:bg-slate-800 
          rounded-xl border border-slate-200 dark:border-slate-700 p-4">

          <ArrayDisplay array={array} />

          {/* MESSAGE */}
          <div className="mt-4 w-full text-center px-4 py-2 rounded-md 
            bg-slate-100 dark:bg-slate-700 
            text-slate-700 dark:text-slate-200 text-sm">

            {typeof message === "string" && (() => {
              const parts = message.split("#");

              return (
                <>
                  <div>{parts[0]}</div>

                  {parts.length > 1 && (
                    <div className="mt-1 flex flex-wrap justify-center gap-2">
                      {parts.slice(1).map((part, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded 
                          bg-slate-200 dark:bg-slate-600 
                          text-slate-800 dark:text-slate-200 text-xs"
                        >
                          {part.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
          </div>

          {/* OUTPUT */}
          {outputValue && (
            <div className="mt-3 w-full border rounded-md 
              bg-white dark:bg-slate-900">

              <div className="px-3 py-1 border-b text-xs font-medium">
                OUTPUT
              </div>

              <div className="py-2 text-center font-mono text-sm">
                {outputValue}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-4 overflow-hidden">

          {/* CODE / HEADER */}
          <div className="bg-white dark:bg-slate-800 
            rounded-xl border border-slate-200 dark:border-slate-700 
            p-2 flex-1 overflow-auto">

            {algorithm !== "none" ? (
              <CodeVisual code={code[algorithm]} currentLine={currentLine} />
            ) : !createArr ? (
              <SortingHeader setCreateArr={setCreateArr} />
            ) : (
              <ArrayCreator
                setArray={setArray}
                setCreateArr={setCreateArr}
                setMessage={setMessage}
              />
            )}
          </div>

          {/* CONTROLS */}
          <div className="bg-white dark:bg-slate-800 
            rounded-xl border border-slate-200 dark:border-slate-700 
            p-4 flex flex-col gap-4">

            {algorithm !== "none" && (
              <div className="flex justify-between items-center">

                <button
                  disabled={isDisabled}
                  onClick={() => setAlgorithm("none")}
                  className={`px-3 py-1 rounded text-sm text-white
                    ${isDisabled ? "bg-gray-400" : "bg-slate-500 hover:bg-slate-600"}`}
                >
                  ← Back
                </button>

                <div className="flex gap-2">

                  <button
                    disabled={isDisabled}
                    onClick={shuffleArray}
                    className={`px-3 py-1 rounded text-sm text-white
                      ${isDisabled ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"}`}
                  >
                    Shuffle
                  </button>

                  <button
                    disabled={!isDisabled}
                    onClick={onQuit}
                    className={`px-3 py-1 rounded text-sm text-white
                      ${!isDisabled ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"}`}
                  >
                    Quit
                  </button>

                </div>
              </div>
            )}

            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {algorithm === "none"
                ? "Choose Sorting Algorithm"
                : `Algorithm: ${algorithm} sort`} (n = {array.length})
            </h2>

            {algorithm === "none" ? (
              <SortingSelector
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                setCurrentLine={setCurrentLine}
              />
            ) : (
              <button
                onClick={handleStart}
                disabled={isDisabled}
                className={`w-full py-2 rounded text-white text-sm
                  ${isDisabled ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
              >
                {isDisabled ? "Running..." : "Start"}
              </button>
            )}
          </div>
        </div>
      </div>

      <PlayBar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        step={step}
        setStep={setStep}
        speed={speed}
        setSpeed={setSpeed}
        totalSteps={totalSteps}
        onQuit={onQuit}
      />
    </div>
  );
}