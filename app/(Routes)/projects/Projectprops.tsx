import React from 'react'
import Image from 'next/image'
const Projectprops = ({img,text,l,a}:{img:string,text:string,l:string,a:string}) => {
  return (
    <div className='w-[300px] min-h-[400px]  bg-white shadow-2xl rounded flex justify-center items-center flex-col m-3 '>
        <Image src={img} alt='img' width={150} height={150} className='my-5 rounded'></Image>
        <p className='text-justify m-4'>{text}</p>
        <a href={l} className='text-blue-600'>Live Preview</a>
        <a href={a} className='text-blue-600 bg-blue-300 rounded m-3 p-1'>Source Code</a>
    </div>
  )
}

export default Projectprops