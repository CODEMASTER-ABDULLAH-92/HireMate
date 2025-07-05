import React from 'react';
import Dev from '../Component/Dev';
import {data} from "../assets/assets"
const HireDev = () => {
  return (
    <div className='flex flex-col lg:flex-row min-h-svh overflow-hidden '>
      {/* Left Section */}
      <div className='lg:w-1/4 bg-green-500 rounded-2xl relative flex items-center justify-center min-h-[200px] lg:min-h-screen overflow-hidden'>
        <h1
          className='text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white font-bold text-center manufacturing-consent-regular bg-gray-700 w-full py-4
          lg:absolute lg:-rotate-90  lg:w-[100vw]'>
          Hire Talent
          <span className='text-green-1000 animate-pulse manufacturing-consent-regular text-green-600'>.</span>
        </h1>
      </div>
      <div className='p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <Dev
        name="Muhammad Abdullah"
        image={data.abdullah}
        role="Full-Stack Developer (MERN)"
        availability="Available for Hire"
        skills={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
      />
      <Dev
        name="Muhammad Abdullah"
        image={data.abdullah}
        role="Full-Stack Developer (MERN)"
        availability="Available for Hire"
        skills={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
      />
      <Dev
        name="Muhammad Abdullah"
        image={data.abdullah}
        role="Full-Stack Developer (MERN)"
        availability="Available for Hire"
        skills={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
      />
      <Dev
        name="Muhammad Abdullah"
        image={data.abdullah}
        role="Full-Stack Developer (MERN)"
        availability="Available for Hire"
        skills={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
      />
      <Dev
        name="Muhammad Abdullah"
        image={data.abdullah}
        role="Full-Stack Developer (MERN)"
        availability="Available for Hire"
        skills={['React', 'Node.js', 'MongoDB', 'Tailwind CSS']}
      />
      
      {/* Add more Dev cards if needed */}
    </div>
    </div>
  );
};

export default HireDev;
