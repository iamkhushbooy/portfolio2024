import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-full min-h-screen
           md:flex md:justify-center md:items-center'>
      <div id="image" className='w-[60%] mx-[20%] my-10 h-[60%] flex justify-center items-center flex-col 
           md:w-[30%] md:mx-0 md:h-[350px]'>
        <Image src={'/khushi.jpg'} width={250} height={250} alt={''} className=' rounded-full'></Image>
        <button className='border border-blue-500 text-blue-500 p-2 my-5'>Download Resume</button>
      </div>
      <div className='
           md:w-[30%] md:h-[350px] md:flex md:flex-col md:justify-center md:item:center'>
        <h1 className='mx-8 text-[20px] font-extralight'>Hello, I'm
          <span className='ml-1 text-[20px] font-bold text-blue-900'>Khushboo</span>
        </h1>
        <h2 className='mx-8 text-[20px] font-extralight mt-2'>I'm <span className=' text-[20px] font-bold text-blue-900'>Next.Js </span>developer.</h2>
        <p className='mx-8 font-light mt-4'>
          Currently in my final year of B.Tech in Mechanical Engineering at Kanpur University,
          I'm deeply passionate about programming and web development.
          I enjoy turning ideas into reality through code.</p>
      </div>
    </div>
  )
}

export default page