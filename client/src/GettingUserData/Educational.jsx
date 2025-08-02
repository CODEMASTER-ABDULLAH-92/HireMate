// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaSchool,
//   FaUniversity,
//   FaGraduationCap,
//   FaBook,
//   FaPercentage,
//   FaChevronLeft,
//   FaChevronRight,
//   FaSave,
//   FaCalendarAlt,
//   FaClipboardList
// } from "react-icons/fa";

// const Educational = () => {
//   const [formData, setFormData] = useState({
//     /* School Education */
//     degreeLevel: "",
//     schoolName: "",
//     degreeDiscipline: "",
//     obtainedMarks: "",
//     totalMarks: "",
//     percentage: "",
//     /* College Education */
//     collegedegreeLevel: "",
//     collegesName: "",
//     collegeDegreeDiscipline: "",
//     collegeObtainedMarks: "",
//     collegeTotalMarks: "",
//     collegePercentage: "",
//     /* University Education */
//     universityDegreeLevel: "",
//     universityName: "",
//     universityCurrentSemeter: "",
//     universityDegreeDiscipline: "",
//     universityObtainedCGPA: "",
//     universityTotalCGPA: "",
//     universityPercentage: ""
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Form submission logic would go here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 flex items-center justify-center gap-3">
//             <FaGraduationCap className="text-indigo-600" />
//             Educational Information
//           </h1>
//           <p className="text-lg text-indigo-600 mt-2">
//             Please provide your complete academic history
//           </p>
//         </div>

//         <form onSubmit={onSubmitHandler} className="space-y-8">
//           {/* Matric/O-Level Section */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-blue-500">
//             <div className="bg-blue-50 px-6 py-4 flex items-center gap-4">
//               <div className="bg-blue-100 p-3 rounded-full">
//                 <FaSchool className="text-blue-600 text-xl" />
//               </div>
//               <h2 className="text-2xl font-semibold text-blue-800">
//                 Secondary Education
//               </h2>
//             </div>
//             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Program Title */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaBook className="text-blue-500" />
//                     Program Title <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <select 
//                   name="degreeLevel"
//                   value={formData.degreeLevel}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                   required
//                 >
//                   <option value="">Select Degree</option>
//                   <option value="Matriculation">Matriculation</option>
//                   <option value="O-Level">O-Level</option>
//                 </select>
//               </div>

//               {/* Institution Name */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaUniversity className="text-blue-500" />
//                     Institution Name <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="schoolName"
//                   value={formData.schoolName}
//                   onChange={onChangeHandler}
//                   placeholder="Enter institution name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>

//               {/* Discipline */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaClipboardList className="text-blue-500" />
//                     Discipline <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <select 
//                   name="degreeDiscipline"
//                   value={formData.degreeDiscipline}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                   required
//                 >
//                   <option value="">Select Discipline</option>
//                   <option value="Science">Science</option>
//                   <option value="Arts">Arts</option>
//                 </select>
//               </div>

//               {/* Marks Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Obtained Marks <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="obtainedMarks"
//                     value={formData.obtainedMarks}
//                     onChange={onChangeHandler}
//                     placeholder="Obtained marks"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Total Marks <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="totalMarks"
//                     value={formData.totalMarks}
//                     onChange={onChangeHandler}
//                     placeholder="Total marks"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Percentage */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaPercentage className="text-blue-500" />
//                     Percentage <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="percentage"
//                   value={formData.percentage}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Intermediate/A-Level Section */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-green-500">
//             <div className="bg-green-50 px-6 py-4 flex items-center gap-4">
//               <div className="bg-green-100 p-3 rounded-full">
//                 <FaUniversity className="text-green-600 text-xl" />
//               </div>
//               <h2 className="text-2xl font-semibold text-green-800">
//                 Higher Secondary Education
//               </h2>
//             </div>
//             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Program Title */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaBook className="text-green-500" />
//                     Program Title <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <select 
//                   name="collegedegreeLevel"
//                   value={formData.collegedegreeLevel}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                   required
//                 >
//                   <option value="">Select Degree</option>
//                   <option value="Intermediate">Intermediate</option>
//                   <option value="A-Level">A-Level</option>
//                 </select>
//               </div>

//               {/* Institution Name */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaUniversity className="text-green-500" />
//                     Institution Name <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="collegesName"
//                   value={formData.collegesName}
//                   onChange={onChangeHandler}
//                   placeholder="Enter institution name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>

//               {/* Discipline */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaClipboardList className="text-green-500" />
//                     Discipline <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <select 
//                   name="collegeDegreeDiscipline"
//                   value={formData.collegeDegreeDiscipline}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                   required
//                 >
//                   <option value="">Select Discipline</option>
//                   <option value="Pre-Medical">Pre-Medical</option>
//                   <option value="Pre-Engineering">Pre-Engineering</option>
//                   <option value="Commerce">Commerce</option>
//                   <option value="Arts">Arts</option>
//                 </select>
//               </div>

