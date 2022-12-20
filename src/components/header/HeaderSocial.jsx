import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='http://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='http://linkedin.com' target="_blank"><BsGithub/></a>
        <a href='http://linkedin.com' target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial