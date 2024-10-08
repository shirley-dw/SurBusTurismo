import React from "react"

//Importo components
import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section.jsx"
import AboutMe from "./Pages/AboutMe/AboutMe.jsx"
import Service from "./Pages/Service/Service.jsx"
import Testimonials from "./Pages/Testimonials/Testimonials.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {


  return (
    <>
      <Header />
      <Section />
      <Service />
      <AboutMe />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App