//               {/* Marks Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Obtained Marks <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="collegeObtainedMarks"
//                     value={formData.collegeObtainedMarks}
//                     onChange={onChangeHandler}
//                     placeholder="Obtained marks"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Total Marks <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="collegeTotalMarks"
//                     value={formData.collegeTotalMarks}
//                     onChange={onChangeHandler}
//                     placeholder="Total marks"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Percentage */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaPercentage className="text-green-500" />
//                     Percentage <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="collegePercentage"
//                   value={formData.collegePercentage}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Undergraduate Section */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-purple-500">
//             <div className="bg-purple-50 px-6 py-4 flex items-center gap-4">
//               <div className="bg-purple-100 p-3 rounded-full">
//                 <FaGraduationCap className="text-purple-600 text-xl" />
//               </div>
//               <h2 className="text-2xl font-semibold text-purple-800">
//                 Higher Education
//               </h2>
//             </div>
//             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Degree Level */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaBook className="text-purple-500" />
//                     Degree Level <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <select 
//                   name="universityDegreeLevel"
//                   value={formData.universityDegreeLevel}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                   required
//                 >
//                   <option value="">Select Degree</option>
//                   <option value="Bachelor">Bachelor's</option>
//                   <option value="Master">Master's</option>
//                   <option value="PhD">PhD</option>
//                 </select>
//               </div>

//               {/* Current Semester */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaClipboardList className="text-purple-500" />
//                     Current Semester <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="universityCurrentSemeter"
//                   value={formData.universityCurrentSemeter}
//                   onChange={onChangeHandler}
//                   placeholder="Current Semester"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>

//               {/* University Name */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaUniversity className="text-purple-500" />
//                     University Name <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="universityName"
//                   value={formData.universityName}
//                   onChange={onChangeHandler}
//                   placeholder="University Name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>

//               {/* Discipline */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaClipboardList className="text-purple-500" />
//                     Major/Specialization <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="universityDegreeDiscipline"
//                   value={formData.universityDegreeDiscipline}
//                   onChange={onChangeHandler}
//                   placeholder="Major/Specialization"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>

//               {/* CGPA Section */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Obtained CGPA <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="universityObtainedCGPA"
//                     value={formData.universityObtainedCGPA}
//                     onChange={onChangeHandler}
//                     placeholder="Obtained CGPA"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700 font-medium">
//                     Total CGPA <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="number"
//                     name="universityTotalCGPA"
//                     value={formData.universityTotalCGPA}
//                     onChange={onChangeHandler}
//                     placeholder="Total CGPA"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Percentage */}
//               <div className="space-y-2">
//                 <label className="block text-gray-700 font-medium">
//                   <span className="flex items-center gap-2">
//                     <FaPercentage className="text-purple-500" />
//                     Percentage <span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="universityPercentage"
//                   value={formData.universityPercentage}
//                   onChange={onChangeHandler}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 focus:border-purple-500 outline-none transition shadow-sm"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
//             <Link
//               to="/address"
//               className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow-sm"
//             >
//               <FaChevronLeft /> Previous
//             </Link>
//             <div className="flex gap-4 justify-center sm:justify-end">
//               <button
//                 type="submit"
//                 className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
//               >
//                 <FaSave /> Save
//               </button>
//               <Link
//                 to="/docs"
//                 className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
//               >
//                 Next <FaChevronRight />
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Educational;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSchool,
  FaUniversity,
  FaGraduationCap,
  FaBook,
  FaPercentage,
  FaChevronLeft,
  FaChevronRight,
  FaSave,
  FaCalendarAlt,
  FaClipboardList
} from "react-icons/fa";

