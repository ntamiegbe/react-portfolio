import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App