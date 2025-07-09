import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaCity,
  FaChevronLeft,
  FaChevronRight,
  FaSave,
} from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Address Information
          </h1>
          <p className="mt-2 text-indigo-100">
            Please provide your complete address details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-6">
          {/* Country */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <FaGlobeAmericas className="text-indigo-500" />
                <span>Country <span className="text-red-500">*</span></span>
              </div>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition shadow-sm"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Province */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-indigo-500" />
                  <span>Province/State <span className="text-red-500">*</span></span>
                </div>
              </label>
              <select
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition shadow-sm"
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
              <label className="block text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-indigo-500" />
                  <span>District <span className="text-red-500">*</span></span>
                </div>
              </label>
              <select
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition shadow-sm"
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
            <label className="block text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <FaCity className="text-indigo-500" />
                <span>City <span className="text-red-500">*</span></span>
              </div>
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition shadow-sm"
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
            <label className="block text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <FaHome className="text-indigo-500" />
                <span>Full Address <span className="text-red-500">*</span></span>
              </div>
            </label>
            <textarea
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition shadow-sm"
              rows="4"
              placeholder="House #, Street, Area, etc."
              required
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-gray-200">
            <Link
              to="/PersonalDetail"
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition shadow-sm"
            >
              <FaChevronLeft /> Previous
            </Link>
            <div className="flex gap-4 justify-center sm:justify-end">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
              >
                <FaSave /> Save
              </button>
              <Link
                to="/education"
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

export default Address;