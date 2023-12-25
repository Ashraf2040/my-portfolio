
"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";


const Navlinks = [
  {
  title :"About",
  path :"#about"
},
{
  title :"Projects",
  path :"#projects"
},{
  title :"Contact Me",
  path :"#contact"
},
]

const NavBar = () => {

  const [isMenuOpen,setIsMenuOpen]= useState(false)
  return (
    <nav className="fixed top-0 left-0 mx-auto border border-[#33353F] right-0 z-10 py-2 px-4 bg-[#121212] bg-opacity-100">
    <div className="flex container justify-between lg:py-2 items-center  mx-auto flex-wrap px-4 py-2 ">
    <Link   href="/"><Image className="rounded-full w-16 h-16 border-2 border-purple-500" src="/mylogo.jpg" alt="logo" width={60} height={60} /></Link> 

    <div className="mobile-menu block md:hidden">
     {!isMenuOpen ? (
         <button onClick={()=>setIsMenuOpen(true)} className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  "><Bars3Icon className="h-5 w-5" /></button>) : 
         
         ( <button onClick={()=>setIsMenuOpen(false)}  
         className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  "><XMarkIcon className="h-5 w-5" /></button>)}
    </div>
    <div className="menu hidden md:block mb:w-auto " id="navbar">
    <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8  pt-0">
   
   {Navlinks.map((link,index)=>
    <li key={index}><NavLink href={link.path} title={link.title}/></li>
   )}
   
  
    </ul>
    </div> 
    </div>
    {isMenuOpen ? <MenuOverlay Navlinks={Navlinks} /> : null}
    
    </nav>
    
  )
};

export default NavBar
