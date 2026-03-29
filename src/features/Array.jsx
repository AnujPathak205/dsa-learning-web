import { useState } from "react";

export default function Array({ initialData = [] }) {
  const [array, setArray] = useState(initialData);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [action, setAction] = useState("");
  const [output, setOutput] = useState("");

  const handleInsert = () => {
    const idx = parseInt(index);
    if (!value || isNaN(idx) || idx < 0 || idx > array.length) return;
    const newArr = [...array];
    newArr.splice(idx, 0, value);
    setArray(newArr);
    setAction("insert");
    setOutput(`Value ${value} inserted at index ${idx}`);
    setValue("");
    setIndex("");
  };

  const handleDelete = () => {
    const idx = parseInt(index);
    if (isNaN(idx) || idx < 0 || idx >= array.length) {
      setOutput("Invalid index");
      return;
    }
    const removed = array[idx];
    const newArr = [...array];
    newArr.splice(idx, 1);
    setArray(newArr);
    setAction("delete");
    setOutput(`Value ${removed} deleted from index ${idx}`);
    setIndex("");
  };

  const handleUpdate = () => {
    const idx = parseInt(index);
    if (!value || isNaN(idx) || idx < 0 || idx >= array.length) return;
    const newArr = [...array];
    newArr[idx] = value;
    setArray(newArr);
    setAction("update");
    setOutput(`Value at index ${idx} updated to ${value}`);
    setValue("");
    setIndex("");
  };

  const handleClear = () => {
    setArray([]);
    setAction("");
    setOutput("Array cleared");
  };

  return (
    <section className="bg-white dark:bg-slate-900 
        border border-gray-200 dark:border-slate-700
        rounded-xl p-6 shadow-sm hover:shadow-md transition mt-6">

      <h2 className="text-xl font-semibold mb-4 
          text-slate-900 dark:text-white flex items-center gap-2">
        🎮 Array Visualizer
      </h2>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 dark:border-slate-600 rounded px-3 py-2 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none flex-1 min-w-[80px]"
        />
        <input
          type="number"
          placeholder="Index"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          className="border border-gray-300 dark:border-slate-600 rounded px-3 py-2 bg-gray-100 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none min-w-[80px]"
        />
        <button className="bg-purple-400 dark:bg-purple-600 hover:bg-purple-500 dark:hover:bg-purple-700 text-white px-4 py-2 rounded transition font-semibold" onClick={handleInsert}>Insert</button>
        <button className="bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-white px-4 py-2 rounded transition font-semibold" onClick={handleDelete}>Delete</button>
        <button className="bg-green-400 dark:bg-green-600 hover:bg-green-500 dark:hover:bg-green-700 text-white px-4 py-2 rounded transition font-semibold" onClick={handleUpdate}>Update</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition font-semibold" onClick={handleClear}>Clear</button>
      </div>

      {/* Array Container */}
      <div className="flex flex-wrap gap-3 min-h-[80px] border border-gray-300 dark:border-slate-600 rounded p-4 bg-gray-50 dark:bg-slate-800 transition">
        {array.length === 0 && <p className="text-gray-500 dark:text-gray-400 italic flex-1 text-center">Array is empty</p>}
        {array.map((item, idx) => {
          let bgColor = "bg-pink-400 dark:bg-pink-500";
          if (action === "insert" && idx === parseInt(index)) bgColor = "bg-green-400 dark:bg-green-500";
          if (action === "delete" && idx === parseInt(index)) bgColor = "bg-yellow-400 dark:bg-yellow-500";
          if (action === "update" && idx === parseInt(index)) bgColor = "bg-blue-400 dark:bg-blue-500";

          return (
            <div key={idx} className={`min-w-[60px] h-12 flex items-center justify-center rounded-md text-white font-bold transition-all duration-300 ${bgColor}`}>
              {item}
            </div>
          );
        })}
      </div>

      {/* Output */}
      {output && <p className="mt-4 text-slate-800 dark:text-slate-100 font-medium">{output}</p>}
    </section>
  );
}