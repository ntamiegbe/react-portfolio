import React from 'react'
import './Services.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='Services'>
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design </h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3> Web Development  </h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3> Technical Writing  </h3>
          </div>

          <ul className="service__list">
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing. </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services