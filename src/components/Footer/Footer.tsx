import  './Footer.scss'

interface Props {
    onMouseEnter: (cursorVariant: string, cursorText: string) => void,
    onMouseLeave: () => void,
}

function Footer({onMouseEnter, onMouseLeave}: Props) {
  return (
      <> 
        <div onMouseEnter={() => {onMouseEnter("footer", "")}} onMouseLeave={onMouseLeave} id="footer" className="footer-section">
            <div className="footer-container">
                <div className="logo-container">
                    <h1 className="logo">EDDZRIVI</h1>
                    <span>Copyright &copy; {new Date().getFullYear()}</span>
                </div>
                <div className="links">
                    <span className="link"><a href="https://www.linkedin.com/in/eddzrivi/" target="_blank">LinkedIn</a></span>
                    <span className="link"><a href="https://github.com/Sorceriv" target="_blank">GitHub</a></span>
                    <span className="link"><a href="https://www.hackerrank.com/profile/eduardovillanue2" target="_blank">HackerRank</a></span>
                </div>
                <div className="social-links">
                    <span className="link"><a href="#skills">Skills</a></span>
                    <span className="link"><a href="#projects">Projects</a></span>
                    <span className="link"><a href="#contact">Contact</a></span>
                </div>
                <div className="extra-details">
                    <span>Philippines</span>
                    <span>eddzrivi</span>
                </div>
            </div>
        </div>
      </>
  )
}

export default Footer;