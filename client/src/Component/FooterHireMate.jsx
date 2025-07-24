import React from "react";
import { Link } from "react-router-dom";
import { data } from "../assets/assets";

const FooterHireMate = () => {
    const date = new Date();
  return (
    <div className="bg-[#191A23]  text-gray-200 px-10 py-6 mt-20 rounded-t-4xl">
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
          <img className="h-8 w-8" src={data.fa} alt="Facebook" />
          <img className="h-8 w-8" src={data.linkdin} alt="LinkedIn" />
          <img className="h-8 w-8" src={data.tw} alt="Twitter" />
        </div>
      </div>

      {/* Contact Info & Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-6">
        {/* Contact Info */}
        <div className="w-full md:w-[40%]">
          <span className="py-1 text-lg rounded-md px-2 text-gray-950 bg-[#B9FF66]">
            Contact Us:
          </span>
          <ul className="pt-2">
            <li className="py-1">Email: info@hiremate.com</li>
            <li className="py-1">Phone: 555-567-8901</li>
            <li className="py-1">Address: 1234 Main St</li>
            <li className="py-1">Moonstone City, Stardust State 12345</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-[60%]">
          <div className="bg-[#292A32] h-[180px] flex flex-col md:flex-row justify-center items-center gap-4 p-6 rounded-md">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-auto placeholder:text-gray-100 text-gray-100 text-lg py-3 px-6 border border-gray-100 bg-transparent rounded-md outline-none"
            />
            <button className="bg-[#B9FF66] w-full md:w-auto placeholder:text-gray-100  text-lg order border-gray-100  text-black px-6 py-3 rounded-md font-semibold hover:bg-lime-400 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="h-2 my-10" />

      <p>&copy; {date.getFullYear()} HireMate. All Rights are Reserved. <span className="underline ml-10 cursor-pointer">Privacy Policy</span></p>
    </div>
  );
};

export default FooterHireMate;
