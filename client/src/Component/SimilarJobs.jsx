import React, { useState } from "react";
import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

const SimilarJobs = ({
  jobName,
  location,
  description,
  jobStatus,
  jobType,
  salary,
  id,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="py-5 px-4 bg-amber-300 rounded-xl min-w-[250px] h-[250px] flex flex-col justify-between transition-all duration-300">
      {/* Top */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold leading-tight">{jobName}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-800 gap-x-2 gap-y-1 pt-1">
            <li className="list-none">{jobStatus}</li>
            <li className="list-none flex items-center">
              <Dot className="w-4 h-4" />
              {location}
            </li>
            <li className="list-none flex items-center">
              <Dot className="w-4 h-4" />
              {jobType}
            </li>
          </div>
        </div>
        <svg
          onClick={() => setIsFilled(!isFilled)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer transition-all duration-200"
          viewBox="0 0 24 24"
          fill={isFilled ? "#4ade80" : "none"}
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Description */}
      <p className="text-sm pt-2 md:block hidden line-clamp-2">{description}</p>

      {/* Salary and Time */}
      <div className="pt-3 flex justify-between items-center text-sm">
        <span className="text-xl font-bold">
          ${salary}
          <span className="text-sm font-normal">/month</span>
        </span>
        <span className="text-gray-700">5h ago</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center pt-4 gap-2">
        <Link
          to={`/details/${id}`}
          className="px-2 w-1/2 text-center text-sm font-medium py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
        >
          View
        </Link>
        <button className="px-2 w-1/2 text-sm font-bold py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SimilarJobs;
