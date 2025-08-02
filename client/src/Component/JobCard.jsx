import React, { useContext, useState } from "react";
import { Dot } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/ContextApi";
import toast from "react-hot-toast";

const JobCard = ({ jobName, location, description, jobStatus, jobType, salary, id }) => {
  const [isFilled, setIsFilled] = useState(false);
  const { userProfile, token } = useContext(AppContext);
  const navigate = useNavigate();

  const checkUserStatus = () => {
    if (!token) {
      toast.error("Login First");
      return navigate("/login");
    }
    if (!userProfile) {
      toast.error("Complete Your Profile for Job Apply");
      return navigate("/personalData");
    }
    // ✅ If user is authenticated and profile completed, navigate to apply page
    toast.success("Thanks for Applying this Job");
    // navigate(`/apply/${id}`);
  };

  return (
    <div className="bg-amber-300 rounded-xl p-6 max-h-[350px] flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl mb-2">{jobName}</h1>
            <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <li className="list-none">{jobStatus}</li>
              <li className="list-none flex items-center">
                <Dot className="w-6 h-6" />
                {location}
              </li>
              <li className="list-none flex items-center">
                <Dot className="w-4 h-4" />
                {jobType}
              </li>
            </ul>
          </div>

          {/* Bookmark Icon */}
          <svg
            onClick={() => setIsFilled(!isFilled)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer transition-all duration-200"
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
        <p className="text-gray-800 text-sm mb-4 line-clamp-3">{description}</p>
      </div>

      {/* Salary and Time */}
      <div className="flex justify-between items-center text-gray-800 mb-4">
        <span className="text-xl font-bold">
          ${salary}
          <span className="text-base font-[400] "> /month</span>
        </span>
        <span className="text-sm">5h ago</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-3">
        <Link
          to={`/details/${id}`}
          className="w-1/2 text-center text-white bg-green-600 hover:bg-green-700 rounded-md py-2 text-sm transition"
        >
          View Details
        </Link>

        <button
          onClick={checkUserStatus}
          className="w-1/2 text-center text-white bg-green-600 hover:bg-green-700 rounded-md py-2 text-sm transition"
        >
          {token && userProfile ? "Easy Apply" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
