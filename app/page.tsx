import React from 'react'
import Image from 'next/image'
import Skills from './_component/Skills'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      {/* Container for content */}
      <div
        className='w-full min-h-screen flex flex-col justify-center items-center 
        md:flex-row md:justify-center md:items-center'>
        {/* Wrapper to align image and text */}
        <div
          className='flex flex-col md:flex-row justify-center items-center 
          w-full md:w-[60%] gap-10'
        >
          {/* Image and Button Section */}
          <div
            id="image"
            className='flex flex-col justify-center items-center md:w-[50%]'
          >
            <Image
              src={'/khushi.jpg'}
              width={250}
              height={250}
              alt={'Profile Image'}
              className='rounded-full'
            />
            <button className='border border-blue-500 text-blue-500 p-2 my-5'>
              Download Resume
            </button>
          </div>

          {/* Text Section */}
          <div className='text-center md:w-[50%]'>
            <h1 className='text-[20px] font-extralight'>
              Hello, I'm
              <span className='ml-1 text-[20px] font-bold text-blue-900'>Khushboo</span>
            </h1>
            <h2 className='text-[20px] font-extralight mt-2'>
              I'm a{' '}
              <span className='text-[20px] font-bold text-blue-900'>Next.js</span> developer.
            </h2>
            <p className='font-light mt-4 px-4'>
              Currently in my final year of B.Tech in Mechanical Engineering at Kanpur University,
              I'm deeply passionate about programming and web development. I enjoy turning ideas
              into reality through code.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  )
}

export default page
