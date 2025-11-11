import './App.css'

function App() {
  const name="Md Imam Hussain";
  const profession="Full Stack Developer";
  const projects=[
    {
      title:"Project One",
      description:"A web application built using React and Node js",
      link:"#"
    },
     {
      title:"Project Two",
      description:"A Ecommerce application built using React and Node js",
      link:"#"
    }
  ]

  return(
   <div className='App'>
    {/* Header Section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#about'>Projects</a>
          <a href='#about'>Contacts</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, A passionate {profession}. I love building web application and solve real time problems.</p>
      </section>

      {/* Project Section */}
      <section id="projects" className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project,index)=>(
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='blank' rel='noopener noreferrer'>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch fell free to email at <a href='mailto:john@gmail.com'>john@gmail.com</a></p>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <p>2025. All rights reserved</p>
      </footer>
   </div>
  );
}
export default App;
 
