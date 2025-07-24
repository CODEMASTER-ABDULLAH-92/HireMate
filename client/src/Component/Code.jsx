import React, { useState } from "react";

const Code = ({
  text = "",
  heading = "",
  language = "cpp",
  problemHeading,
}) => {
  const [copyStatus, setCopyStatus] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br custom-font  from-gray-900 to-black p-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500 mb-4">
            {heading || "Code Display"}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto"></div>
        </div>
        {/* Main Content */}
        <div className="space-y-8">
          {/* Code Block */}
          <div className="relative custom-font group">
            <div className="absolute -inset-1 custom-font bg-gradient-to-r from-green-600 to-cyan-500 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
              <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm custom-font text-gray-400">
                  {problemHeading}
                </div>
                <button
                  onClick={copyToClipboard}
                  disabled={!text}
                  className={`ml-auto px-3 py-1 text-xs rounded-md font-medium transition-all flex items-center ${
                    copyStatus === "Copied!"
                      ? "bg-green-600/90 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                  } ${!text ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  {copyStatus}
                </button>
              </div>

              {/* Code Display */}
              <div className="p-4 custom-font overflow-auto">
                {text ? (
                  <pre className="font-mono text-sm sm:text-base leading-relaxed whitespace-pre-wrap text-gray-100">
                    <code className={`language-${language} custom-font`} >{text}</code>
                  </pre>
                ) : (
                  <div className="text-center py-8 text-gray-400 italic">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    No code to display
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
