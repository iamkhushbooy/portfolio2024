'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const SkillChildrenStyle = ({ img,name}:{img:string,name:string}) => {
    const [press,setPress]=useState(false)
    return (
        <div className='w-[80px] h-[80px] flex justify-center items-center'>
            {!press?<Image onClick={()=>setPress(true)} src={img} alt={'img'} width={30} height={30}
            className='w-[80px]'
            ></Image>:
            <p onClick={()=>setPress(false)} >{name}</p>}
        </div>
    )
}

export default SkillChildrenStyle