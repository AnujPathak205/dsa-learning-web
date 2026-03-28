import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";

export default function Code({code}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };


  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Code</h2>
      </div>

      <pre className="border p-4 rounded bg-gray-900 text-green-400 overflow-x-auto text-sm cursor-text">
        <div className="flex  justify-between">
          <span className="text-white">java</span>
          <button
            onClick={handleCopy}
            className="text-sm text-white px-3 py-1 rounded cursor-pointer"
          >
            {copied ? <LuCopyCheck /> : <FaRegCopy />}
          </button>
        </div>
        {code}
      </pre>
    </section>
  )
}