const Educational = () => {
  const [formData, setFormData] = useState({
    /* School Education */
    degreeLevel: "",
    schoolName: "",
    degreeDiscipline: "",
    obtainedMarks: "",
    totalMarks: "",
    percentage: "",
    /* College Education */
    collegedegreeLevel: "",
    collegesName: "",
    collegeDegreeDiscipline: "",
    collegeObtainedMarks: "",
    collegeTotalMarks: "",
    collegePercentage: "",
    /* University Education */
    universityDegreeLevel: "",
    universityName: "",
    universityCurrentSemeter: "",
    universityDegreeDiscipline: "",
    universityObtainedCGPA: "",
    universityTotalCGPA: "",
    universityPercentage: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            My <span className="text-[#B9FF66]">Educational</span> Background
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide your complete academic history
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-8">
          {/* Matric/O-Level Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <FaSchool className="text-gray-900" />
                Secondary Education
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Program Title */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaBook className="text-[#B9FF66]" />
                    Program Title <span className="text-red-500">*</span>
                  </span>
                </label>
                <select 
                  name="degreeLevel"
                  value={formData.degreeLevel}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                >
                  <option value="">Select Degree</option>
                  <option value="Matriculation">Matriculation</option>
                  <option value="O-Level">O-Level</option>
                </select>
              </div>

              {/* Institution Name */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaUniversity className="text-[#B9FF66]" />
                    Institution Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={onChangeHandler}
                  placeholder="Enter institution name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>

              {/* Discipline */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaClipboardList className="text-[#B9FF66]" />
                    Discipline <span className="text-red-500">*</span>
                  </span>
                </label>
                <select 
                  name="degreeDiscipline"
                  value={formData.degreeDiscipline}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                >
                  <option value="">Select Discipline</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              {/* Marks Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Obtained Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="obtainedMarks"
                    value={formData.obtainedMarks}
                    onChange={onChangeHandler}
                    placeholder="Obtained marks"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Total Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={formData.totalMarks}
                    onChange={onChangeHandler}
                    placeholder="Total marks"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Percentage */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaPercentage className="text-[#B9FF66]" />
                    Percentage <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="percentage"
                  value={formData.percentage}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Intermediate/A-Level Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <FaUniversity className="text-gray-900" />
                Higher Secondary Education
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Program Title */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaBook className="text-[#B9FF66]" />
                    Program Title <span className="text-red-500">*</span>
                  </span>
                </label>
                <select 
                  name="collegedegreeLevel"
                  value={formData.collegedegreeLevel}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                >
                  <option value="">Select Degree</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="A-Level">A-Level</option>
                </select>
              </div>

              {/* Institution Name */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaUniversity className="text-[#B9FF66]" />
                    Institution Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="collegesName"
                  value={formData.collegesName}
                  onChange={onChangeHandler}
                  placeholder="Enter institution name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>

              {/* Discipline */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaClipboardList className="text-[#B9FF66]" />
                    Discipline <span className="text-red-500">*</span>
                  </span>
                </label>
                <select 
                  name="collegeDegreeDiscipline"
                  value={formData.collegeDegreeDiscipline}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                >
                  <option value="">Select Discipline</option>
                  <option value="Pre-Medical">Pre-Medical</option>
                  <option value="Pre-Engineering">Pre-Engineering</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>

              {/* Marks Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Obtained Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="collegeObtainedMarks"
                    value={formData.collegeObtainedMarks}
                    onChange={onChangeHandler}
                    placeholder="Obtained marks"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Total Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="collegeTotalMarks"
                    value={formData.collegeTotalMarks}
                    onChange={onChangeHandler}
                    placeholder="Total marks"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Percentage */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaPercentage className="text-[#B9FF66]" />
                    Percentage <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="collegePercentage"
                  value={formData.collegePercentage}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Undergraduate Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <FaGraduationCap className="text-gray-900" />
                Higher Education
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Degree Level */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaBook className="text-[#B9FF66]" />
                    Degree Level <span className="text-red-500">*</span>
                  </span>
                </label>
                <select 
                  name="universityDegreeLevel"
                  value={formData.universityDegreeLevel}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                >
                  <option value="">Select Degree</option>
                  <option value="Bachelor">Bachelor's</option>
                  <option value="Master">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>

              {/* Current Semester */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaClipboardList className="text-[#B9FF66]" />
                    Current Semester <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="universityCurrentSemeter"
                  value={formData.universityCurrentSemeter}
                  onChange={onChangeHandler}
                  placeholder="Current Semester"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>

              {/* University Name */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaUniversity className="text-[#B9FF66]" />
                    University Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="universityName"
                  value={formData.universityName}
                  onChange={onChangeHandler}
                  placeholder="University Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>

              {/* Discipline */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaClipboardList className="text-[#B9FF66]" />
                    Major/Specialization <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="universityDegreeDiscipline"
                  value={formData.universityDegreeDiscipline}
                  onChange={onChangeHandler}
                  placeholder="Major/Specialization"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>

              {/* CGPA Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Obtained CGPA <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="universityObtainedCGPA"
                    value={formData.universityObtainedCGPA}
                    onChange={onChangeHandler}
                    placeholder="Obtained CGPA"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">
                    Total CGPA <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="universityTotalCGPA"
                    value={formData.universityTotalCGPA}
                    onChange={onChangeHandler}
                    placeholder="Total CGPA"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Percentage */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <FaPercentage className="text-[#B9FF66]" />
                    Percentage <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="universityPercentage"
                  value={formData.universityPercentage}
                  onChange={onChangeHandler}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
            <Link
              to="/address"
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow-sm"
            >
              <FaChevronLeft /> Previous
            </Link>
            <div className="flex gap-4 justify-center sm:justify-end">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-900 font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
              >
                <FaSave /> Save
              </button>
              <Link
                to="/personalProject"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
              >
                Next <FaChevronRight />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Educational;