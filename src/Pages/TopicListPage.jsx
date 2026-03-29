import React from "react";
import { Link } from "react-router-dom";
import { topics } from "../data/topics.js";

import { BookOpen } from "lucide-react";

export default function TopicListPage({ filter }) {
  let filteredTopics = [];
  let title = "";

  if (filter === "ds") {
    filteredTopics = topics.filter((t) => t.type === "data-structure");
    title = "Explore Data Structures";
  } else if (filter === "al") {
    filteredTopics = topics.filter((t) => t.type === "algorithm");
    title = "Explore Algorithms";
  } else if (filter === "all") {
    filteredTopics = topics;
    title = "Explore DSA Topics";
  }

  // Type Tag
  const typeTag = (type) => {
    if (type === "data-structure")
      return (
        <span className="text-xs bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 px-2 py-1 rounded-full font-semibold">
          Data Structure
        </span>
      );
    if (type === "algorithm")
      return (
        <span className="text-xs bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-semibold">
          Algorithm
        </span>
      );
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100 flex items-center justify-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-500" />
        {title}
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap items-center">


        <Link
          to="/topics"
          className={`px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white font-medium hover:bg-indigo-200 dark:hover:bg-indigo-600 transition ${
            filter === "all" ? "ring-2 ring-indigo-500" : ""
          }`}
        >
          All
        </Link>

        <Link
          to="/topics/data-structures"
          className={`px-4 py-2 rounded-full bg-green-100 dark:bg-green-700 text-green-800 dark:text-white font-medium hover:bg-green-200 dark:hover:bg-green-600 transition ${
            filter === "ds" ? "ring-2 ring-green-500" : ""
          }`}
        >
          Data Structures
        </Link>

        <Link
          to="/topics/algorithms"
          className={`px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white font-medium hover:bg-blue-200 dark:hover:bg-blue-600 transition ${
            filter === "al" ? "ring-2 ring-blue-500" : ""
          }`}
        >
          Algorithms
        </Link>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic, index) => {
          const Icon = topic.icon;

          return (
            <Link
              key={index}
              to={topic.path}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="mb-3">
                <Icon className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {topic.name}
              </h2>

              {/* Type Tag */}
              <div className="mt-2">{typeTag(topic.type)}</div>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {topic.desc}
              </p>

              {/* CTA */}
              <div className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                View Topic →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}