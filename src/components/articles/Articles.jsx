import React from 'react'
import './articles.css'
import { BsCheck, BsDot } from 'react-icons/bs'


const Articles = () => {
  return (
    <section id='articles'>
      <h5>My Recent Articles</h5>
      <h2>Articles</h2>

      <div className="container services_container">
        <article className='articles'>

          {/*Mobile App */}
          <ul className='service_list'>
            <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Understanding Terraform: Empowering DevOps Culture</p>
            </li>
            <li className='link'>
              <BsDot className= 'service_list-icon'/>
              <p><a href="https://medium.com/@nawamdenawakage/understanding-terraform-empowering-devops-culture-e313de4ce1f2">Click here to read</a></p>
            </li>
          </ul>
        </article>

        <article className='articles'>

          {/*Wb developing Part */}
          <ul className='service_list'>
          <li>
              <BsCheck className= 'service_list-icon'/>
              <p>What Is a Cloud Operations Engineer? (CloudOps)</p>
            </li>
            <li>
              <BsDot className= 'service_list-icon'/>
              <p><a href="https://medium.com/@nawamdenawakage/what-is-a-cloud-operations-engineer-cloudops-8ab81e5dd336">Click here to read</a></p>
            </li>
          </ul>
        </article>

        <article className='articles'>

          {/*UI/UX */}
          <ul className='service_list'>
          <li>
              <BsCheck className= 'service_list-icon'/>
              <p>Building a Robust DevOps Pipeline on AWS with Jenkins, SonarQube, and Docker</p>
            </li>
            <li>
              <BsDot className= 'service_list-icon'/>
              <p><a href="https://medium.com/@nawamdenawakage/building-a-robust-devops-pipeline-on-aws-with-jenkins-sonarqube-and-docker-c6e8b636d01a">Click here to read</a></p>
            </li>
          </ul>
        </article>
      </div>
      <br></br>
      <br></br>
      <div className="container services_container">
        {/*
        
        

        */}
      </div>
    </section>
  )
}

export default Articles