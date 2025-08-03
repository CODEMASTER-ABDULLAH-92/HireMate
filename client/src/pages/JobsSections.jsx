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

  const [jobName,setJobName] = useState([]);

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

const toggleJobName = (e)=>{
  if (jobName.includes(e.target.value)) {
  }
}



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
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" value={"fulltime"} />
                <span className="text-lg hover:font-bold">Full Time</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" value={"parttime"} />
                <span className="text-lg hover:font-bold">Part Time</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Internship</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Freelance</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Contract</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Temporary</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Remote</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">On-site</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Hybrid</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Flexible</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div ref={locationRef} className="py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideLocation(!hideLocation)}>
              <h1 className=" text-xl">Location</h1>
              {hideLocation ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>

            <div className="overflow-y-scroll">
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Pakistan</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">India</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">USA</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">UK</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Canada</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Australia</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Germany</span>
              </div>
            </div>
          </div>

          {/* Job Category */}
          <div ref={categoryRef} className="py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setHideCategory(!hideCategory)}>
              <h1 className="text-xl">Category</h1>
              {hideCategory ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
            </div>

            <div className="overflow-y-scroll">
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Frontend Dev</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Backend Dev</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Full Stack</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">DevOps</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Business</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Data Scientist</span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <input type="checkbox" className="h-6 w-6" />
                <span className="text-lg hover:font-bold">Home Worker</span>
              </div>
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





//   // const [currentPage, setCurrentPage] = useState(1);
//   // const questionsPerPage = 6;

//   // // Calculate current questions to display
//   // const indexOfLastQuestion = currentPage * questionsPerPage;
//   // const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   // const currentQuestions = filteredQuestions.slice(
//   //   indexOfFirstQuestion,
//   //   indexOfLastQuestion
//   // );
//   // const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);





















// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { assets } from "../assets/assets";
// import Title from "../Components/Title";
// import ProductItem from "../Components/ProductItem";
// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(true);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const toogleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setCategory((prev) => [...prev, e.target.value]);
//     }
//   };
//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setSubCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   // After creating the categroy and set category fear=ture then create the apply Filter

//   const applyFilter = () => {
//     let productsCopy = products.slice();
//     if (showSearch && search) {
//       productsCopy = productsCopy.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         category.includes(item.category)
//       );
//     }
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter((item) =>
//         subCategory.includes(item.subCategory)
//       );
//     }
//     setFilterProducts(productsCopy);
//   };
  
//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch]);
//   useEffect(() => {
//     setFilterProducts(products);
//   }, []);

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//       {/* Filters  */}
//       <div className="min-w-60">
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className="my-2 text-xl flex items-center cursor-pointer gap-2"
//         >
//           Filters
//           <img
//             src={assets.dropdown_icon}
//             className={`h-3 sm:hidden transition-transform duration-1000 ${
//               showFilter ? "rotate-90" : ""
//             }`}
//             alt=""
//           />
//         </p>

//         {/* Category */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 sm:block transition-all duration-300 ease-in-out ${
//             showFilter
//               ? "max-h-[500px] opacity-100"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toogleCategory}
//                 value={"Men"}
//               />{" "}
//               Men
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toogleCategory}
//                 value={"Women"}
//               />{" "}
//               Women
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toogleCategory}
//                 value={"Kids"}
//               />{" "}
//               Kids
//             </p>
//           </div>
//         </div>

//         {/* Sub Category */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 my-5 sm:block transition-all duration-300 ease-in-out ${
//             showFilter
//               ? "max-h-[500px] opacity-100"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPE</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toggleSubCategory}
//                 value={"Topwear"}
//               />{" "}
//               TopWear
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toggleSubCategory}
//                 value={"Bottomwear"}
//               />{" "}
//               Bottomwear
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 onChange={toggleSubCategory}
//                 value={"Winterwear"}
//               />{" "}
//               Winterwear
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1">
//         <div className="flex justify-between text-base sm:text-2xl mb-4">
//           <Title text1={"ALL"} text2={"COLLECTION"} />
//           {/* Sort Feacture  */}
//           <select className="border-2 border-gray-300 text-sm px-2">
//             <option value="relavent">Sort by:relavent</option>
//             <option value="low-high">Sort by: low-high</option>
//             <option value="high-low">Sort by:high-low</option>
//           </select>
//         </div>

//         {/* Render the map products  */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//           {filterProducts.map((item, index) => {
//             return (
//               <ProductItem
//                 key={index}
//                 id={item._id}
//                 name={item.name}
//                 price={item.price}
//                 image={item.image}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;
