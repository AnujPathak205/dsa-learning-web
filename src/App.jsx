import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
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
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Navbar dark={dark} setDark={setDark}/>
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
