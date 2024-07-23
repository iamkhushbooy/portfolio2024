import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-full h-screen'>
      <div id="image" className='w-[50%] h-[300px] border ml-[25%] flex justify-center items-center'>
        <Image src={'/khushi.jpg'} width={200} height={200} alt={''} className=' rounded-full'></Image>
      </div>
      <div id="text">
        <h1 className='ml-8 text-[20px] font-extralight'>Hello, I'm
          <span className='ml-3 text-[20px] font-bold text-blue-900'>Khushboo</span>
        </h1>
        <h2 className='ml-8 text-[20px] font-extralight'>I'm <span className='ml-3 text-[20px] font-bold text-blue-900 mr-3'>Next.Js</span>developer.</h2>
        <p className='ml-8 font-light mt-4'>I am a passionate Mechanical Engineering student with a keen interest in software development and programming. While my academic background has provided me with a solid foundation in engineering principles, I have also dedicated significant time to honing my skills in coding and software development.</p>
      </div>
    </div>
  )
}

export default page