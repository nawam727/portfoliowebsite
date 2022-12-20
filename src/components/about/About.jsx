import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card' >
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam nihil dicta, 
            culpa unde consequuntur recusandae cumque esse, tenetur est, a nisi impedit voluptatum sunt placeat. 
            Minus eligendi quo quos.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About