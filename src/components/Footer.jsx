function Footer() {
  return(
    <>
      <footer>
        <h2 className="footer__logo">W/M</h2>
        <ul className="footer__link-list">
          <li className="footer__link-item">
            <a className="footer__link" href="https://www.linkedin.com/in/wrfmartinez/" target="_blank">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span><span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="https://github.com/wrfmartinez" target="_blank">
              <span className="fa-brands fa-github" aria-hidden="true"></span><span className="sr-only">GitHub</span>
            </a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="mailto:wrfmartinez@gmail.com">
              <span className="fa-solid fa-square-envelope" aria-hidden="true"></span><span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
        <p className="footer__copyright-text"><small>&copy; 2024 William Martinez. All rights reserved.</small></p>
      </footer>
    </>
  )
}

export default Footer