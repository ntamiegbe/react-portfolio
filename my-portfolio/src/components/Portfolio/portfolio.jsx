import React from 'react'
import './portfolio.css'
import IMG1 from'../../Assets/portfolio1.jpg'
import IMG2 from'../../Assets/portfolio2.jpg'
import IMG3 from'../../Assets/portfolio3.jpg'



const data = [
  {
    id: 1,
    image: IMG1,  
    title: 'Project 1',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,  
    title: 'Project 2',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,  
    title: 'Project 3',
    github: '#',
    demo: '#'
  }
]

const portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5> My recent work </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank"> Github </a>
                <a href={demo} className='btn btn-primary' target="_blank"> Live Demo </a>
              </div>
            </article>    
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio