import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me4.jpg'
import './about.css'

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
          <div className="about_cards">
            <article className='about_card' >
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card' >
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className='about_card' >
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          An <b>Undergraduate</b>, <b>Intern DevOps Engineer</b>, <b>Developer</b> and <b>Technical Writer</b> passionate about solving problems with tech.
          I am skilled with building exceptional <b>websites</b> and <b>mobile applications</b>, and currently i'm exploring the DevOps things and Development things.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About