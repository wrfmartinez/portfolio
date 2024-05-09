import aboutData from "../data/about/aboutData"

function About() {
  const listOfSkills = aboutData.skills.map((skill, idx) => {
    if (skill.frontend) {
      return <div>
        <li className="about__skill-item" key={idx}>
          { skill.toolName } <span className="about__skill-tag">#frontend</span>
        </li>
      </div>
    } else if (skill.backend) {
      return <li className="about__skill-item" key={idx}>
        { skill.toolName } <span className="about__skill-tag">#backend</span>
      </li>
    } else {
      return <li className="about__skill-item" key={idx}>
        { skill.toolName } <span className="about__skill-tag">#other</span>
      </li>
    }
})

  return(
  <>
    <section id="about">
      <h2 className="about__title">About</h2>
      <p className="about__desc">{ aboutData.desc }</p>
      <h3>Tools I've Worked With</h3>
      { listOfSkills }
    </section>
  </>   
  )
}

export default About