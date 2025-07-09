import React from "react";
import { Dot } from "lucide-react";
import {Link} from "react-router-dom"
import { useState } from "react";
const JobCard = ({ jobName, location, description, jobStatus, jobType, salary,
id})=> {

  const [isFilled, setIsFilled] = useState(false);
  const token = true;
  const [applyBtnText] = "Apply Now";
  return (
    <div className="py-5 px-6 bg-amber-300 rounded-xl h-[300px]">
      {/* upper Section  */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl pb-2">{jobName} </h1>
          <div className="flex">
            <li className="list-none">{jobStatus}</li>
            <li className="list-none flex justify-center items-center gap-0">
              <Dot />
{location}
            </li>
            <li className="list-none flex justify-center items-center gap-0">
              <Dot />
{jobType}
            </li>
          </div>
        </div>
        <svg
          onClick={() => setIsFilled(!isFilled)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer transition-all duration-200"
          viewBox="0 0 24 24"
          fill={isFilled ? "#4ade80" : "none"} // green-400 fill on click
          stroke="#4ade80" // outline remains
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <p>{description} </p>

      <div className="pt-5 flex justify-between items-center">
        <span className="text-3xl font-bold">${salary}<span className="text-xl">/month</span></span>
        <span>5h ago</span>
      </div>

      <div className="flex justify-between items-center pt-5">
        <Link  to={`/details/${id}`} className="px-4 w-[40%] text-center text-lg cursor-pointer rounded-md py-2 bg-green-500 ">View Details</Link>
        <Link to={token ? "": "/login"}  className="px-4 w-[40%] text-center text-lg rounded-md font-bold py-2 bg-green-500">Apply Now </Link>
      </div>
    </div>
  );
};

export default JobCard;
