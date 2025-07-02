
import React from "react";

import { motion } from "framer-motion";
 // Make sure you have an image in assets
export default function NotFound()  {
  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 py-12 sm:py-16 lg:py-20 h-screen flex flex-col items-center justify-center">
     
     <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-10"
      >
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </motion.div>

     

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium px-5 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
        onClick={() => (window.location.href = "/")}
      >
        Go Back Home
      </motion.button>
    </div>
  );
};


