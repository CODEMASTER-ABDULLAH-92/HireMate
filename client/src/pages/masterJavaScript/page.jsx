
import React from 'react';
import CardDsa from '../../component/CardDsa';


const JavaScriptConcepts = () => {
  const concepts = [
    {
      title: "JavaScript Data Types",
      description: "Understand primitive types (string, number, boolean, etc.) and reference types (object, array) with type conversion and coercion concepts.",
      href: "/data-types",
      lessons: "18 Lessons",
      level: "Beginner",
      gradient: "from-pink-500 to-purple-500",
      minHeadding:"Data Types",
    },
    {
      title: "JavaScript Arrays",
      description: "Comprehensive guide to array manipulation including CRUD operations, iteration methods (map, filter, reduce), and advanced array techniques.",
      href: "/array-methods",
      lessons: "24 Lessons",
      level: "Intermediate",
      minHeadding:"Array",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "JavaScript Loops",
      description: "Master all looping constructs (for, while, for...of, for...in) with practical examples and performance considerations for different scenarios.",
      href: "/js-Loops",
      lessons: "6 Lessons",
      level: "Intermediate",
      minHeadding:"Loops",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "JavaScript Strings",
      description: "Complete reference for string manipulation including extraction, searching, transformation, and formatting methods with real-world examples.",
      href: "/Js-strings-methods",
      lessons: "20 Lessons",
      level: "Intermediate",
      minHeadding:"Strings",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Math Methods",
      description: "Explore JavaScript's Math object including arithmetic operations, rounding, trigonometry, random numbers, and mathematical constants.",
      href: "/mathJs",
      lessons: "15 Lessons",
      level: "Advanced",
      minHeadding:"Math",
      gradient: "from-purple-600 to-indigo-500"
    },
    {
      title: "Password | OTP",
      description: "Learn secure password handling techniques, OTP generation/validation, and cryptographic best practices in JavaScript.",
      href: "/otpPassword",
      lessons: "2 Lessons",
      level: "Advanced",
      minHeadding:"Otp",
      gradient: "from-purple-600 to-indigo-500"
    },
    {
      title: "Date Methods",
      description: "Master date/time manipulation including parsing, formatting, timezone handling, and calendar operations with JavaScript's Date object.",
      href: "/dateMethod",
      lessons: "2 Lessons",
      level: "Advanced",
      minHeadding:"Date",
      gradient: "from-purple-600 to-indigo-500"
    },
];

  return (
    <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
            JavaScript Concepts
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dive into fundamental and advanced concepts of JavaScript to strengthen your frontend skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:gap-8">
          {concepts.map((concept, index) => (
            <CardDsa 
              key={index}
              url={concept.href}
              btnText={concept.level}
              lessons={concept.lessons}
              image={concept.image}
              heading={concept.title}
              description={concept.description}
              minHeadding={concept.minHeadding}
              gradient={concept.gradient}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-medium px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105">
            View All Concepts
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default JavaScriptConcepts;