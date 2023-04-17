import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Technologies from './components/technologies/Technologies'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import ScrollTopButton from './components/scrollTop/ScrollTop'

function App() {

  return (
    <>
      <Nav/>
      <ScrollTopButton/>
      <main>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
