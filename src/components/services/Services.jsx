import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>

          {/*Mobile App */}
          <div className="service_head">
            <h3>App Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Creating intuitive and cutting-edge mobile apps designed for both iOS and Android platforms.</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*Wb developing Part */}
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Transforming design concepts into responsive and user-friendly websites, using well-structured code to ensure seamless interactivity and optimal speed and efficiency.</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*UI/UX */}
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Blending imagination and understanding to design user experiences that flow effortlessly and user interfaces that captivate the eye, enhancing digital interactions and bringing joy to users.</p>
            </li>
          </ul>
        </article>
      </div>
      <br></br>
      <br></br>
      <div className="container services_container">
        <article className='service'>

          {/*DevOps Services */}
          <div className="service_head">
            <h3>DevOps Services</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Improving software development by facilitating smooth teamwork, streamlining processes through automation, and expediting deployment..</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*Content Creation and Copywriting */}
          <div className="service_head">
            <h3>Content Creation and Copywriting</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Crafting captivating content for websites and applications, elevating their search engine visibility, driving organic traffic, and enhancing their online presence.</p>
            </li>
          </ul>
        </article>

        <article className='service'>

          {/*SEO Marketing */}
          <div className="service_head">
            <h3>SEO Marketing</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Enhancing websites and applications to boost their visibility on search engines, ultimately driving natural, unpaid traffic and increasing their online presence.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services