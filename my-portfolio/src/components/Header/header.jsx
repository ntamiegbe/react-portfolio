import React from 'react'
import './header.css'
import CTA from './CTA'
import Socials from './Socials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hi, I'm</h5>
        <h1> Ntami Egbe </h1>
        <h5 className="text-light"> FrontEnd Developer </h5>
        <CTA />
        <Socials />

        <a href="#Contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header