import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-purple-500 border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between">
        <Link   href="/"><Image className="rounded-full w-16 h-16 border-2 border-purple-500" src="/mylogo.jpg" alt="logo" width={60} height={60} /></Link> 
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;