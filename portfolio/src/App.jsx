import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from "./components/profile/profile"
import './App.css'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Project from "./components/projects/project"
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
 
  return (
    <>
     <div  className="app">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     
     
     </div>
    </>
  )
}

export default App
