import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsMedium, BsTwitter } from 'react-icons/bs'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Nawam Denawakage</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/nawamsahasra/"><BsLinkedin/></a>
        <a href="https://web.facebook.com/nawam727"><BsFacebook/></a>
        <a href="https://www.instagram.com/sahaz__dd/"><BsInstagram/></a>
        <a href="https://twitter.com/NawamDenawakage"><BsTwitter/></a>
        <a href="https://medium.com/@nawamdenawakage"><BsMedium/></a>
      </div>

      <div className="footer_copyright">
        <small> &copy; Nawam Denawakage. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer