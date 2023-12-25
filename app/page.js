import AboutMeSection from "./components/AboutMeSection";


import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen   flex-col bg-[#121212] " >
    <NavBar />
    <div className="container mx-auto py-4 px-12 mt-24">
    
    <HeroSection />
    <AboutMeSection />

    <ProjectsSection />
    <EmailSection />
    <Footer/>
    </div>
      
    </main>
  )
}
