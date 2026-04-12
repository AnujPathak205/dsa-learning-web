import Code from "./Code";
import Sitemap from "./Sitemap";
import Quiz from "./Quiz";

import {
  BookOpen,
  Brain,
  Rocket,
  PlayCircle
} from "lucide-react";

import { Link } from "react-router-dom";

export default function TopicContentDS({ data, visualPath }) {
  return (
    <>
      <Sitemap />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12 min-h-screen">

        {/* 🔥 TITLE */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
            {data.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* 🔥 MAIN CONTENT (MERGED SECTION) */}
        <section className="space-y-10">

          {/* Explanation */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-3">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              Concept
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {data.explanation}
            </p>
          </div>

          {/* Operations */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
              Key Operations
            </h3>

            <div className="grid gap-3">
              {data.operations.map((op, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg 
                  bg-slate-50 dark:bg-slate-800/60
                  border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-indigo-500 font-semibold">
                    {index + 1}.
                  </span>

                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">
                      {op.name}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {op.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complexity */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
              Time Complexity
            </h3>

            <div className="flex flex-wrap gap-3">
              {data.complexity.map((op, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg 
                  bg-indigo-50 dark:bg-indigo-900/30
                  text-indigo-700 dark:text-indigo-300
                  text-sm font-medium"
                >
                  {op.opName}: {op.TC}
                </div>
              ))}
            </div>
          </div>

          {/* Real Life */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
              Real-Life Use
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.realLifeExample}
            </p>
          </div>

        </section>

        {/* 🔥 VISUAL CTA */}
        <section className="rounded-2xl p-6 text-center 
          bg-gradient-to-r from-indigo-500 to-indigo-600 
          text-white shadow-lg">

          <PlayCircle className="mx-auto mb-3 w-8 h-8" />

          <h2 className="text-xl font-semibold mb-2">
            Visualize This Concept
          </h2>

          <p className="text-sm opacity-90 mb-4">
            Watch step-by-step execution and understand deeply
          </p>

          <Link
            to={`/topics/data-structures/${visualPath}/visual`}
            className="inline-block px-5 py-2 rounded-lg 
            bg-white text-indigo-600 font-medium 
            hover:bg-gray-100 transition"
          >
            Start Visualization
          </Link>
        </section>

        {/* 🔥 CODE */}
        <section>
          <Code code={data.code.basic} />
        </section>

        {/* 🔥 QUESTIONS */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white">
            <Brain className="w-5 h-5 text-indigo-500" />
            Practice Questions
          </h2>

          {data.questions.map((q, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <p className="font-medium text-slate-800 dark:text-white">
                {q.question}
              </p>
              <p className="text-slate-500 dark:text-slate-300">
                👉 {q.answer}
              </p>
            </div>
          ))}
        </section>

        {/* 🔥 QUIZ */}
        <Quiz questions={data.quiz} />

        {/* 🔥 PRACTICE LINKS */}
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white">
            <Rocket className="w-5 h-5 text-indigo-500" />
            Practice Problems
          </h2>

          {data.practiceLink.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center 
              p-4 rounded-lg border 
              bg-slate-50 dark:bg-slate-800
              hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
            >
              <div>
                <p className="font-medium text-slate-800 dark:text-white">
                  Problem {idx + 1}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Practice this concept
                </p>
              </div>

              <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                Solve →
              </span>
            </a>
          ))}
        </section>

      </div>
    </>
  );
}