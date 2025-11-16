import React from 'react'
import './css/Portfolio.css'

const Portfolio = () => {
      const name="Md Imam Hussain";
      const profession="A full stack developer";
      const projects=[
          {
               title:"Project one",
               description:"A web application",
               link:"#"
          },
          {
               title:"Project one",
               description:"A web application",
               link:"#"
          }
      ];
  return (
    <div>
     <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
     </nav>
     </header>

     <section id="" className='about-section'>
          <h2>About Me</h2>
          <p>hello ! I am {name}, A passionate {profession}</p>
     </section>

     <section id="" className='projects-section'>
          <h2>Projects</h2>
          <div className='projects-list'>
               {
                    projects.map((project,index)=>(
                         <div key={index} className='project-item'>
                              <h3>{project.title}</h3>
                              <h3>{project.description}</h3>
                              <h3>{project.link}</h3>
                              <a href={project.link}>View Project</a>
                         </div>
                    ))
               }
          </div>
     </section>

     <section className='contact-section'>
          <h2>Contact Me</h2>
          <p>if you would like me to </p>
     </section>

     <footer className='footer'>
          <p>2025 All rights reserved</p>
     </footer>
    </div>
  )
}

export default Portfolio