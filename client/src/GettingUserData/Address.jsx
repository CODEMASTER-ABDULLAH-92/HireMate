import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UploadCloud, File, X } from "lucide-react";
import { Home, MapPin, Globe } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Address = () => {
  // Dropdown options
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Pakistan",
    "India",
    "Australia",
    "Germany",
    "France"
  ];
  
  const provinces = [
    "Punjab", 
    "Sindh", 
    "Khyber Pakhtunkhwa", 
    "Balochistan",
    "Gilgit-Baltistan",
    "Azad Kashmir"
  ];
  
  const districts = [
    "Lahore", 
    "Islamabad", 
    "Karachi", 
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta"
  ];
  
  const cities = [
    "Lahore", 
    "Islamabad", 
    "Karachi", 
    "Rawalpindi",
    "Gujranwala",
    "Hyderabad",
    "Abbottabad",
    "Sialkot"
  ];

  // Form state
  const [formData, setFormData] = useState({
    country: "",
    province: "",
    district: "",
    city: "",
    fullAddress: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
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
            My <span className="text-[#B9FF66]">Address</span> Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your address information to continue with your application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:col-span-2 border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Address Details
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Country */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <Globe className="text-[#B9FF66]" />
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Province and District */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Province */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-2">
                    <MapPin className="text-[#B9FF66]" />
                    Province/State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                    required
                  >
                    <option value="">Select Province/State</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium flex items-center gap-2">
                    <MapPin className="text-[#B9FF66]" />
                    District <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                    required
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <Home className="text-[#B9FF66]" />
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition appearance-none"
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Address */}
              <div className="space-y-2">
                <label className=" text-gray-700 font-medium flex items-center gap-2">
                  <Home className="text-[#B9FF66]" />
                  Full Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                  rows="4"
                  placeholder="House #, Street, Area, etc."
                  required
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-200">
                <Link
                  to="/personalData"
                  className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" /> Previous
                </Link>
                <div className="flex gap-4 justify-center sm:justify-end">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-900 font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Save
                  </button>
                  <Link
                    to="/educational"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Next <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </form>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            {/* Form Progress */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-[#B9FF66] px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Form Progress
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm font-medium text-gray-500">Personal Details</span>
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#B9FF66]/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Address Information</span>
                  <div className="w-6 h-6 rounded-full bg-[#B9FF66] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
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

            {/* Upload Section (Placeholder) */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-[#B9FF66] px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Supporting Documents
                </h2>
              </div>
              <div className="p-6">
                <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:border-[#B9FF66] bg-white">
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
                      PDF, JPG, PNG up to 5MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;