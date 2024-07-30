import React from 'react'
const Skillstyle = ({heading,children}:{heading:string,children:string}) => {
  return (
    <div className='border bg-[#d3cdcd45] rounded my-5 flex justify-center items-center flex-col'>
        <div id="heading" className='text-center font-bold p-3'>{heading}</div>
       <div className='w-[90%] min-h-[150px] flex justify-around items-center flex-wrap border border-red-200'>{children}</div>
    </div>
  )
}

export default Skillstyle


