import React from "react"
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import MainText from "./MainText.jsx"
import About from "./About.jsx"
import Features from "./Features.jsx"
import Image from "./Image.jsx"
import FAQs from "./FAQs.jsx"
import Download from "./Download.jsx"
import Footer from "./Footer.jsx"

export default function App() {
  const headerRef = React.useRef(null)

  return (
    <>
      <Header headerRef={headerRef} />
      <Hero headerRef={headerRef} />
      <div className="body-container">
        <MainText />
        <About />
        <Features />
      </div>
      <Image />
      <div className="body-container">
        <FAQs />
        <Download />
      </div>
      <Footer />
    </>
  )
}