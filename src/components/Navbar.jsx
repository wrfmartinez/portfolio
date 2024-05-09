function Navbar() {
    return (
    <>
      <nav className="navbar">
        <a className="nav__logo" href='../App.jsx'>W/M</a>
        <ul className="nav__list">
          <li className="nav__item">
            <a href='#about'>About Me</a>
          </li>
          <li className="nav__item">
            <a href='#projects'>My Work</a>
          </li>
          <li className="nav__item">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav__item">
            <a className="nav__cta btn" href="https://www.dropbox.com/scl/fi/wt1t60y0skvgqcw37mapi/Resume-5_4_2024-Software-Engineer.pdf?rlkey=giyejlsjyl2vlwilobr12r6bp&st=9dv0eviq&dl=0">Resume</a>
          </li>
        </ul>
      </nav>
    </>
    )
}

export default Navbar