import React from "react";

const TestimonialHire = () => {
  return (
    <div className="relative w-[550px] p-12 bg-[#191A23] border-[#B9FF66] border-[2px] rounded-4xl">
      {/* Speech bubble text */}
      <p className="text-[#FFFFFF]">
        "We have been working with Positivus for the past year and have seen a significant 
        increase in website traffic and leads as a result of their efforts. The team is 
        professional, responsive, and truly cares about the success of our business. 
        We highly recommend Positivus to any company looking to grow their online presence."
      </p>
      
      {/* Speech bubble tail (triangle) - POSITIONED RELATIVE TO BUBBLE */}
      <div className="
        absolute -bottom-[21px] left-14  
        w-8 h-8 bg-[#191A23]
        rotate-45 origin-top rounded-xs
        border-r-[2px] border-b-[2px] border-[#B9FF66]
      "></div>
    </div>
  );
};

export default TestimonialHire;