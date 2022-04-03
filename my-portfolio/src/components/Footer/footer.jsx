import React from 'react'
import './footer.css'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'> NTAMI </a>

       <ul className='permalinks'>
         <li><a href="#"> Home </a></li>
         <li><a href="#About"> About </a></li>
         <li><a href="#Services"> Services </a></li>
         <li><a href="#Portfolio"> Portfolio </a></li>
         <li><a href="#Contact"> Contact </a></li>
       </ul>

        <div className="footer__socials">
          <a href="https://api.whatsapp.com/send?phone=+2348087081503"> <IoLogoWhatsapp /> </a>
          <a href="#"> <FaInstagramSquare /> </a>
          <a href="https://twitter.com/ntamiegbe"> <FaTwitter /> </a>
        </div>
        
    </footer>
  )
}

export default footer