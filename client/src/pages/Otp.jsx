import React from "react";
import { data } from "../assets/assets";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      {/* Left Section - Image */}
      <div className="w-full sm:w-1/2 h-60 sm:h-full bg-green-100 hidden sm:flex items-center justify-center">
        <img
          src={data.password}
          alt="Password Illustration"
          className="object-contain h-full w-full p-8"
        />
      </div>

      {/* Right Section - OTP Form */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-white">
        <form className="w-full max-w-md px-6 py-8 sm:px-8 sm:py-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img
              src={data.Icon}
              className="h-[30px] w-[30px] hover:rotate-180 duration-1000"
              alt="Logo"
            />
            <span className="text-2xl font-bold text-gray-800">HireMate.</span>
          </Link>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            Password Reset
          </h2>
          <p className="text-sm text-gray-600 mb-6">We have sent you a code to your registered email.</p>

          {/* OTP Inputs */}
          <div className="flex justify-between gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                className="w-14 h-14 text-center border-2 border-gray-400 rounded-md text-xl font-bold focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          {/* Sign Up Link */}
          <p className="text-right text-sm mb-4">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Password Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
