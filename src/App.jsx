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
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <Nav currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange}/>
      <ScrollTopButton/>
      <main>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects currentLanguage={currentLanguage}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
