import Code from "./Code";

export default function TopicContent({ data }) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center">
        {data.title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center">
        {data.description}
      </p>

      {/* Explanation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Explanation</h2>
        <div className="border p-4 rounded bg-gray-50 whitespace-pre-line">
          {data.explanation}
        </div>
      </section>

      {/* Operations */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Operations</h2>
        <ul className="border p-4 rounded bg-gray-50 list-disc pl-5">
          {data.operations.map((op, index) => (
            <li key={index}>
              <strong>{op.name}:</strong> {op.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Complexity */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Complexity</h2>
        <div className="border p-4 rounded bg-gray-50 list-disc pl-5">
          {data.complexity.map((op, index) => (
            <li key={index}>
              <strong>{op.opName}:</strong> {op.TC}
            </li>
          ))}
        </div>
      </section>

      {/* Code */}
      <Code code={data.code}/>

      {/* Real Life Example */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Real Life Example</h2>
        <div className="border p-4 rounded bg-gray-50 whitespace-pre-line">
          {data.realLifeExample}
        </div>
      </section>

      {/* Questions */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Practice Questions</h2>
        <div className="border p-4 rounded bg-gray-50 space-y-3">
          {data.questions.map((q, index) => (
            <div key={index}>
              <p className="font-medium">{q.question}</p>
              <p className="text-gray-600">👉 {q.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Link */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Practice</h2>
        <a
          href={data.practiceLink}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Solve on LeetCode
        </a>
      </section>

    </div>
  );
}