import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { UploadCloud, File, X } from "lucide-react";
import { Phone, Calendar, Home, DollarSign, CreditCard } from 'lucide-react';
import { User, UserCircle, BookOpen, School } from "lucide-react";

const PersonalDetail = () => {
  const religion = [
    "Islam",
    "Christianity",
    "Hinduism",
    "Sikhism",
    "Buddhism",
    "Judaism",
    "Atheism",
    "Other",
  ];
  
  const institutes = [
    "Primary School",
    "Middle School",
    "High School",
    "College",
    "University",
    "Technical Institute",
    "Vocational Training Center",
  ];
  
  const disciplines = [
    "Computer Science",
    "Software Engineering",
    "Information Technology",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Business Administration",
    "Medicine",
  ];
  
  const universities = [
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology (MIT)",
    "University of Oxford",
    "University of Cambridge",
    "California Institute of Technology (Caltech)",
    "University of California, Berkeley",
    "National University of Sciences and Technology (NUST)",
    "University of the Punjab",
    "FAST-NUCES",
  ];
  
  const degreeTitles = [
    "BSCS - Computer Science",
    "BSSE - Software Engineering",
    "BSIT - Information Technology",
    "BBA - Business Administration",
    "MBBS - Medicine",
    "BEEE - Electrical Engineering",
    "BS Data Science",
  ];
  
  const domiciles = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Karachi",
    "Islamabad",
    "Peshawar",
    "Multan",
    "Quetta",
    "Gujranwala",
    "Hyderabad",
  ];
    
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    religion: "",
    contactNumber: "",
    currentInstituteLevel: "",
    dateOfAddmission: "",
    programFaculty: "",
    universityName: "",
    profileImage: null,
    dateOfBirth: "",
    domicle: "",
    familyIncome: "",
    passportNumber: "",
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData(prev => ({ ...prev, profileImage: selectedFile }));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
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
            My <span className="text-[#B9FF66]">Personal</span> Details
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your personal information to continue with your application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:col-span-2 border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Personal Information
              </h2>
            </div>
            <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-5 w-5 text-[#B9FF66]" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Basic Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={onChangeHandler}
                      value={formData.firstName}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={onChangeHandler}
                      value={formData.lastName}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  {/* Religion */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Religion <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="religion"
                      value={formData.religion}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                      required
                    >
                      <option value="">Select Religion</option>
                      {religion.map((religionItem) => (
                        <option key={religionItem} value={religionItem}>
                          {religionItem}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium flex items-center gap-2">
                      <Phone className="text-[#B9FF66]" />
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactNumber"
                      onChange={onChangeHandler}
                      value={formData.contactNumber}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="Contact Number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <School className="h-5 w-5 text-[#B9FF66]" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Academic Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Institute */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Institute <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="currentInstituteLevel"
                      value={formData.currentInstituteLevel}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                      required
                    >
                      <option value="">Select Institute</option>
                      {institutes.map((institute) => (
                        <option key={institute} value={institute}>
                          {institute}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date of Admission */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="text-[#B9FF66]" />
                      Date of Admission <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfAddmission"
                      value={formData.dateOfAddmission}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      required
                    />
                  </div>

                  {/* Program Discipline */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      Program Discipline <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="programFaculty"
                      value={formData.programFaculty}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                      required
                    >
                      <option value="">Select Discipline</option>
                      {disciplines.map((discipline) => (
                        <option key={discipline} value={discipline}>
                          {discipline}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* University */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">
                      University <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="universityName"
                      value={formData.universityName}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                      required
                    >
                      <option value="">Select University</option>
                      {universities.map((university) => (
                        <option key={university} value={university}>
                          {university}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium flex items-center gap-2">
                      <Calendar className="text-[#B9FF66]" />
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="Date of Birth"
                      required
                    />
                  </div>

                  {/* Domicile */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium flex items-center gap-2">
                      <Home className="text-[#B9FF66]" />
                      Domicile <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="domicle"
                      value={formData.domicle}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                      required
                    >
                      <option value="">Select Domicile</option>
                      {domiciles.map((dom) => (
                        <option key={dom} value={dom}>
                          {dom}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Family Income */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium flex items-center gap-2">
                      <DollarSign className="text-[#B9FF66]" />
                      Family Income <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="familyIncome"
                      value={formData.familyIncome}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="Family Income"
                      required
                    />
                  </div>

                  {/* Passport Number */}
                  <div className="space-y-2">
                    <label className=" text-gray-700 font-medium flex items-center gap-2">
                      <CreditCard className="text-[#B9FF66]" />
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={onChangeHandler}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                      placeholder="Passport Number"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
                <Link
                  to="/jobs"
                  className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow-sm"
                >
                  Previous
                </Link>
                <div className="flex gap-4 justify-center sm:justify-end">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-900 font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Save
                  </button>
                  <Link
                    to="/address"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            {/* Profile Photo Upload */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-[#B9FF66] px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Photo
                </h2>
              </div>
              <div className="p-6">
                <div
                  className={`relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-all ${
                    file
                      ? "border-[#B9FF66] bg-[#B9FF66]/10"
                      : "border-gray-300 hover:border-[#B9FF66] bg-white"
                  }`}
                  onClick={() => fileInputRef.current.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                    required
                  />

                  <div className="flex flex-col items-center text-center space-y-3">
                    <UploadCloud className="h-10 w-10 text-[#B9FF66]" />
                    <div className="flex flex-col items-center text-sm text-gray-600">
                      <span>Drag and drop files here</span>
                      <span>or</span>
                      <span className="font-medium text-[#B9FF66] hover:text-[#A5E55C]">
                        browse files
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      JPG, PNG up to 5MB
                    </span>
                  </div>
                </div>

                {file && (
                  <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <File className="h-5 w-5 text-[#B9FF66]" />
                      <span className="text-sm font-medium text-gray-700 truncate max-w-[180px]">
                        {file.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setFormData(prev => ({ ...prev, profileImage: null }));
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Progress */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-[#B9FF66] px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Form Progress
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-2 bg-[#B9FF66]/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Personal Details</span>
                  <div className="w-6 h-6 rounded-full bg-[#B9FF66] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm font-medium text-gray-500">Address Information</span>
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm font-medium text-gray-500">Education History</span>
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm font-medium text-gray-500">Awards & Achievements</span>
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;