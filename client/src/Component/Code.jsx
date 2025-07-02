"use client";
import React, { useState } from "react";

const Code = ({ text = "", heading = "", language = "cpp" }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-2">
            {heading || "Code Display"}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            {text ? "Your code snippet" : "Paste your code to begin"}
          </p>
        </div>

        {/* Code Container */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700 transition-all hover:shadow-2xl hover:border-teal-400/30">
          {/* Toolbar */}
          <div className="flex justify-between items-center p-3 bg-gray-900/50 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-400 hidden sm:inline">
                {language.toUpperCase()}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={copyToClipboard}
                disabled={!text}
                className={`px-3 py-1.5 text-sm rounded-md font-medium transition-all flex items-center ${
                  copyStatus === "Copied!"
                    ? "bg-green-600/90 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                } ${!text ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
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
          </div>

          {/* Code Display */}
          <div className="p-4 overflow-auto -tracking-tighter max-h-[100%]">
            {text ? (
              <pre className="font-mono text-lg sm:text-[17px] leading-relaxed whitespace-pre-wrap text-gray-100">
                <code className={`language-${language} -tracking-tighter text-xl md:text-2xl text-amber-100`}>{text}</code>
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

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            Click the copy button to copy the code to your clipboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;