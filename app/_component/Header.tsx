'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    const [press, setPress] = useState(false)
    let [laptop, setLaptop] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setLaptop(window.innerWidth >= 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const toggle = () => {
        setPress(!press)
    }
    return (
        <div className='w-full h-[50px] flex items-center'>
            <div className='ml-8 w-[80%]  flex items-center'>
                <Link href={'https://github.com/iamkhushbooy'}>
                    <Image src={'/icons/github.png'} width={30} height={30} alt={'github'}></Image>
                </Link>
                <h1 className='font-extrabold text-[22px] ml-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-pink-500  to-blue-800'>Khushboo</h1>
            </div>
            {!laptop ? <>
                {!press ?
                    <Image className='mx-8' onClick={toggle} src={'/icons/menu.png'} alt={'menu'} width={30} height={30} ></Image> :
                    <Image className='mx-8' onClick={toggle} src={'/icons/close.png'} alt={'cross'} width={20} height={20} ></Image>
                }
            </> : <>
                <div id="forbuger" className='w-full h-[70px]
                  flex justify-end items-center mx-8'>
                    <Link className='m-3 text-blue-600' href={'/'}>ABOUT</Link>
                    <Link className='m-3 text-blue-600' href={'/skills'}>SKILLS</Link>
                    <Link className='m-3 text-blue-600' href={'/projects'}>PROJECT</Link>
                    <Link className='m-3 text-blue-600' href={'/contact'}>CONTACT</Link>
                </div>
            </>}
            {press &&
                <div id="forbuger" className='w-full h-screen bg-[rgb(12,173,222)]
                  flex justify-center items-center flex-col
                  absolute top-[50px] 
                  md:
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