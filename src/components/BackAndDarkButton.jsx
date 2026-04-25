import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";


export default function BackAndDarkButton() {
    const navigate = useNavigate();

    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    }, [dark]);

  return (
    <div>
      
      {/* TOP LEFT CONTROLS */}
      <div className="
        fixed top-8 left-8 z-10
        flex items-center gap-2
        px-2 py-2 rounded-xl
        backdrop-blur-md
      ">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="
            px-3 py-1.5 rounded-lg text-sm font-medium
            bg-slate-500 text-white
            hover:bg-slate-600
            active:scale-95 transition
          "
        >
          ← Back
        </button>

        {/* Theme */}
       <button
          onClick={() => setDark((prev) => !prev)}
          className="
            p-2 rounded-lg
            border border-slate-400 dark:border-slate-600
            hover:border-indigo-500 dark:hover:border-indigo-400
            active:scale-95 transition
          "
        >
          {dark ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-slate-800 dark:text-white" />
          )}
        </button>

      </div>
    </div>
  )
}
