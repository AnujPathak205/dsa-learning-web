import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BackAndDarkButton from "./BackAndDarkButton";

export default function ArrayDisplay({ array }) {
  return (
    <div className="relative w-full">

      <BackAndDarkButton />
      
      {/* ARRAY */}
      <div className="flex flex-wrap justify-center gap-2 mt-20">
        {array.map((element, index) => (
          <motion.div
            layout
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className="flex flex-col items-center"
            key={element.id}
          >
            <motion.div
              layout
              className={`h-12 w-12 flex items-center justify-center rounded-lg border font-semibold transition-all duration-300
                ${element.state === "unvisible" ? "opacity-0" : ""}
                ${element.state === "inserted" ? "bg-green-500 text-white scale-110" : ""}
                ${element.state === "deleted" ? "bg-red-500 text-white scale-110" : ""}
                ${element.state === "normal" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : ""}
                ${element.state === "searching" ? "bg-purple-500 text-white scale-110" : ""}
                ${element.state === "found" ? "bg-green-500 text-white scale-110" : ""}
                ${element.state === "created" ? "bg-indigo-100 text-indigo-800" : ""}
                ${element.state === "selected" ? "bg-yellow-400 text-black scale-110" : ""}
              `}
            >
              {element.value != null ? element.value : ""}
            </motion.div>

            <div className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              {index}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}