'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    const [press, setPress] = useState(false)
    const toggle = () => {
        setPress(!press)
    }
    return (
        <div className='w-full h-[50px] flex items-center'>
            <div className='ml-8 w-[80%] flex items-center'>
                <Link href={'https://github.com/iamkhushbooy'}>
                    <Image src={'/icons/github.png'} width={30} height={30} alt={'github'}></Image>
                </Link>
                <h1 className='font-bold text-[22px] ml-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-pink-500 to-red-500 to-blue-800'>Khushboo</h1>
            </div>
            {!press ?
                <Image className='mx-8' onClick={toggle} src={'/icons/menu.png'} alt={'menu'} width={30} height={30} ></Image> :
                <Image className='mx-8' onClick={toggle} src={'/icons/close.png'} alt={'cross'} width={20} height={20} ></Image>
            }
            {press &&
                <div id="forbuger" className='w-full h-screen bg-blue-400  flex justify-center items-center flex-col
             absolute top-[50px]
            '>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/'}>ABOUT</Link>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/skills'}>SKILLS</Link>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/projects'}>PROJECT</Link>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/contact'}>CONTACT</Link>
                </div>
            }



        </div>
    )
}

export default Header