import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "../assets/assets"
const JobSectionFooter = () => {
  const date = new Date();
  
  // Sample data for the sections
  const jobLocations = [
    "New York", "San Francisco", "Chicago", 
    "Austin", "Seattle", "Remote", "Boston",
    "Los Angeles", "Denver", "Miami"
  ];

  const jobStatuses = [
    "Full-time", "Part-time", "Contract",
    "Temporary", "Internship", "Freelance"
  ];

  const jobTypes = [
    "Remote", "On-site", "Hybrid",
    "Flexible", "Travel required"
  ];

  return (
    <div className='bg-[#191A23] text-gray-200 px-4 md:px-10 py-6 mt-20 rounded-t-3xl'>
      {/* Logo and Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5 gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={data.whiteLogo}
            className="h-6 w-6 hover:rotate-180 duration-1000"
            alt="HireMate Logo"
          />
          <p className="text-3xl font-semibold">HireMate.</p>
        </Link>

        <div className="flex items-center gap-4">
          <img className="h-8 w-8 hover:scale-110 cursor-pointer transition" src={data.fa} alt="Facebook" />
          <img className="h-8 w-8 hover:scale-110 cursor-pointer transition" src={data.linkdin} alt="LinkedIn" />
          <img className="h-8 w-8 hover:scale-110 cursor-pointer transition" src={data.tw} alt="Twitter" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {/* Contact Info */}
        <div>
          <span className="py-1 text-lg rounded-md px-2 text-gray-950 bg-[#B9FF66]">
            Contact Us:
          </span>
          <ul className="pt-4 space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@hiremate.com
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              555-567-8901
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              1234 Main St, Moonstone City
            </li>
          </ul>
        </div>

        {/* Job Locations */}
        <div>
          <span className="py-1 text-lg rounded-md px-2 text-gray-950 bg-[#B9FF66]">
            Job Locations:
          </span>
          <ul className="pt-4 grid grid-cols-2 gap-2">
            {jobLocations.map((location, index) => (
              <li key={index}>
                <Link to={`/jobs?location=${location.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-[#B9FF66] transition text-sm">
                  {location}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Status */}
        <div>
          <span className="py-1 text-lg rounded-md px-2 text-gray-950 bg-[#B9FF66]">
            Job Status:
          </span>
          <ul className="pt-4 space-y-2">
            {jobStatuses.map((status, index) => (
              <li key={index}>
                <Link to={`/jobs?status=${status.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-[#B9FF66] transition text-sm">
                  {status}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Type */}
        <div>
          <span className="py-1 text-lg rounded-md px-2 text-gray-950 bg-[#B9FF66]">
            Job Type:
          </span>
          <ul className="pt-4 space-y-2">
            {jobTypes.map((type, index) => (
              <li key={index}>
                <Link to={`/jobs?type=${type.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-[#B9FF66] transition text-sm">
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm">
        <p>&copy; {date.getFullYear()} HireMate. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-[#B9FF66] transition underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#B9FF66] transition underline">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-[#B9FF66] transition underline">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default JobSectionFooter