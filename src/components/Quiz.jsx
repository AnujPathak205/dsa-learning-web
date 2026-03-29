import { useState } from "react";
import { PlayCircle, XCircle, CheckCircle, RotateCcw } from "lucide-react";

export default function Quiz({ questions }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const totalMarks = questions.length * 5;

  const resetQuiz = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleNext = () => {
    if (selected === null) return;

    const correct = selected === questions[current].answer;
    if (correct) setScore((prev) => prev + 5);

    setAnswers([...answers, { question: questions[current], selected, correct }]);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-8 shadow-md transition my-8">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <CheckCircle className="w-6 h-6 text-indigo-500" />
        Quiz
      </h2>

      {/* Start */}
      {!started && !showResult && (
        <div className="flex justify-center">
          <button
            onClick={handleStart}
            className="flex items-center  cursor-pointer gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <PlayCircle size={18} />
            Start Quiz
          </button>
        </div>
      )}

      {/* Quiz */}
      {started && !showResult && (
        <div className="flex flex-col gap-6">

          {/* Question */}
          <div className="flex justify-between items-center">
            <div className="text-slate-800 dark:text-slate-100 font-semibold text-lg">
              Q{current + 1}: {questions[current].question}
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              +5 marks
            </span>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {questions[current].options.map((opt, idx) => {
              const isSelected = selected === opt;

              return (
                <button
                  key={idx}
                  onClick={() => setSelected(opt)}
                  className={`text-left px-4 py-3 rounded-lg border font-medium transition  cursor-pointer
                    ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                    }
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex justify-between mt-4">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <XCircle size={18} />
              Quit
            </button>

            <button
              onClick={handleNext}
              className=" cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              {current + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}

      {/* Result */}
      {showResult && (
        <div className="flex flex-col gap-6">

          {/* Score */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Quiz Completed
            </h3>
            <p className="text-lg mt-2 text-slate-700 dark:text-slate-300">
              Score: <span className="font-bold">{score}/{totalMarks}</span>
            </p>
          </div>

          {/* Detailed */}
          <div className="flex flex-col gap-4">
            {answers.map(({ question, selected, correct }, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
              >
                <div className="font-semibold mb-2 text-slate-800 dark:text-white">
                  Q{idx + 1}: {question.question}
                </div>

                <div className="flex flex-col gap-2">
                  {question.options.map((opt, i) => {
                    const isCorrect = opt === question.answer;
                    const isSelectedWrong = opt === selected && !isCorrect;

                    return (
                      <div
                        key={i}
                        className={`px-3 py-2 rounded-md text-sm font-medium
                          ${
                            isCorrect
                              ? "bg-green-500 text-white"
                              : isSelectedWrong
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-white"
                          }
                        `}
                      >
                        {opt}
                        {isCorrect && " (Correct)"}
                        {isSelectedWrong && " (Your choice)"}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Retry */}
          <div className="flex justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              <RotateCcw size={18} />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}