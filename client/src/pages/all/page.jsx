import {asset} from "../../assets/assets"
import { HelpCircle } from "lucide-react";
// import Image from "next/image";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Page = () => {
  const [filteredQuestions, setFilteredQuestions] = useState(asset);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 30;

  // Calculate current questions to display
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  // Filter handlers
  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.easy === true));
      setCurrentPage(1); // Reset to first page when filtering
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterMidium = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.mid === true));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterHard = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.hard === true));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterlove = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.love === true));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterStriverPattern = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.striver === true));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterArray = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.Dsa === "array"));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  const handleFilterString = (e) => {
    if (e.target.checked) {
      setFilteredQuestions(asset.filter((item) => item.Dsa === "string"));
      setCurrentPage(1);
    } else {
      setFilteredQuestions(asset);
    }
  };

  // Pagination controls
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  useEffect(() => {
    setFilteredQuestions(asset);
    setCurrentPage(1); // Reset to first page when asset changes
  }, [asset]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
        All DSA Questions
      </h1>

      {/* Container with responsive layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {/* Sidebar Filter (unchanged) */}

        <div className="w-full h-full md:w-[390px] rounded-md p-4 bg-gray-700 text-white">
          {/* Question Type Section */}
          <h1 className="text-xl font-mono font-medium mb-2">Question Type:</h1>
          <div className="space-y-2">
            <label
              htmlFor="easy"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="easy"
                onChange={handleFilterChange}
                className="w-[18px] h-[18px] accent-green-500"
              />
              Easy
            </label>

            {/*  checkboxes for Medium and Hard (not functional) */}
            <label
              htmlFor="medium"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="medium"
                onChange={handleFilterMidium}
                className="w-[18px] h-[18px] accent-yellow-500"
              />
              Medium
            </label>

            <label
              htmlFor="hard"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="hard"
                onChange={handleFilterHard}
                className="w-[18px] h-[18px] accent-blue-500"
              />
              Hard
            </label>
          </div>

          {/* Sheets Section ( for now) */}
          <h1 className="text-xl font-mono font-medium mt-4 mb-2">Sheets:</h1>
          <div className="space-y-2">
            <label
              htmlFor="love-babbar"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="love-babbar"
                onChange={handleFilterlove}
                className="w-[18px] h-[18px] accent-green-500"
              />
              Love Babbar
            </label>

            {/* <label htmlFor="striver" className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="striver"
                
                className="w-[18px] h-[18px] accent-red-500"
              />
              Striver
            </label> */}

            <label
              htmlFor="striver-pattern"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="striver-pattern"
                onChange={handleFilterStriverPattern}
                className="w-[18px] h-[18px] accent-blue-500"
              />
              Striver Pattern
            </label>
          </div>

          {/* DSA Categories ( for now) */}
          <h1 className="text-xl font-mono font-medium mt-4 mb-2">DSA:</h1>
          <div className="space-y-2">
            <label
              htmlFor="array"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="array"
                onChange={handleFilterArray}
                className="w-[18px] h-[18px] accent-yellow-500"
              />
              Array
            </label>

            <label
              htmlFor="string"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="string"
                onChange={handleFilterString}
                className="w-[18px] h-[18px] accent-green-500"
              />
              String
            </label>

            <label
              htmlFor="hashmap"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="hashmap"
                className="w-[18px] h-[18px] accent-red-500"
              />
              HashMap
            </label>
          </div>
        </div>

        {/* Questions List */}
        <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
          {currentQuestions.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 border-b border-gray-700 hover:bg-gray-700 rounded-lg transition-all"
            >
              <HelpCircle className="text-orange-400" size={24} />
              <Link to={item._id} className={`text-lg font-medium`}>
                {item.heading}
              </Link>
              {/* <div className="flex justify-end items-end">
                {item.image && (
                  <Image
                    alt={"GFG or Leetcode Logo"}
                    className="bg-gray-900/85 p-1.5 rounded-xs h-8 w-8"
                    src={item.image}
                    width={24}
                    height={24}
                  />
                )}
              </div> */}
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === number
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
