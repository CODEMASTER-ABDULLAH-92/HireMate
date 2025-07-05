import React from 'react';

const Dev = ({ name, image, role, availability, skills }) => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full  mx-auto text-center hover:shadow-xl transition-shadow duration-300'>
      {/* Image */}
      <div className='flex justify-center mb-4'>
        <img
          src={image}
          alt={`${name}'s profile`}
          className='w-[150px] h-[150px] rounded-full object-cover border-4 border-green-500'
        />
      </div>

      {/* Name & Role */}
      <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
      <p className='text-sm text-gray-600'>{role}</p>

      {/* Availability */}
      {availability && (
        <div className='mt-2'>
          <span className='inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
            {availability}
          </span>
        </div>
      )}

      {/* Skills */}
      <div className='mt-4 flex flex-wrap justify-center gap-2'>
        {skills?.map((skill, index) => (
          <span key={index} className='text-xs bg-gray-200 px-2 py-1 rounded'>
            {skill}
          </span>
        ))}
      </div>

      {/* Contact CTA */}
      <div className='mt-6'>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'>
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Dev;
