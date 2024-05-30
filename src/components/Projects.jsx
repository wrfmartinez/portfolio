import projectsData from '../data/projects/projectsData'

function Projects() {
    const listOfProjects = projectsData.map((project, idx) => 
      <li className="project__item" key={idx}>
        <h3 className='project__name'>{project.name}</h3>
        <p className='project__desc'>{project.desc}</p>
        <p id={project.name} className='project__img'><img width="200px" src={project.imageSrc} /></p>
      </li>
    )

    return(
    <>
      <section id="projects">
        <h2>Projects</h2>
        <ul className="projects__list">
          { listOfProjects }
        </ul>
      </section>
    </>    
    )
}

export default Projects