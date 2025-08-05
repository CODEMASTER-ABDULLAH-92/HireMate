import React from "react";

const Heading = ({ Heading }) => {
  return (
    <div>
      <p className="lg:text-6xl md:text-4xl text-2xl pt-4 font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-text-shine px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 lg:my-8">
        {Heading}
      </p>
    </div>
  );
};

export default Heading;
