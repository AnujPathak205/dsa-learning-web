import { useState } from "react";
import { sleep } from "../logic/helperFunctions";

const MAX_CAPACITY = 12;

export default function ArrayCreator({ setArray, setCreateArr, setMessage }) {
  const [capacity, setCapacity] = useState(8);
  const [takingUserValues, setTakingUserValues] = useState(false);
  const [values, setValues] = useState([]);

  async function generateRandomArray() {
    let newArr = [];

    // create empty array
    for (let i = 0; i < capacity; i++) {
      newArr[i] = { id: i, value: null, state: "created" };
    }

    setArray([...newArr]);
    await sleep(300);

    // fill values
    for (let i = 0; i < capacity; i++) {
      newArr[i].value = Math.floor(Math.random() * 100);
      newArr[i].state = "found";
      setArray([...newArr]);
      await sleep(150);
    }

    await sleep(300);

    setMessage(`Start sorting visualization # size = ${capacity}`);

    // reset states
    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);
    setCreateArr(false);
  }

  async function handleManualSubmit() {
    let newArr = [];

    // create base array
    for (let i = 0; i < capacity; i++) {
      newArr[i] = { id: i, value: null, state: "created" };
    }

    setArray([...newArr]);
    await sleep(300);

    // fill user values
    for (let i = 0; i < capacity; i++) {
      newArr[i].value = Number(values[i]);
      newArr[i].state = "found";
      setArray([...newArr]);
      await sleep(150);
    }

    await sleep(300);

    setMessage(`Start sorting visualization # size = ${capacity}`);

    // reset states
    for (let i = 0; i < capacity; i++) {
      newArr[i].state = "normal";
    }

    setArray([...newArr]);
    setCreateArr(false);
  }

  return (
    <div className="max-w-2xl mx-auto py-6 
      bg-white/80 dark:bg-slate-800/70 
      backdrop-blur-md rounded-2xl px-2 space-y-6">

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
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Create Array for Sorting
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Define the number of elements (array size).
            </p>
          </div>

          {/* INFO */}
          <div className="p-4 rounded-lg 
            bg-indigo-50 dark:bg-slate-900/50
            border border-indigo-100 dark:border-slate-700 text-sm">

            <p className="text-slate-700 dark:text-slate-300">
              Sorting algorithms work on a fully filled array.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Choose a size and generate values.
            </p>
          </div>

          {/* INPUT */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300">
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
              className="ml-3 px-3 py-2 rounded-lg border
                bg-slate-50 dark:bg-slate-700 dark:text-white"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={generateRandomArray}
              className="flex-1 py-2.5 rounded-xl 
                bg-indigo-500 text-white font-medium
                hover:bg-indigo-600 transition"
            >
              Generate Random
            </button>

            <button
              onClick={() => {
                setValues(Array(capacity).fill(""));
                setTakingUserValues(true);
              }}
              className="flex-1 py-2.5 rounded-xl 
                bg-green-500 text-white font-medium
                hover:bg-green-600 transition"
            >
              Enter Manually
            </button>
          </div>
        </>
      ) : (
        <>
          {/* TITLE */}
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">
            Enter Values
          </h1>

          <p className="text-sm text-slate-500">
            Size = {capacity}
          </p>

          {/* INPUT GRID */}
          <div className="grid grid-cols-4 gap-3">
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
                className="px-2 py-2 rounded-lg border text-center 
                  bg-slate-50 dark:bg-slate-700 dark:text-white"
                placeholder={`a${idx}`}
              />
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <button
              onClick={handleManualSubmit}
              className="flex-1 py-2.5 rounded-xl 
                bg-indigo-500 text-white hover:bg-indigo-600"
            >
              Create Array
            </button>

            <button
              onClick={() => setTakingUserValues(false)}
              className="flex-1 py-2.5 rounded-xl 
                bg-slate-500 text-white hover:bg-slate-600"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}