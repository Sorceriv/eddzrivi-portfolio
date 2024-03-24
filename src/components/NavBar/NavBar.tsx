import Hamburger from "./Hamburger";
import ModeToggle from "./ModeToggle";
import { motion } from "framer-motion";
import  './NavBar.scss'

function NavBar() {
    return (
        <> 
            <nav className="nav-bar">
              <span className="logo"><a href="#">EDDZRIVI</a></span>  
              <ul className="items">
                <li><a href="#hero">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="toggles">
                <ModeToggle/>
                <Hamburger/>
              </div>
            </nav>
            
        </>
    )
}

export default NavBar;