import React from "react";

import { Link } from "react-router-dom";
const CardDsa = ({
  minHeadding,
  heading,
  description,
  lessons,
  btnText,
  url,
}) => {
  return (
    <div className="max-w-[360px] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-[2px] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="bg-gray-900 rounded-xl h-full flex flex-col justify-between overflow-hidden">
        {/* Header with gradient accent */}
        <div className="relative overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 via-purple-800/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Floating particles/glow effect */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500 rounded-full filter blur-[80px] opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-amber-400 rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

          {/* Card top content */}
          <div className="relative h-[200px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/30 backdrop-blur-sm">
            {/* Main heading with dynamic gradient */}
            <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-text-shine">
              {minHeadding}
            </span>

            {/* Badge with glass morphism effect */}
            <div className="absolute bottom-1 left-6">
              <span className="bg-gray-900/80 text-white px-4 py-1.5 rounded-full text-xs font-medium border border-gray-700/50 backdrop-blur-md shadow-sm hover:bg-gray-800/90 transition-all duration-300 flex items-center gap-1">
                <span className="w-3 h-3 bg-green-500 rounded-full duration-500 animate-pulse"></span>
                {btnText}
              </span>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Footer with action */}
          <div className="mt-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center text-gray-400 text-xs">
              <svg
                className="w-4 h-4 mr-2 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>{lessons}</span>
            </div>

            <Link
              to={url}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-6 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              Start Learning
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDsa;
