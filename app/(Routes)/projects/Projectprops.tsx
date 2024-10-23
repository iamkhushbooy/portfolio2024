import React from 'react';

const Projectprops = ({ topic, text, l, a }: { topic: string, text: string, l: string, a: string }) => {
  return (
    <div className='w-full max-w-[400px] min-h-[300px] bg-white shadow-lg rounded-lg flex flex-col m-6 p-6'>
      <h1 className="text-[22px] font-semibold text-black-600 mb-4">{topic}</h1>
      <p className='text-justify font-thin mb-6'>{text}</p>
      <div className='flex justify-between mt-auto'>
        <a href={l} target="_blank" className='px-4 border py-2 rounded-lg hover:bg-pink-700 transition'>Live Demo</a>
        <a href={a} target="_blank" className='px-4 border py-2 rounded-lg hover:bg-blue-700 transition'>Source Code</a>
      </div>
    </div>
  );
};

export default Projectprops;





// import React from 'react'
// import { ChevronRight, ExternalLink, Github } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// interface Project {
//   title: string
//   description: string
//   tags: string[]
//   liveUrl: string
//   sourceUrl: string
//   image: string
// }

// const projects: Project[] = [
//   {
//     title: "Form Builder",
//     description: "A user-friendly tool for creating and sharing custom forms, allowing creators to receive responses directly via email.",
//     tags: ["React", "Next.js", "Tailwind CSS"],
//     liveUrl: "https://kyformbuilder.vercel.app/",
//     sourceUrl: "https://github.com/iamkhushbooy/formbuilder",
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "Taskify",
//     description: "A to-do list app using HTML, Tailwind CSS, and JavaScript, delivering a user-friendly experience to boost productivity.",
//     tags: ["HTML", "Tailwind CSS", "JavaScript"],
//     liveUrl: "https://kytaskify.vercel.app/",
//     sourceUrl: "https://github.com/iamkhushbooy/taskify",
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "BODMAS Calculator",
//     description: "A BODMAS calculator using a combination of HTML, CSS, and JavaScript.",
//     tags: ["HTML", "CSS", "JavaScript"],
//     liveUrl: "https://kykicalc.netlify.app/",
//     sourceUrl: "https://github.com/iamkhushbooy/BODMAS-Calculator",
//     image: "/placeholder.svg?height=200&width=300"
//   },
//   {
//     title: "Translator",
//     description: "A translator using HTML, CSS, JavaScript and Google Translate API.",
//     tags: ["HTML", "CSS", "JavaScript", "API"],
//     liveUrl: "https://kykitranslate.netlify.app/",
//     sourceUrl: "https://github.com/iamkhushbooy/translater",
//     image: "/placeholder.svg?height=200&width=300"
//   }
// ]

// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <Card className="overflow-hidden">
//       <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//       <CardHeader>
//         <CardTitle>{project.title}</CardTitle>
//         <CardDescription>{project.description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-2">
//           {project.tags.map((tag) => (
//             <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline" size="sm" asChild>
//           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//             Live Demo <ExternalLink className="ml-2 h-4 w-4" />
//           </a>
//         </Button>
//         <Button variant="outline" size="sm" asChild>
//           <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
//             Source <Github className="ml-2 h-4 w-4" />
//           </a>
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

// export default function ProjectShowcase() {
//   return (
//     <div className="min-h-screen bg-background">
//       <header className="py-12 px-4 md:px-6 text-center">
//         <h1 className="text-4xl font-bold text-primary mb-4">My Projects</h1>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           Explore a collection of my recent web development projects, showcasing my skills in various technologies.
//         </p>
//       </header>
//       <main className="container mx-auto px-4 md:px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <ProjectCard key={project.title} project={project} />
//           ))}
//         </div>
//       </main>
//       <footer className="py-6 px-4 md:px-6 text-center">
//         <Button variant="link" asChild>
//           <a href="#" className="text-primary hover:text-primary/80">
//             View More Projects <ChevronRight className="ml-2 h-4 w-4" />
//           </a>
//         </Button>
//       </footer>
//     </div>
//   )
// }