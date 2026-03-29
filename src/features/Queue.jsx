import { useState } from "react";

export default function Queue({ initialData = [] }) {
  const [queue, setQueue] = useState(initialData);
  const [input, setInput] = useState("");
  const [action, setAction] = useState(""); // 'enqueue' or 'dequeue'
  const [output, setOutput] = useState("");

  const handleEnqueue = () => {
    if (!input) return;
    setQueue((prev) => [...prev, input]);
    setAction("enqueue");
    setOutput(`${input} is enqueued`);
    setInput("");
  };

  const handleDequeue = () => {
    if (queue.length === 0) {
      setOutput("Queue is empty");
      return;
    }
    const dequeued = queue[0];
    setQueue((prev) => prev.slice(1));
    setAction("dequeue");
    setOutput(`${dequeued} is dequeued`);
  };

  const handleClear = () => {
    setQueue([]);
    setAction("");
    setOutput("Queue cleared");
  };

  return (
    <section className="bg-white dark:bg-slate-900 
        border border-gray-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition mt-6">

      <h2 className="text-xl font-semibold mb-4 
          text-slate-900 dark:text-white flex items-center gap-2">
        🎮 Queue Visualizer
      </h2>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          className="flex-1 border border-gray-300 dark:border-slate-600 
                     rounded px-3 py-2 text-slate-900 dark:text-white 
                     bg-gray-100 dark:bg-slate-700 focus:outline-none"
        />
        <button
          onClick={handleEnqueue}
          className="bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700
                     text-white px-4 py-2 rounded transition font-semibold"
        >
          Enqueue
        </button>
        <button
          onClick={handleDequeue}
          className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700
                     text-white px-4 py-2 rounded transition font-semibold"
        >
          Dequeue
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition font-semibold"
        >
          Clear
        </button>
      </div>

      {/* Queue Container */}
      <div className="flex overflow-x-auto gap-3 min-h-[80px] border border-gray-300 dark:border-slate-600
                      rounded p-4 bg-gray-50 dark:bg-slate-800 transition">
        {queue.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 italic flex-1 text-center">
            Queue is empty
          </p>
        )}
        {queue.map((item, index) => {
          let bgColor = "bg-pink-400 dark:bg-pink-500";
          if (action === "enqueue" && index === queue.length - 1)
            bgColor = "bg-green-400 dark:bg-green-500";
          if (action === "dequeue" && index === 0)
            bgColor = "bg-yellow-400 dark:bg-yellow-500";

          return (
            <div
              key={index}
              className={`min-w-[60px] h-12 flex items-center justify-center
                          rounded-md text-white font-bold
                          transition-all duration-300 ${bgColor}`}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Output */}
      {output && (
        <p className="mt-4 text-slate-800 dark:text-slate-100 font-medium">
          {output}
        </p>
      )}
    </section>
  );
}