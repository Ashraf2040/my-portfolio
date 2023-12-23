
"use client"

import Image from "next/image";

import {useState,useTransition} from "react"
import TabButton from "./TabButton";
const AboutMeSection = () => {

const [tab,setTab]= useState("skills")
const  [isPending,startTransition]= useTransition()

const TAB_DATA=[

{
  title : "Skills",
  id:"skills" ,
  content : (
    <ul className="list-disc pl-2">
    <li>Javascript</li>
    <li>React js</li>
    <li>Nextjs</li>
    <li>TypeScript</li>
    <li>Tailwindcss</li>
    <li>Nodejs</li>
    </ul>
  )

},
{
  title : "Education",
  id:"education" ,
  content : (
    <ul className="list-disc pl-2">
    <li>Faculty of Science</li>
    <li>Complete Mernstack track</li>
    <li>Udemy full Courses</li>
   
    </ul>
  )

},
{
  title : "Certification",
  id:"certification" ,
  content : (
     <ul className="list-disc pl-2">
    <li>ITI Certification</li>
    <li>Udemy and Udacity certification</li>
   
   
    </ul>
  )

}



]

const handlTabChange= (id)=>{

  startTransition(()=>{
    setTab(id)
  })
}
  return (
    <section className="text-white  " id="about">
    <div className="md:grid md:grid-cols-2 gap-8 justify-center py-8 px-4 items-center xl:gap-16 sm:py-16">
    <Image src="/about-image.png" width={500} height={500} className="rounded-md" />
    <div className="mt-4 md:mt-0  text-left flex flex-col h-full">
    <h2 className="text-4xl mb-4 text-white font-bold">About Me</h2>
    <p className="text-base lg:text-lg ">I’m a Senior Frontend Developer,with high performance skills in building appealling dynamic websites that ensure customer satsifaction and help in team integrating consistance through problem solving and organized smart coding techniques. </p>
    <div className="flex mt-8 flex-row">
    <TabButton  selectTab={()=>handlTabChange("skills")} active={tab === "skills"}>{" "} Skills {" "} </TabButton>
    <TabButton  selectTab={()=>handlTabChange("education")} active={tab === "education"}>{" "} Education {" "} </TabButton>
    <TabButton  selectTab={()=>handlTabChange("certification")} active={tab === "certification"}>{" "} Certification {" "} </TabButton>
   
    </div>
    <div className="mt-8">{TAB_DATA.find((t)=>t.id=== tab).content}</div>
    </div>
    
    
    </div> 
    </section>
  )
};

export default AboutMeSection
