import React from "react";
import CardDsa from "../../Component/CardDsa";
import Heading from "../../Component/Code365/Heading";

const HeadingCard = ({ title, subheading, description }) => {
  return (
    <div className="max-w-[360px] bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-[2px] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
      <div className="bg-gray-900 rounded-xl h-full flex flex-col justify-between overflow-hidden">
        {/* Header with animated gradient overlay */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-800/30 via-red-800/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-500 rounded-full filter blur-[80px] opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-400 rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

          <div className="relative h-[180px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/30 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 animate-text-shine">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-300 tracking-wide">
              {subheading}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const JavaScriptConcepts = () => {
  const concepts = [
    {
      title: "JavaScript Data Types",
      description:
        "Understand primitive types (string, number, boolean, etc.) and reference types (object, array) with type conversion and coercion concepts.",
      href: "/data-types",
      lessons: "18 Lessons",
      level: "Beginner",
      gradient: "from-pink-500 to-purple-500",
      minHeadding: "Data Types",
    },
    {
      title: "JavaScript Arrays",
      description:
        "Comprehensive guide to array manipulation including CRUD operations, iteration methods (map, filter, reduce), and advanced array techniques.",
      href: "/array-methods",
      lessons: "24 Lessons",
      level: "Intermediate",
      minHeadding: "Array",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "JavaScript Loops",
      description:
        "Master all looping constructs (for, while, for...of, for...in) with practical examples and performance considerations for different scenarios.",
      href: "/js-Loops",
      lessons: "6 Lessons",
      level: "Intermediate",
      minHeadding: "Loops",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "JavaScript Strings",
      description:
        "Complete reference for string manipulation including extraction, searching, transformation, and formatting methods with real-world examples.",
      href: "/Js-strings-methods",
      lessons: "20 Lessons",
      level: "Intermediate",
      minHeadding: "Strings",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Math Methods",
      description:
        "Explore JavaScript's Math object including arithmetic operations, rounding, trigonometry, random numbers, and mathematical constants.",
      href: "/mathJs",
      lessons: "15 Lessons",
      level: "Advanced",
      minHeadding: "Math",
      gradient: "from-purple-600 to-indigo-500",
    },
    {
      title: "Password | OTP",
      description:
        "Learn secure password handling techniques, OTP generation/validation, and cryptographic best practices in JavaScript.",
      href: "/otpPassword",
      lessons: "2 Lessons",
      level: "Advanced",
      minHeadding: "Otp",
      gradient: "from-purple-600 to-indigo-500",
    },
    {
      title: "Date Methods",
      description:
        "Master date/time manipulation including parsing, formatting, timezone handling, and calendar operations with JavaScript's Date object.",
      href: "/dateMethod",
      lessons: "2 Lessons",
      level: "Advanced",
      minHeadding: "Date",
      gradient: "from-purple-600 to-indigo-500",
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
            Deep dive into fundamental and advanced concepts of JavaScript to
            strengthen your frontend skills.
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
<Heading Heading={"JS Quirks & Miscellaneous Topics:-"}/>
        <div className="flex flex-wrap justify-center gap-6">
          <HeadingCard
            title="JS Quirks"
            subheading="Unexpected behaviors in JavaScript"
            description="Explore strange and surprising JavaScript outcomes – from type coercion to hoisting chaos!"
          />
          <HeadingCard
            title="Falsy Surprises"
            subheading="Not everything false is false"
            description="Learn about values like '', 0, null, and undefined — and how they can mess with your logic."
          />
          <HeadingCard
            title="Equality Confusion"
            subheading="== vs === explained"
            description="Dive into type coercion in JavaScript and how double equals can cause unexpected results."
          />
        </div>
      </div>
    </div>
  );
};

export default JavaScriptConcepts;
