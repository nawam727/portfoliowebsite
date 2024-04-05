import React from 'react'
import ME from '../../assets/me.jpg'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nawam Denawakage</h1>
        <h5 className="text-light">Intern DevOps Engineer | Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt='MyPhoto'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header