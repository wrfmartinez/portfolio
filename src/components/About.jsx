import aboutData from "../data/about/aboutData"

function About() {
    const listOfSkills = aboutData.skills.map((skill, idx) =>
      <li className="skill__item" key={idx}>{ skill }</li>
    )

    return(
    <>
      <h2 className="about__title">About</h2>
      <p className="about__desc">{ aboutData.desc }</p>
      <ul className="skill__list">
        { listOfSkills }
      </ul>
    </>   
    )
}

export default About