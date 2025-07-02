import React from "react";
import { data } from "../assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen w-full">
      {/* Left Section - Image */}
      <div className="w-full sm:w-1/2 h-60 sm:h-full bg-green-100 hidden sm:flex items-center justify-center">
        <img
          src={data.login}
          alt="Login Illustration"
          className="object-contain h-full w-full p-8"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full sm:w-1/2 flex h-full items-center justify-center bg-white">
        <form className="w-full max-w-md px-6 py-8 sm:px-8 sm:py-10">
          {/* Logo + Branding */}
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img
              src={data.Icon}
              className="h-[30px] w-[30px] hover:rotate-180 duration-1000"
              alt="Logo"
            />
            <span className="text-2xl font-bold text-gray-800">HireMate.</span>
          </Link>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Login to Your Account
          </h2>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Links */}
          <div className="flex justify-between text-sm mb-6">
            <Link to="/password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signUp" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
