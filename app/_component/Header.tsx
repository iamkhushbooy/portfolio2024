'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './context/ThemeContext'
import { usePathname } from 'next/navigation'
const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const [press, setPress] = useState(false)
    let [laptop, setLaptop] = useState(false)
    const pathName=usePathname();
    
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
        <div className='w-full h-[50px] flex items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <div className='ml-8 w-[80%]  flex items-center'>
                <Link href={'https://github.com/iamkhushbooy'}>
                    <Image src={'/icons/github.png'} width={30} height={30} alt={'github'}></Image>
                </Link>
                <h1 className='font-extrabold text-[22px] ml-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-pink-500  to-blue-800'>Khushboo</h1>
            </div>
            {!laptop ? <>
                {!press ?
                    <Image 
                        onClick={toggle}
                        src={'/icons/menu.png'}
                        alt={'menu'}
                        width={30}
                        height={30}
                    ></Image> :
                    <Image 
                        onClick={toggle}
                        src={'/icons/close.png'}
                        alt={'cross'}
                        width={20}
                        height={20}
                    ></Image>
                }
            </> : <>
                <div id="forbuger" className='w-full h-[70px]
                  flex justify-end items-center font-semibold gap-5'>
                    <Link 
                    href={'/'}
                    className='text-blue-600'
                    >Home</Link>
                    <Link 
                    href={'/projects'}
                    className={`${pathName==='/projects'?'text-pink-600':'text-blue-600'}`}
                    >Projects</Link>
                    <Link  href={'/contact'}
                    className={`${pathName==='/contact'?'text-pink-600':'text-blue-600'}`}
                    >Contact</Link>
                </div>
            </>}
            {press &&
                <div id="forbuger" className='w-full h-screen bg-[rgb(12,173,222)]
                  flex justify-center items-center flex-col
                  absolute top-[50px]
                  
                '>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/'}>Home</Link>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/projects'}>Project</Link>
                    <Link onClick={toggle} className='m-3 font-bold text-white' href={'/contact'}>Contact</Link>
                </div>
            }

            <button className="mx-10" onClick={toggleTheme}>
                <Image
                    src={isDark ? '/light.png' : '/dark.png'}
                    alt={isDark? 'Light Mode' : '/Dark Mode'}
                    width={50}
                    height={30}
                />
            </button>
        </div>
    )
}

export default Header