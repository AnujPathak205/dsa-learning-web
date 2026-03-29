import { Link } from "react-router-dom";

export default function PageNotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
    bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4">

      {/* 404 Number */}
      <h1 className="text-7xl sm:text-8xl font-extrabold 
      text-transparent bg-clip-text 
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-bold 
      text-slate-800 dark:text-white mb-2 text-center">
        Oops! Page Not Found 🚫
      </h2>

      <p className="text-slate-600 dark:text-slate-300 
      text-center max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
        Let’s get you back on track!
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-purple-500 to-pink-500 
          hover:from-purple-600 hover:to-pink-600 
          text-white px-6 py-3 rounded-xl font-semibold 
          transition transform hover:scale-105 shadow-md"
        >
          🏠 Go Home
        </Link>

        <Link
          to="/topics"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 
          hover:from-blue-600 hover:to-indigo-600 
          text-white px-6 py-3 rounded-xl font-semibold 
          transition transform hover:scale-105 shadow-md"
        >
          📚 Explore Topics
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="mt-10 text-6xl animate-bounce">
        🤖
      </div>
    </div>
  );
}