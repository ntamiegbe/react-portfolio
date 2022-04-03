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

            
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure aliquam recusandae necessitatibus! Sapiente distinctio dignissimos maiores, similique expedita necessitatibus sequi. Culpa recusandae qui totam voluptas? Consequatur voluptas dolores delectus qui, debitis nemo laborum et, quod explicabo fugit officiis dolorem eveniet placeat doloribus labore? Assumenda similique tempora commodi minima quia?
            </p>

            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5> Experience </h5>
                <small> 2+ Years </small>
              </article>

              <article className="about__card">
                <FaUsers className='about__icon'/>
                <h5> Clients </h5>
                <small> Over 10 Clients worked with </small>
              </article>

              <article className="about__card">
                <AiFillFolderOpen className='about__icon'/>
                <h5> Projects </h5>
                <small> 30+ completed projects </small>
              </article>
            </div>

            <a href="#Contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About