import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>

      {/*frontkend Development */}

      <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Bootsrap</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

        </div>
      </div>

      {/*Backend Development */}

      <div className="experience_backend">
      <h3>Backend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
           <div>
              <h4>MySql</h4>
              <small className='text-light'>Experience</small>
           </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>J2EE</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experience</small>
            </div>
          </article>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience