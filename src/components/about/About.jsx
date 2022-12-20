import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about_content">
          
        </div>
      </div>
    </section>
  )
}

export default About