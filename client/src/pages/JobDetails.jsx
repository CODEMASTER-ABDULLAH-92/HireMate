import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/ContextApi";
import { useParams } from "react-router-dom";
import SimilarJobs from "../Component/SimilarJobs";
import JobSectionFooter from "../Component/JObSectionFooter";

const JobDetails = () => {
  const { jobData } = useContext(AppContext);
  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const currentJob = jobData.find((item) => item._id === id);
    setData(currentJob);

    if (currentJob) {
      // Filter for similar jobs based on jobName, location, or jobStatus
      const similarJobs = jobData.filter(
        (item) =>
          item._id !== currentJob._id && // Exclude the current job
          (item.jobName === currentJob.jobName ||
            item.location === currentJob.location ||
            item.jobStatus === currentJob.jobStatus)
      );
      setSimilar(similarJobs);
    }
  }, [id, jobData]); // Depend on id and jobData for re-fetching

  // Display loading state if data is not yet available
  if (!data) return <div className="text-center text-lg mt-10">Loading...</div>;

  // Logic to copy the current page URL to clipboard
  const shareBtnLogic = () => {
  };

  return (
    // Main container with responsive padding, max width, and auto margins for centering
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10">
      {/* Header Section: Adjusted gap and flex-wrap for better responsiveness */}
      <div className="flex justify-between items-center flex-wrap gap-4 sm:gap-6">
        <div>
          {/* Responsive font sizes for job name */}
          <p className="text-3xl sm:text-4xl md:text-5xl">{data.jobName}</p>
          {/* Breadcrumbs with responsive text size and spacing */}
          <div className="flex flex-wrap items-center text-sm sm:text-base text-gray-500 pt-2 space-x-1">
            <a href="/" className="hover:underline">Home</a>
            {/* Using simple text for the separator for better responsiveness */}
            <span>&gt;</span>
            <a href="/jobs" className="hover:underline">Careers</a>
            <span>&gt;</span>
            <a href={`/details/${data._id}`} className="text-indigo-600 ">
              {data.jobName}
            </a>
          </div>
        </div>

        {/* Right Side Buttons (Desktop/Tablet): Adjusted spacing and button styling */}
        <div className="hidden sm:flex flex-col items-end gap-3 sm:gap-4">
          <div className="flex gap-4 sm:gap-6">
            <button className="px-7 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 shadow-sm">Save</button>
            <button
              className="px-7 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 shadow-sm"
              onClick={shareBtnLogic}
            >
              Share
            </button>
          </div>
          {/* Single Apply button, responsive text and padding */}
          <button className="px-10 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white text-base md:text-lg transition-colors duration-200 shadow-md">
            Apply For This Position
          </button>
        </div>
      </div>

      <hr className="mt-8 mb-6" /> {/* Adjusted margin for the horizontal rule */}

      {/* Content Section: Flex layout for desktop, column for mobile, with increased gap */}
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Left Details Section: Adjusted width percentages for better balance */}
        <div className="w-full md:w-[65%] lg:w-[70%]">
          {/* Job Info Grid: Responsive grid columns for different screen sizes, improved padding and styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {[
              { title: "Job Type", value: data.jobType },
              { title: "Job Setup", value: data.jobStatus },
              { title: "Experience", value: data.experienceLevel },
              { title: "Salary", value: `$${data.salary}` },
            ].map((item, i) => (
              <div key={i} className="bg-green-100 py-4 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h1 className="text-xl  pb-2 text-green-800">{item.title}</h1>
                <p className="text-base text-gray-700">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Job Description, Responsibilities, Requirements: Increased vertical spacing between sections, improved text readability */}
          <div className="mt-8 space-y-8">
            <div>
              <h1 className="text-2xl  mb-3 text-green-700">Job Description:</h1>
              <p className="text-gray-700 leading-relaxed">{data.description}</p>
            </div>
            <div>
              <h1 className="text-2xl  mb-3 text-green-700">Job Responsibilities:</h1>
              <p className="text-gray-700 leading-relaxed">{data.responsibilities}</p>
            </div>
            <div>
              <h1 className="text-2xl  mb-3 text-green-700">Job Requirements:</h1>
              <p className="text-gray-700 leading-relaxed">{data.requirements}</p>
              <button className="px-10 py-3 mt-6 text-base md:text-lg rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 shadow-md">
                Apply For This Position
              </button>
            </div>
          </div>
        </div>

        {/* Right Side (Similar Jobs Sidebar - Desktop/Tablet):
            Uses `hidden md:block` for visibility control.
            `max-h-[calc(100vh-100px)]` makes it take available height dynamically,
            `sticky top-6` keeps it in view on scroll.
            Increased padding and improved title styling.
        */}
        <div className="w-full md:w-[45%] lg:w-[30%]  bg-green-100 py-2 px-2 space-y-3 rounded-lg shadow-sm max-h-[calc(100vh-100px)] overflow-y-auto hidden md:block sticky top-6">
          <h2 className="text-2xl  mb-5 text-green-800">Similar Jobs</h2>
          {similar.length > 0 ? (
            similar.map((job, index) => (
              // Ensure SimilarJobs component receives props it expects
              <SimilarJobs key={index} {...job} />
            ))
          ) : (
            <p className="text-gray-600">No similar jobs found.</p>
          )}
        </div>
      </div>

      {/* Mobile Similar Jobs Section:
          Uses `block md:hidden` for mobile-only visibility.
          `overflow-x-auto flex gap-4` for horizontal scrolling cards.
          Increased margin-top and spacing.
      */}
      <div className="block md:hidden mt-10 space-y-5">
        <h2 className="text-xl font-semibold mb-3 text-green-700">Similar Jobs</h2>
        <div className="overflow-x-auto flex gap-4 py-3">
          {similar.length > 0 ? (
            similar.map((job, index) => (
              <div key={index} className="min-w-[280px] sm:min-w-[320px] bg-green-100 p-4 rounded-lg shadow-sm">
                {/* SimilarJobs component with necessary props */}
                <SimilarJobs {...job} />
              </div>
            ))
          ) : (
            <p className="text-gray-600">No similar jobs found.</p>
          )}
        </div>
      </div>

      <div className="mt-12"> {/* Increased margin-top for the footer */}
        <JobSectionFooter />
      </div>
    </div>
  );
};

export default JobDetails;