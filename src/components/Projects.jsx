import projectsData from '../data/projects/projectsData'

function Projects() {
    const listOfProjects = projectsData.map((project, idx) => 
      <li className="project__item" key={idx}>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
      </li>
    )

    return(
    <>
      <h2>My Work</h2>
      <ul className="project__list">
        { listOfProjects }
      </ul>
    </>    
    )
}

export default Projects