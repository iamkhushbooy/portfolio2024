import React from 'react'
import Projectprops from './Projectprops'
const page = () => {
  return (
    <div className='w-full min-h-screen  
     bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100
    '>
       <header className="py-12 px-4 md:px-6 text-center">
         <h1 className="text-2xl font-bold text-primary mb-4
         md:text-4xl
         ">My Projects</h1>
        <p className="font-light text-muted-foreground max-w-2xl mx-auto
        md:text-xl
        ">
        Explore a collection of my recent web development projects, highlighting my skills in various technologies.
        </p>
      </header>
      <div className='flex justify-center items-center flex-wrap'>
        <Projectprops
        img={'/formbuilder.jpeg'}
          topic={'Form Builder'}
          text={"FormBuilder is a user-friendly tool for creating and sharing custom forms, allowing creators to receive responses directly via email. It’s perfect for easy data collection, feedback, or event registrations."}
          l={"https://kyformbuilder.vercel.app/"}
          a={"https://github.com/iamkhushbooy/formbuilder"}
        ></Projectprops>
        <Projectprops
        img={'/todolist.jpeg'}
          topic={'Taskify'}
          text={"I developed a to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost your productivity."}
          l={"https://kytaskify.vercel.app/"}
          a={"https://github.com/iamkhushbooy/taskify"}
        ></Projectprops>
        <Projectprops
        img={'/translator.jpeg'}
          topic={'Translator'}
          text={"Designed and developed a translator using a combination of HTML, CSS, JavaScript and google translate api."}
          l={"https://kykitranslate.netlify.app/"}
          a={"https://github.com/iamkhushbooy/translater"}
        ></Projectprops>
      </div>
    </div>
  )
}

export default page