import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import JobCard from "../Component/JobCard";
import { jobData } from "../assets/assets";
import JObSectionFooter from "../Component/JObSectionFooter";

const JobsSections = () => {
  const [hideJobType, setHideJobType] = useState(true);
  const [hideLocation, setHideLocation] = useState(false);
  const [hideCategory, setHideCategory] = useState(false);

  const jobTypeRef = useRef(null);
  const locationRef = useRef(null);
  const categoryRef = useRef(null);

  // Job Type Animation
  useGSAP(() => {
    if (jobTypeRef.current) {
      gsap.fromTo(
        jobTypeRef.current.querySelector("div:last-child"),
        { height: 0, opacity: 0, marginTop: 0 },
        {
          height: hideJobType ? 200 : 0,
          opacity: hideJobType ? 1 : 0,
          marginTop: hideJobType ? 12 : 0,
          duration: 0.5,
          ease: "linear",
        }
      );
    }
  }, [hideJobType]);

  // Location Animation
  useGSAP(() => {
    if (locationRef.current) {
      gsap.fromTo(
        locationRef.current.querySelector("div:last-child"),
        { height: 0, opacity: 0, marginTop: 0 },
        {
          height: hideLocation ? 200 : 0,
          opacity: hideLocation ? 1 : 0,
          marginTop: hideLocation ? 12 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }
  }, [hideLocation]);

  // Job Category Animation
  useGSAP(() => {
    if (categoryRef.current) {
      gsap.fromTo(
        categoryRef.current.querySelector("div:last-child"),
        { height: 0, opacity: 0, marginTop: 0 },
        {
          height: hideCategory ? 200 : 0,
          opacity: hideCategory ? 1 : 0,
          marginTop: hideCategory ? 12 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }
  }, [hideCategory]);
  return (
    <>
      <div className="flex justify-between gap-5">
        {/* Filters */}
        <div className="md:min-w-[23%] sm:block hidden bg-green-500 py-3 px-3 rounded-lg h-full">
          {/* Job Type */}
          <div ref={jobTypeRef}>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideJobType(!hideJobType)}>
              <h1 className=" text-xl">Job Type</h1>
              {hideJobType ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>

            <div className="overflow-y-scroll">
              {["Full Time", "Part Time", "Internship", "Freelance", "Contract", "Temporary", "Remote","On-site", "Hybrid","Flexible", ].map((type, i) => (
                <div className="flex items-center gap-2 pt-3" key={i}>
                  <input type="checkbox" className="h-6 w-6" />
                  <span className="text-lg hover:font-bold">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div ref={locationRef} className="py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideLocation(!hideLocation)}>
              <h1 className=" text-xl">Location</h1>
              {hideLocation ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>

            <div className="overflow-y-scroll">
              {["Pakistan", "India", "USA", "UK", "Canada", "Australia", "Germany"].map((loc, i) => (
                <div className="flex items-center gap-2 pt-3" key={i}>
                  <input type="checkbox" className="h-6 w-6" />
                  <span className="text-lg hover:font-bold">{loc}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Job Category */}
          <div ref={categoryRef} className="py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideCategory(!hideCategory)}>
              <h1 className=" text-xl">Category</h1>
              {hideCategory ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>

            <div className="overflow-y-scroll">
              {["Frontend Dev", "Backend Dev", "Full Stack", "DevOps", "Business", "Data Scientist", "Home Worker"].map((cat, i) => (
                <div className="flex items-center gap-2 pt-3" key={i}>
                  <input type="checkbox" className="h-6 w-6" />
                  <span className="text-lg hover:font-bold">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {jobData.map((item, index) => (
            <JobCard
              key={index}
              id={item._id}
              jobName={item.jobName}
              location={item.location}
              description={item.description}
              jobStatus={item.jobStatus}
              jobType={item.jobType}
              salary={item.salary}
              experienceLevel={item.experienceLevel}
              responsibilities={item.responsibilities}
              requirements={item.requirements}
            />
          ))}
        </div>
      </div>

      <JObSectionFooter />
    </>
  );
};

export default JobsSections;





  // const [currentPage, setCurrentPage] = useState(1);
  // const questionsPerPage = 6;

  // // Calculate current questions to display
  // const indexOfLastQuestion = currentPage * questionsPerPage;
  // const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  // const currentQuestions = filteredQuestions.slice(
  //   indexOfFirstQuestion,
  //   indexOfLastQuestion
  // );
  // const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

