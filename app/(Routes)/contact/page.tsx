import React from 'react'
import Form from '@/app/_component/Form/page'

const page = () => {
  return (
    <div
      className='w-full min-h-screen flex flex-col md:flex-row justify-center items-center 
      bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'
    >
      {/* Wrapper for Both Sections */}
      <div
        className='flex flex-col md:flex-row justify-between items-center 
        w-full md:w-[50%] gap-10'
      >
        {/* Contact Info Section */}
        <div
          className='w-full md:w-[40%] dark:border-gray-700 
          flex flex-col justify-center px-8 py-6'
        >
          <div className='mb-6'>
            <h1 className='text-[25px] font-bold'>Contact</h1>
            <p className='text-[16px] text-gray-600 dark:text-gray-400'>
              Looking forward to hearing from you
            </p>
          </div>
          <div id="phone" className='mb-6'>
            <h2 className='text-[20px] font-semibold'>Phone</h2>
            <p className='text-[16px] text-gray-800 dark:text-gray-300'>912586****</p>
          </div>
          <div id="email" className=''>
            <h2 className='text-[20px] font-semibold'>Email</h2>
            <p className='text-[16px] text-gray-800 dark:text-gray-300'>
              khushboocsjmu@gmail.com
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className='w-full md:w-[50%] flex justify-center items-center'>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default page
