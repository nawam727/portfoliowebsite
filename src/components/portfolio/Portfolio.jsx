import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.jpg'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.jpg'
import IMG7 from '../../assets/p7.jpg'


const data = [

  {
    id: 1,
    image: IMG2,
    title: 'React Introduction Project',
    github: 'https://github.com/nawam727/reactintro'
  },

  {
    id: 2,
    image: IMG3,
    title: 'Flutter Game Project',
    github: 'https://github.com/nawam727/flutter_game'
  },

  {
    id: 3,
    image: IMG4,
    title: 'Flutter with Firebase',
    github: 'https://github.com/nawam727/futterXfirebase'
  },

  {
    id: 4,
    image: IMG5,
    title: 'JAVA Project',
    github: 'https://github.com/nawam727/AirlineController'
  },

  {
    id: 5,
    image: IMG6,
    title: 'GreenerLand Web Project',
    github: 'https://github.com/nawam727/GreenerLand_Web'
  },

  {
    id: 6,
    image: IMG7,
    title: 'Food Application',
    github: 'https://github.com/nawam727/find_food_application'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github}) => {
            return (
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio