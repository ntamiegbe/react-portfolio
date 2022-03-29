import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="" target='_blank'> <BsLinkedin /> </a>
        <a href="" target='_blank'> <BsTwitter /> </a>
        <a href="" target='_blank'> <BsGithub /> </a>
    </div>
  )
}

export default Socials