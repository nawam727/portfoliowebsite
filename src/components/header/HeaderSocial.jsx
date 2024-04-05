import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/nawamsahasra/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/nawam727' target="_blank"><BsGithub/></a>
        <a href='https://medium.com/@nawamdenawakage' target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocial