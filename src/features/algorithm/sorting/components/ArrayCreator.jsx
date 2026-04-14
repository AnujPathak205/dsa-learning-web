import { useState } from "react";
import { sleep } from "../logic/helperFunctions";

const MAX_CAPACITY = 12;

export default function ArrayCreator({ setArray, setCreateArr, setMessage }) {
  const [capacity, setCapacity] = useState(8);
  const [takingUserValues, setTakingUserValues] = useState(false);
  const [values, setValues] = useState([]);

  async function generateRandomArray() {
    let newArr = [];

    for (let i = 0; i < capacity; i++) {
      newArr[i] = { id: i, value: null, state: "created" };
    }

    setArray([...newArr]);
    await sleep(300);

    for (let i = 0; i < capacity; i++) {
      newArr[i].value = Math.floor(Math.random() * 100);
      newArr[i].state = "found";
      setArray([...newArr]);
      await sleep(150);
    }

    await sleep(300);

    setMessage(`Start sorting visualization # size = ${capacity}`);

    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);
    setCreateArr(false);
  }

  async function handleManualSubmit() {
    let newArr = [];

    for (let i = 0; i < capacity; i++) {
      newArr[i] = { id: i, value: null, state: "created" };
    }

    setArray([...newArr]);
    await sleep(300);

    for (let i = 0; i < capacity; i++) {
      newArr[i].value = Number(values[i] || 0);
      newArr[i].state = "found";
      setArray([...newArr]);
      await sleep(150);
    }

    await sleep(300);

    setMessage(`Start sorting visualization # size = ${capacity}`);

    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);
    setCreateArr(false);
  }

  return (
    <div className="h-full flex flex-col justify-between 
      bg-white/80 dark:bg-slate-800/70 
      backdrop-blur-md rounded-2xl px-4 py-4">

      {/* TOP */}
      <div className="space-y-5">

        {/* BACK */}
        <button
          onClick={() => setCreateArr(false)}
          className="text-sm px-3 py-1 rounded bg-slate-500 text-white hover:bg-slate-600"
        >
          ← Back
        </button>

        {!takingUserValues ? (
          <>
            {/* TITLE */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                Create Array for Sorting
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                Configure the input array before sorting.
              </p>
            </div>

            {/* DESKTOP ONLY: THEORY */}
            <div className="hidden md:block p-4 rounded-lg 
              bg-indigo-50 dark:bg-slate-900/50
              border border-indigo-100 dark:border-slate-700 text-sm space-y-2">

              <p className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-indigo-600">Array Size</span> 
                {" "}is the total number of elements.
              </p>

              <p className="text-slate-700 dark:text-slate-300">
                Sorting works on a <span className="font-semibold">fully filled array</span>.
              </p>

              <p className="text-slate-700 dark:text-slate-300">
                Larger arrays increase comparisons and time complexity.
              </p>
            </div>

            {/* DESKTOP ONLY: HINTS */}
            <div className="hidden md:block p-3 rounded-lg 
              bg-yellow-50 dark:bg-slate-900/40
              border border-yellow-200 dark:border-slate-700 text-xs">

              <p className="text-yellow-800 dark:text-yellow-300">
                Tip: Use smaller sizes (5–8) to clearly observe steps.
              </p>
              <p className="text-yellow-800 dark:text-yellow-300 mt-1">
                Manual input helps test edge cases.
              </p>
            </div>

            {/* INPUT */}
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">
                Array Size (1 - {MAX_CAPACITY})
              </label>

              <input
                type="number"
                value={capacity}
                min={1}
                max={MAX_CAPACITY}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val > MAX_CAPACITY) return;
                  setCapacity(val);
                }}
                className="ml-2 px-2 py-1.5 rounded-lg border
                  bg-slate-50 dark:bg-slate-700 dark:text-white w-20"
              />

              {/* MOBILE ONLY hint */}
              <p className="text-xs text-slate-400 mt-1 md:hidden">
                Max {MAX_CAPACITY}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* TITLE */}
            <h1 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-white">
              Enter Values
            </h1>

            <p className="text-xs md:text-sm text-slate-500">
              Size = {capacity}
            </p>

            {/* DESKTOP hint */}
            <div className="hidden md:block text-xs text-slate-400">
              You can enter any integers. Duplicates allowed.
            </div>

            {/* INPUT GRID */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
              {values.map((val, idx) => (
                <input
                  key={idx}
                  type="number"
                  value={val}
                  onChange={(e) => {
                    let newValues = [...values];
                    newValues[idx] = e.target.value;
                    setValues(newValues);
                  }}
                  className="px-2 py-1.5 md:py-2 rounded-lg border text-center 
                    bg-slate-50 dark:bg-slate-700 dark:text-white text-sm"
                  placeholder={`a${idx}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* BOTTOM */}
      <div className="pt-4">
        {!takingUserValues ? (
          <div className="flex gap-3">
            <button
              onClick={generateRandomArray}
              className="flex-1 py-2 rounded-lg 
                bg-indigo-500 text-white text-sm md:text-base
                hover:bg-indigo-600 transition"
            >
              Random
            </button>

            <button
              onClick={() => {
                setValues(Array(capacity).fill(""));
                setTakingUserValues(true);
              }}
              className="flex-1 py-2 rounded-lg 
                bg-green-500 text-white text-sm md:text-base
                hover:bg-green-600 transition"
            >
              Manual
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleManualSubmit}
              className="flex-1 py-2 rounded-lg 
                bg-indigo-500 text-white text-sm md:text-base
                hover:bg-indigo-600"
            >
              Create
            </button>

            <button
              onClick={() => setTakingUserValues(false)}
              className="flex-1 py-2 rounded-lg 
                bg-slate-500 text-white text-sm md:text-base
                hover:bg-slate-600"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}