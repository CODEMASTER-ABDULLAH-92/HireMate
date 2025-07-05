import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import JobCard from "../Component/JobCard";
import { jobData } from "../assets/assets";
import JObSectionFooter from "../Component/JObSectionFooter"
const JobsSections = () => {
  const [hideJob, setHideJob] = useState(true);
  const [hideLocation, setHideLocation] = useState(false);
  const [hideJobCategory, setHideJobCategory] = useState(false);
  
  const jobTypeRef = useRef(null);
  const locationRef = useRef(null);
  const jobCategoryRef = useRef(null);

  // GSAP Animation for Job Type section
  useGSAP(() => {
    if (jobTypeRef.current) {
      gsap.fromTo(
        jobTypeRef.current.querySelector('div:last-child'),
        {
          height: 0,
          opacity: 0,
          marginTop: 0
        },
        {
          height: hideJob ? 200 : 0,
          opacity: hideJob ? 1 : 0,
          marginTop: hideJob ? 12 : 0,
          duration: 0.5,
          ease: "linear"
        }
      );
    }
  }, [hideJob]);

  // GSAP Animation for Location section
  useGSAP(() => {
    if (locationRef.current) {
      gsap.fromTo(
        locationRef.current.querySelector('div:last-child'),
        {
          height: 0,
          opacity: 0,
          marginTop: 0
        },
        {
          height: hideLocation ? 200 : 0,
          opacity: hideLocation ? 1 : 0,
          marginTop: hideLocation ? 12 : 0,
          duration: 0.5,
          ease: "power2.inOut"
        }
      );
    }
  }, [hideLocation]);

  // GSAP Animation for Job Category section
  useGSAP(() => {
    if (jobCategoryRef.current) {
      gsap.fromTo(
        jobCategoryRef.current.querySelector('div:last-child'),
        {
          height: 0,
          opacity: 0,
          marginTop: 0
        },
        {
          height: hideJobCategory ? 200 : 0,
          opacity: hideJobCategory ? 1 : 0,
          marginTop: hideJobCategory ? 0 : 0,
          duration: 0.5,
          ease: "power2.inOut"
        }
      );
    }
  }, [hideJobCategory]);

  return (
    <>
    <div className="flex justify-between gap-5">
      {/* Filter Section */}
      <div className="md:min-w-[23%] h-[100%] bg-green-500 py-3 px-3 rounded-lg">
        {/* Job Type Filter */}
        <div ref={jobTypeRef}>
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideJob(!hideJob)}>
            <h1 className="font-bold cursor-pointer text-xl">Job Type</h1>
            {hideJob ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </div>

          <div className="h-[200px] overflow-y-auto" style={{ overflow: 'hidden' }}>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Pakistan (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">India (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">USA (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">UK (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Canada (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Australia (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Germany (564)</span>
            </div>
          </div>
        </div>

        {/* Location Filter */}
        <div ref={locationRef} className="py-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideLocation(!hideLocation)}>
            <h1 className="font-bold text-xl">Job Location</h1>
            {hideLocation ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </div>

          <div className="h-[200px] overflow-y-auto" style={{ overflow: 'hidden' }}>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Pakistan (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">India (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">USA (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">UK (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Canada (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Australia (564)</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Germany (564)</span>
            </div>
          </div>
        </div>

        {/* Job Category Filter */}
        <div ref={jobCategoryRef} className="py-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideJobCategory(!hideJobCategory)}>
            <h1 className="font-bold text-xl">Job</h1>
            {hideJobCategory ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </div>

          <div className="h-[200px] overflow-y-auto" style={{ overflow: 'hidden' }}>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Frontend Dev</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Backend Dev</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Full Stack</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">DevOps</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Business</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Home Worker</span>
            </div>
            <div className="flex justify-start items-center gap-2 pt-3">
              <input type="checkbox" className="h-6 w-6" />
              <span className="text-lg hover:font-bold">Data Scientist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-2 gap-5">

        {
          jobData.map((item,index)=>{
            return <JobCard key={index} id={item._id} jobName={item.jobName} location={item.location} description={item.description} jobStatus={item.jobStatus} jobType={item.jobType} salary={item.salary}
            experienceLevel={item.experienceLevel} responsibilities ={item.responsibilities} requirements={item.requirements} />
          })
        }
      </div>
    </div>

      <JObSectionFooter/>
    </>
  );
};

export default JobsSections;