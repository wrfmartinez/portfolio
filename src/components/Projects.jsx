import projectsData from '../data/projects/projectsData'

function Projects() {
    const listOfProjects = projectsData.map((project, idx) => 
      <li className="project__item" key={idx}>
        <h3 className='project__name'>{project.name}</h3>
        <p className='project__desc'>{project.desc}</p>
      </li>
    )

    return(
    <>
      <section id="projects">
        <h2>My Work</h2>
        <ul className="projects__list">
          { listOfProjects }
        </ul>
      </section>
    </>    
    )
}

export default Projects