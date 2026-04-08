import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 px-4">

      {/* 🔹 Card */}
      <div className="
        w-full max-w-md
        bg-white/90 dark:bg-slate-900/80
        backdrop-blur-xl
        border border-slate-200 dark:border-slate-700
        rounded-2xl shadow-xl
        p-6
      ">

        {/* 🔸 Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Create Account
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Sign up to start using the visualizer
          </p>
        </div>

        {/* 🔸 Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullName", {
                required: "Full name is required",
              })}
              className={`input ${errors.fullName ? "input-error" : ""}`}
            />
            {errors.fullName && (
              <p className="error">{errors.fullName.message}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="john123"
              {...register("userName", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              className={`input ${errors.username ? "input-error" : ""}`}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`input ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className={`input pr-10 ${errors.password ? "input-error" : ""}`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  text-slate-500 dark:text-slate-400
                  hover:text-indigo-500 transition
                "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full mt-2 py-2.5 rounded-lg
              bg-indigo-500 text-white font-medium
              hover:bg-indigo-600
              active:scale-[0.98]
              shadow-md
              transition
            "
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-slate-600 dark:text-slate-400 mt-6">
          Already have an account?{" "}
          <span className="text-indigo-500 hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}