import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-full h-screen'>
      <div id="image" className='w-[60%] mx-[20%] my-10 h-[50%] flex justify-center items-center'>
        <Image src={'/khushi.jpg'} width={250} height={250} alt={''} className=' rounded-full'></Image>
        <button></button>
      </div>
      <div id="text">
        <h1 className='ml-8 text-[20px] font-extralight'>Hello, I'm
          <span className='ml-1 text-[20px] font-bold text-blue-900'>Khushboo</span>
        </h1>
        <h2 className='ml-8 text-[20px] font-extralight mt-2'>I'm <span className=' text-[20px] font-bold text-blue-900'>Next.Js </span>developer.</h2>
        <p className='mx-8 font-light mt-4 '>Currently in my final year of B.Tech in Mechanical Engineering at Kanpur University,
          I'm deeply passionate about programming and web development.
          I enjoy turning ideas into reality through code.</p>
      </div>
    </div>
  )
}

export default page