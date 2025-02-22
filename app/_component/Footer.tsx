import Link  from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full h-[200px] 
         bg-blue-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
        '>
            <h1 className='w-[30%]  mx-[35%] pt-3 text-[15px] text-center'>Follow Me</h1>
          <div className='w-full flex justify-center'>
          <Link  href={''} className={'m-3'}>
                <Image src={'/icons/linkedin.png'} alt={''} width={30} height={30}></Image>
            </Link>
            <Link  href={''} className={'m-3'}>
                <Image src={'/icons/x.png'} alt={''} width={30} height={30}></Image>
            </Link>
            <Link  href={''} className={'m-3'}>
                <Image src={'/icons/instagram.png'} alt={''} width={30} height={30}></Image>
            </Link>
          </div>
          <p className='w-[70%] mx-[15%] text-center mt-4 text-[15px]'>khushboocsjmu@gmail.com</p>
          <footer className='w-[70%] mx-[15%] text-center mt-6 text-[14px] text-[#000000ab]'>&copy; 2024 By Khushboo yadav</footer>
         
        </div>
    )
}

export default Footer