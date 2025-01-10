import React from 'react';

const Projectprops = ({ topic, text, l, a }: { topic: string, text: string, l: string, a: string }) => {
  return (
    <div className='w-full max-w-[400px] min-h-[300px]  shadow-lg rounded-lg flex flex-col m-6 p-6
    bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
    '>
      <h1 className="text-[18px] font-semibold text-black-600 mb-4
      md:text-[22px]
      ">{topic}</h1>
      <p className='text-justify font-thin mb-6'>{text}</p>
      <div className='flex justify-between mt-auto'>
        <a href={l} target="_blank" className='px-4 border py-2 rounded-lg hover:bg-pink-400 transition'>Live Demo</a>
        <a href={a} target="_blank" className='px-4 border py-2 rounded-lg hover:bg-blue-400 transition'>Source Code</a>
      </div>
    </div>
  );
};

export default Projectprops;




