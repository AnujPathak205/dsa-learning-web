import { useState } from "react";

export default function Quiz({ questions }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // Store user's selections
  const [showResult, setShowResult] = useState(false);

  const totalMarks = questions.length * 5;

  const handleStart = () => {
    setStarted(true);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleNext = () => {
    if (selected === null) return; // mandatory to select
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
    <section className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-md transition mt-6">

      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        📝 Quiz
      </h2>

      {!started && !showResult && (
        <div className="flex justify-center">
          <button
            onClick={handleStart}
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Start Quiz
          </button>
        </div>
      )}
      {started && !showResult && (
        <div className="flex flex-col gap-5">
          <div className="text-slate-800 dark:text-slate-100 font-semibold text-lg">
            Q{current + 1}: {questions[current].question}
          </div>

          <div className="flex flex-col gap-3">
            {questions[current].options.map((opt, idx) => {
              const isSelected = selected === opt;
              return (
                <button
                  key={idx}
                  onClick={() => setSelected(opt)}
                  className={`cursor-pointer  text-white px-4 py-3 rounded-xl font-medium transition
                    ${isSelected
                      ? "bg-green-500 dark:bg-green-600 scale-102 shadow-lg"
                      : "bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-600 dark:to-purple-700 hover:scale-102"}
                  `}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="cursor-pointer self-end bg-orange-400 dark:bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition mt-4"
          >
            {current + 1 === questions.length ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      )}

      {showResult && (
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">🎉 Quiz Completed!</h3>
            <p className="text-lg text-slate-800 dark:text-slate-100 mt-2">
              Your Score: <span className="font-bold">{score}/{totalMarks}</span>
            </p>
          </div>

          {/* Detailed Result */}
          <div className="flex flex-col gap-4">
            {answers.map(({ question, selected, correct }, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                <div className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Q{idx + 1}: {question.question}
                </div>
                <div className="flex flex-col gap-2">
                  {question.options.map((opt, i) => {
                    const isCorrect = opt === question.answer;
                    const isSelectedWrong = opt === selected && !isCorrect;
                    return (
                      <div
                        key={i}
                        className={`px-4 py-2 rounded-md font-medium 
                          ${isCorrect ? "bg-green-500 text-white" : ""}
                          ${isSelectedWrong ? "bg-red-500 text-white" : ""}
                          ${!isCorrect && !isSelectedWrong ? "bg-gray-300 dark:bg-slate-700 text-slate-900 dark:text-white" : ""}
                        `}
                      >
                        {opt} {isCorrect && "(Correct)"}
                        {isSelectedWrong && " (Your choice)"}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleStart}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}