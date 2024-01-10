"use client"

import { useState,useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { motion,useInView } from "framer-motion";


const projects =[

{
  id:1,
  title : "YouUo Shopping",
  description : "This Project covers the concepts of Nextjs.14 -Typescript- Tailwindcss-daisyUi -Prisma- Next-Auth  ",
  image : "/ecommerce.png",
  tag : ["All","Web"],
  gitUrl:"https://github.com/Ashraf2060/Next-Ecommerce",
  previewUrl:"https://next-ecommerce-nu-nine.vercel.app/"
},
{
  id:2,
  title : "First React Pizza",
  description : "This Project covers the concepts of React - react-Hooks Redux ToolKit,and many more ",
  image : "/pizza-app.png",
  tag : ["All","Web"],
  gitUrl:"http://localhost:3000/",
  previewUrl:"https://ashraf-pizza-app.netlify.app/"
},
{
  id:3,
  title : "Al-Ahly Club Bank",
  description : "This project based on Nextjs tailwindcss for styling next-auth for authentication and many more",
  image : "/bank-app.png",
  tag : ["All","Web"],
  gitUrl:"https://github.com/Ashraf2040/my-bank",
  previewUrl:"https://my-bank-1-3jzk8tf5a-ashrafs-projects-f9bf5497.vercel.app"
},
{
  id:4,
  title : "CRUD Project",
  description : "This project covers the concepts of vanilla javascript as well as the pure css for styling",
  image : "/second-crud-app.png",
  tag : ["All","Web"],
  gitUrl:"http://localhost:3000/",
  previewUrl:"https://second-crud.vercel.app/"
},
{
  id:5,
  title : "Add Tasks and Choose Drinks",
  description : "This project based on Nextjs 14 tailwindcss and daisyui for styling also using prisma for database and many more",
  image : "/drinks-tasks-app.png",
  tag : ["All","Web"],
  gitUrl:"https://github.com/Ashraf2040/next-tasks-project/tree/main/app",
  previewUrl:"https://next-tasks-project.vercel.app/"
},
{
  id:6,
  title : "CRUD Dashboard",
  description : "This project based on Nextjs 14 as well as rechart library and next-auth for authentication also using mongodb and mongoose for database manipulation",
  image : "/crud-dashboard.png",
  tag : ["All","Web"],
  gitUrl:"http://localhost:3000/",
  previewUrl:"https://second-crud.vercel.app/"
},















]


const ProjectsSection = () => {

  const ref= useRef(null)

  const isInView = useInView(ref,{once:true})

  const [tag ,setTag] = useState("All")

  const cardVariant ={
    initial :{y:50 , opacity:0},
    animate : {y:1 , opacity :1}
  }

  const handleTag = (newTag)=>{

setTag(newTag)

  }
  const filteredProjects = projects.filter((project=>
  
  project.tag.includes(tag)
  
  ))
  return (
    <section ref={ref} className="" id="projects">
    <h2 className="text-4xl text-center font-bold text-white mt-4 md:mb-12"> My Projects </h2> 
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
   <ProjectTags onClick={handleTag} isSelected={tag==="All"} name="All"  />
   <ProjectTags onClick={handleTag} isSelected={tag==="Web"} name="Web"  />
  
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    
    {filteredProjects.map((project,index)=>
    <motion.li key ={index} variants={cardVariant} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.3,delay: index*0.4}}>
    <ProjectCard key={project.id} imgUrl={project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
    </motion.li>
    )}</ul>
    </section>
  )
};

export default ProjectsSection
