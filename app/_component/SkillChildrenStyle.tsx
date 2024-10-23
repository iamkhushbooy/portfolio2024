'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const SkillChildrenStyle = ({ img, name }: { img: string, name: string }) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className='w-[80px] h-[80px] flex justify-center items-center'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {!hover ? (
                <Image
                    src={img}
                    alt={'img'}
                    width={30}
                    height={30}
                    className='w-[80px]'
                />
            ) : (
                <p>{name}</p>
            )}
        </div>
    )
}

export default SkillChildrenStyle
