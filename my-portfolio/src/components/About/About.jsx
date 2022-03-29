import React from 'react'
import './About.css'
import ME from '../../Assets/about-img.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='About'>
      <h5> Get to know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt=" About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5> Experience </h5>
                <small> 2+ Years </small>
              </article>

              <article className="about__card">
                <FaUsers className='about__icon'/>
                <h5> Clients </h5>
                <small> Over 20 Clients worked with </small>
              </article>

              <article className="about__card">
                <AiFillFolderOpen className='about__icon'/>
                <h5> Projects </h5>
                <small> 40+ completed projects </small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate rerum nesciunt ex. Exercitationem, corporis. Explicabo officiis architecto placeat, officia.
            </p>

            <a href="#Contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About