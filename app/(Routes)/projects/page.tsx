import React from 'react'
import Projectprops from './Projectprops'
const page = () => {
  return (
    <div>
      <div id="main" className='w-full min-h-screen bg-gray-50 flex justify-around items-center flex-wrap'>
      <Projectprops
          img={'/projecticons/taskify.png'}
          text={"I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."}
          l={"https://kytaskify.vercel.app/"}
          a={"https://github.com/iamkhushbooy/todolist5"}
        ></Projectprops>
        <Projectprops
          img={'/projecticons/calculator.png'}
          text={"Designed and developed a BODMAS calculator using a combination of HTML, CSS, and JavaScript."}
          l={"https://kykicalc.netlify.app/"}
          a={"https://github.com/iamkhushbooy/BODMAS-Calculator"}
        ></Projectprops>
         <Projectprops
          img={'/projecticons/translator.png'}
          text={"Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api."}
          l={"https://kykitranslate.netlify.app/"}
          a={"https://github.com/iamkhushbooy/translater"}
        ></Projectprops>
      </div>
    </div>
  )
}

export default page