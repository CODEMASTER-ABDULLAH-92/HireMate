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
      const similarJobs = jobData.filter(
        (item) =>
          item._id !== currentJob._id &&
          (item.jobName === currentJob.jobName ||
            item.location === currentJob.location ||
            item.jobStatus === currentJob.jobStatus)
      );
      setSimilar(similarJobs);
    }
  }, [id, jobData]);

  if (!data) return <div className="text-center text-lg mt-10">Loading...</div>;

  return (
    <div className="px-4 md:px-10 py-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Left Side */}
        <div>
          <p className="text-5xl font-bold">{data.jobName}</p>
          <div className="flex flex-wrap items-center space-x-1 text-sm text-gray-500 pt-2 font-medium">
            <a href="/">Home</a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1" />
            </svg>
            <a href="/jobs">Careers</a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1" />
            </svg>
            <a href={`/details/${data._id}`} className="text-indigo-500">
              {data.jobName}
            </a>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="sm:block hidden">
          <div className="flex gap-4 justify-between">
            <button className="px-7 py-2 rounded-md bg-green-500 text-white">Save</button>
            <button className="px-7 py-2 rounded-md bg-green-500 text-white">Share</button>
          </div>
          <button className="px-10 mt-4 py-2 hidden md:block text-lg rounded-md bg-green-500 text-white">
            Apply For This Position
          </button>
          <button className="px-10 mt-4 py-2 md:hidden block text-lg rounded-md bg-green-500 text-white">
            Apply
          </button>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-6">
        {/* Left Details */}
        <div className="w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-4">
            <div className="bg-green-100 py-2 rounded-md px-4">
              <h1 className="text-2xl font-bold pb-2">Job Type</h1>
              <p className="text-lg">{data.jobType}</p>
            </div>
            <div className="bg-green-100 py-2 rounded-md px-4">
              <h1 className="text-2xl font-bold pb-2">Job Setup</h1>
              <p className="text-lg">{data.jobStatus}</p>
            </div>
            <div className="bg-green-100 py-2 rounded-md px-4">
              <h1 className="text-2xl font-bold pb-2">Experience</h1>
              <p className="text-lg">{data.experienceLevel}</p>
            </div>
            <div className="bg-green-100 py-2 rounded-md px-4">
              <h1 className="text-2xl font-bold pb-2">Salary</h1>
              <p className="text-lg">${data.salary}</p>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-3xl font-bold mb-2">Job Description:</h1>
            <p>{data.description}</p>
          </div>

          <div className="pt-4">
            <h1 className="text-3xl font-bold mb-2">Job Responsibilities:</h1>
            <p>{data.responsibilities}</p>
          </div>

          <div className="pt-4">
            <h1 className="text-3xl font-bold mb-2">Job Requirements:</h1>
            <p>{data.requirements}</p>
            <button className="px-10 mt-4 py-2 text-lg rounded-md bg-green-500 text-white">
              Apply For This Position
            </button>
          </div>
        </div>

        {/* Right Side Similar Jobs */}
        <div className="w-full md:w-[29%] space-y-5 hide_At_md_device bg-green-100 p-4 h-screen overflow-y-scroll rounded-md">
          <h2 className="text-xl font-bold mb-4">Similar Jobs</h2>
          {similar.length > 0 ? (
            similar.map((job, index) => (
              <SimilarJobs
                key={index}
                id={job._id}
                jobName={job.jobName}
                location={job.location}
                description={job.description}
                jobStatus={job.jobStatus}
                jobType={job.jobType}
                salary={job.salary}
                experienceLevel={job.experienceLevel}
                responsibilities={job.responsibilities}
                requirements={job.requirements}
              />
            ))
          ) : (
            <p>No similar jobs found.</p>
          )}
        </div>
        


      </div>



      <div className="w-full mt-2 flex overflow-scroll hide_At_md_device2nd gap-5 items-center justify-evenly bg-green-100 p-4 rounded-md">
          {similar.length > 0 ? (
            similar.map((job, index) => (
              <SimilarJobs
                key={index}
                id={job._id}
                jobName={job.jobName}
                location={job.location}
                description={job.description}
                jobStatus={job.jobStatus}
                jobType={job.jobType}
                salary={job.salary}
                experienceLevel={job.experienceLevel}
                responsibilities={job.responsibilities}
                requirements={job.requirements}
              />
            ))
          ) : (
            <p>No similar jobs found.</p>
          )}
        </div>
<JobSectionFooter/>
    </div>
  );
};

export default JobDetails;
