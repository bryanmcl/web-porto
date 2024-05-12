import BaseStyle from './BaseStyle'
import './App.css'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Hero from '@/sections/HeroSection/Hero.jsx'
import SkillSection from '@/sections/SkillSection/SkillSection.jsx'
import ProjectSection from '@/sections/ProjectSection/ProjectSection.jsx'
import FooterSection from '@/sections/FooterSection/FooterSection.jsx'

function App() {

  return (
    <>
      <BaseStyle/>
      <Navbar/>
      <Hero/>
      <hr width="150px"/>
      <SkillSection/>
      <ProjectSection/>
      <FooterSection/>
    </>
  )
}

export default App
