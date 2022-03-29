import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {MdMessage} from 'react-icons/md'

const nav = () => {
  return (
    <nav>
      <a href="#" > <FaHome /> </a>
      <a href="#About"> <FaUserAlt /> </a>
      <a href="#Services"> <FaTools /> </a>
      <a href="#Portfolio"> <BsFillBriefcaseFill /> </a>
      <a href="#Contact"> <MdMessage /> </a>
    </nav>
  )
}

export default nav