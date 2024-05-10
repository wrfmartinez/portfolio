import { useState, useEffect } from 'react'

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    function handleClick() {
      setOpenMenu(!openMenu)
    }

    return (
    <>
      <nav className="navbar">
        <a className="nav__logo" href='../App.jsx'>W/M</a>
        <svg onClick={handleClick} className='nav__menu-btn' width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4.5C0 3.67031 0.670312 3 1.5 3H19.5C20.3297 3 21 3.67031 21 4.5C21 5.32969 20.3297 6 19.5 6H1.5C0.670312 6 0 5.32969 0 4.5ZM0 12C0 11.1703 0.670312 10.5 1.5 10.5H19.5C20.3297 10.5 21 11.1703 21 12C21 12.8297 20.3297 13.5 19.5 13.5H1.5C0.670312 13.5 0 12.8297 0 12ZM21 19.5C21 20.3297 20.3297 21 19.5 21H1.5C0.670312 21 0 20.3297 0 19.5C0 18.6703 0.670312 18 1.5 18H19.5C20.3297 18 21 18.6703 21 19.5Z" fill="#FFFFFF"/>
        </svg>
        <ul className="nav__list" style={{ display: window.innerWidth > 1100 || openMenu ? 'flex' : 'none' }}>
          <li className="nav__item">
            <a href='#about' onClick={handleClick}>About Me</a>
          </li>
          <li className="nav__item">
            <a href='#projects' onClick={handleClick}>My Work</a>
          </li>
          <li className="nav__item">
            <a href="#contact" onClick={handleClick}>Contact</a>
          </li>
          <li className="nav__item">
            <a className="nav__cta btn" href="https://www.dropbox.com/scl/fi/wt1t60y0skvgqcw37mapi/Resume-5_4_2024-Software-Engineer.pdf?rlkey=giyejlsjyl2vlwilobr12r6bp&st=9dv0eviq&dl=0" onClick={handleClick}>Resume</a>
          </li>
        </ul>
      </nav>
    </>
    )
}

export default Navbar