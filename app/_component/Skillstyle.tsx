import React from 'react'
const Skillstyle = ({heading,children}:{heading:string,children: React.ReactNode}) => {
  return (
    <div className='w-[80%] min-h-[200px] bg-white  shadow-2xl rounded my-5 flex justify-center items-center flex-col
    md:w-[250px] md:h-[250px] md:m-9
    '>
        <div id="heading" className='text-center font-bold p-3 text-blue-900'>{heading}</div>
       <div className='w-[90%] min-h-[150px] flex justify-around items-center flex-wrap text-blue-800 text-[17px] cursor-pointer'>{children}</div>
    </div>
  )
}

export default Skillstyle


