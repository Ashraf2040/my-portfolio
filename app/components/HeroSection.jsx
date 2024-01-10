"use client"


import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";



  


const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
    <div className="grid grid-cols-1 sm:grid-cols-12">
  <motion.div
   initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration : 1}}
    
     className="col-span-8 place-self-center text-center sm:text-left justify-self-start ">
     <h1 className="text-white font-extrabold text-4xl mb-4 sm:text-5xl lg:text-6xl lg:leading-normal "><span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Hello, I’m </span>  
     <br></br>
     <TypeAnimation
      sequence={[
       
        'Ashraf Ahmed',
        1000,
       
        'Senior Frontend Developer',
        1000,
        'Ready For Hiring',
        1000,
        
      ]}
      wrapper="span"
      speed={40}
     
      repeat={Infinity}
    /></h1>
     <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">Senior Frontend Developer ready for working remotely and in situ .</p>
    <div>
    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200  text-white">Hire Me</button>
    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent text-white hover:bg-slate-800  mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 "><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
    </div>
  </motion.div>
  <motion.div
   initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration : 1}} className="col-span-4 place-self-center mt-4 lg:mt-0">
   <div className="rounded-full flex items-center justify-center bg-[#181818] relative lg:h-[400px] lg:w-[400px] h-[250px] w-[250px] border-purple-500 border-4"><Image src="/2nd-logo.jpeg" alt="hero-image" className="rounded-full" width={500} height={500} /></div>
  </motion.div>
    </div>
    </section>
  )
};

export default HeroSection

