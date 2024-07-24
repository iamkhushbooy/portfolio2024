import React from 'react'
import Form from '@/app/_component/Form/page'
const page = () => {
  return (
    <div className='w-full min-h-screen
    md:flex md:justify-center md:items-center md:flex-row
    '>
     <div className='md:flex md:flex-col 
     md:h-[400px]
    '>
     <div className='ml-8  my-4'>
        <h1 className='text-[25px] font-bold'>Contact</h1>
        <p className='mr-8 text-[14px]'>Looking forward to hearing from you</p>
      </div>
      <div id="phone" className='my-4'>
        <h2  className='text-[20px] ml-8 font-bold'>Phone</h2>
        <p className='ml-8'>912586****</p>
      </div>
      <div id="email" className='my-4'>
        <h2 className='text-[20px] ml-8 font-bold'>Email</h2>
        <p className='mx-8'>khushboocsjmu@gmail.com</p>
      </div>
     </div>
      <Form></Form>
    </div>
  )
}

export default page