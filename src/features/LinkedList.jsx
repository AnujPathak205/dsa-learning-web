import { useState } from "react";

export default function LinkedList({ initialData = [] }) {
  const [list, setList] = useState(initialData);
  const [value, setValue] = useState("");
  const [action, setAction] = useState(""); // 'insertHead', 'insertTail', 'deleteHead', 'deleteTail'
  const [output, setOutput] = useState("");

  const handleInsertHead = () => {
    if (!value) return;
    setList([value, ...list]);
    setAction("insertHead");
    setOutput(`${value} inserted at head`);
    setValue("");
  };

  const handleInsertTail = () => {
    if (!value) return;
    setList([...list, value]);
    setAction("insertTail");
    setOutput(`${value} inserted at tail`);
    setValue("");
  };

  const handleDeleteHead = () => {
    if (list.length === 0) {
      setOutput("List is empty");
      return;
    }
    const removed = list[0];
    setList(list.slice(1));
    setAction("deleteHead");
    setOutput(`${removed} deleted from head`);
  };

  const handleDeleteTail = () => {
    if (list.length === 0) {
      setOutput("List is empty");
      return;
    }
    const removed = list[list.length - 1];
    setList(list.slice(0, list.length - 1));
    setAction("deleteTail");
    setOutput(`${removed} deleted from tail`);
  };

  const handleClear = () => {
    setList([]);
    setAction("");
    setOutput("Linked list cleared");
  };

  return (
    <section className="bg-white dark:bg-slate-900 
        border border-gray-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition mt-6">

      <h2 className="text-xl font-semibold mb-4 
          text-slate-900 dark:text-white flex items-center gap-2">
        🎮 Linked List Visualizer
      </h2>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 dark:border-slate-600 rounded px-3 py-2 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none min-w-[80px]"
        />
        <button onClick={handleInsertHead} className="bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold">Insert Head</button>
        <button onClick={handleInsertTail} className="bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold">Insert Tail</button>
        <button onClick={handleDeleteHead} className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-white px-4 py-2 rounded transition font-semibold">Delete Head</button>
        <button onClick={handleDeleteTail} className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-white px-4 py-2 rounded transition font-semibold">Delete Tail</button>
        <button onClick={handleClear} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition font-semibold">Clear</button>
      </div>

      {/* Linked List Container */}
      <div className="flex items-center gap-3 overflow-x-auto min-h-[80px] border border-gray-300 dark:border-slate-600 rounded p-4 bg-gray-50 dark:bg-slate-800 transition">
        {list.length === 0 && <p className="text-gray-500 dark:text-gray-400 italic flex-1 text-center">Linked list is empty</p>}
        {list.map((item, idx) => {
          let bgColor = "bg-pink-400 dark:bg-pink-500";
          if (action === "insertHead" && idx === 0) bgColor = "bg-green-400 dark:bg-green-500";
          if (action === "insertTail" && idx === list.length - 1) bgColor = "bg-green-400 dark:bg-green-500";
          if (action === "deleteHead" && idx === 0) bgColor = "bg-yellow-400 dark:bg-yellow-500";
          if (action === "deleteTail" && idx === list.length - 1) bgColor = "bg-yellow-400 dark:bg-yellow-500";

          return (
            <div key={idx} className="flex items-center gap-1">
              <div className={`min-w-[60px] h-12 flex items-center justify-center rounded-md text-white font-bold transition-all duration-300 ${bgColor}`}>
                {item}
              </div>
              {idx !== list.length - 1 && <span className="text-slate-800 dark:text-white font-bold">→</span>}
            </div>
          );
        })}
      </div>

      {/* Output */}
      {output && <p className="mt-4 text-slate-800 dark:text-slate-100 font-medium">{output}</p>}
    </section>
  );
}