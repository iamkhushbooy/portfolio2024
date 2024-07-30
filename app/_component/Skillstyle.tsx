import React from 'react'
const Skillstyle = ({heading,children}:{heading:string,children: React.ReactNode}) => {
  return (
    <div className='w-[80%] h-[50vh] bg-gray-100  shadow-2xl rounded my-5 flex justify-center items-center flex-col
    md:w-[250px] md:h-[250px] md:m-9
    '>
        <div id="heading" className='text-center font-bold p-3'>{heading}</div>
       <div className='w-[90%] min-h-[150px] flex justify-around items-center flex-wrap'>{children}</div>
    </div>
  )
}

export default Skillstyle


