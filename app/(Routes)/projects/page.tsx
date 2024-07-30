import React from 'react'
import Projectprops from './Projectprops'
const page = () => {
  return (
    <div>
         <h1 className='w-full bg-gray-50 text-center p-5 font-bold text-blue-800'>MY PROJECTs</h1>
      <div id="main" className='w-full min-h-screen bg-gray-50 flex justify-around items-center flex-wrap'>
      <Projectprops
          img={'/projecticons/taskify.jpg'}
          text={"I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."}
          l={"https://kytaskify.vercel.app/"}
          a={"https://github.com/iamkhushbooy/taskify"}
        ></Projectprops>
        <Projectprops
          img={'/projecticons/calculator.jpg'}
          text={"Designed and developed a BODMAS calculator using a combination of HTML, CSS, and JavaScript."}
          l={"https://kykicalc.netlify.app/"}
          a={"https://github.com/iamkhushbooy/BODMAS-Calculator"}
        ></Projectprops>
         <Projectprops
          img={'/projecticons/translator.jpg'}
          text={"Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api."}
          l={"https://kykitranslate.netlify.app/"}
          a={"https://github.com/iamkhushbooy/translater"}
        ></Projectprops>
      </div>
    </div>
  )
}

export default page