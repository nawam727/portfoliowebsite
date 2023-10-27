import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/nawamsahasra/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/nawam727' target="_blank"><BsGithub/></a>
        <a href='https://web.facebook.com/nawam727' target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial