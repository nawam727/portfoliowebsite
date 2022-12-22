import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail/>
            <h4>Email</h4>
            <h5>nawamdenawakage@gmail.com</h5>
            <a href='mailto:nawamdenawakage@gmail.com '>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine/>
            <h4>Messanger</h4>
            <h5>Nawam Sahasra</h5>
            <a href='https://m.me/nawam727'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiWhatsappLine/>
            <h4>WhatsApp</h4>
            <h5>+94 767312274</h5>
            <a href='https://api.whatsapp.com/send?phone+94767312274'>Send a message</a>
          </article>
        </div>

        {/*Form section */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Yor Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submi' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact