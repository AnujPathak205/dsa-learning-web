import './styles/App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useEffect, useState } from "react";


function App() {
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
    <div className='bg-slate-50 dark:bg-slate-900'>
      <Navbar dark={dark} setDark={setDark}/>
      <AppRoutes />
    </div>
  )
}

export default App
