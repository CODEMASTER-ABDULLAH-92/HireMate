import { Link } from "react-router-dom";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

const Connect = () => {
  return (
    <div className="bg-gray-900  py-2">
      {/* Title */}
      <p className=" text-right sm:text-[22px]  text-[16px] text-4xl sm:font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10">
       If you found any mistake| fault | suggestion. kindly <Link href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/" className="text-amber-700">connect with me</Link>
      </p>
    </div>
  );
};

export default Connect;
