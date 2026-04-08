import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // TODO: connect backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">

      {/* 🔹 Card */}
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">

        {/* 🔸 Heading */}
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6">
          Welcome Back 👋
        </h2>

        {/* 🔸 Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                px-3 py-2 rounded-lg border
                bg-gray-50 dark:bg-slate-700
                dark:text-white
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                px-3 py-2 rounded-lg border
                bg-gray-50 dark:bg-slate-700
                dark:text-white
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <button
              type="button"
              className="text-indigo-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              mt-2 py-2 rounded-lg
              bg-indigo-500 text-white font-medium
              hover:bg-indigo-600 active:scale-[0.98]
              transition
            "
          >
            Login
          </button>
        </form>

        {/* 🔸 Footer */}
        <p className="text-sm text-center text-slate-600 dark:text-slate-400 mt-6">
          Don’t have an account?{" "}
          <span className="text-indigo-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}