import  './NavBar.scss'
import Hamburger from "./Hamburger";
import ModeToggle from "./ModeToggle";
import { motion } from "framer-motion";

function NavBar() {
    return (
        <> 
            <nav className="nav-bar">
              <span className="logo">EDDZRIVI</span>  
              <ul className="items">
                <li><a href="#hero">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <ModeToggle/>
              <Hamburger/>
            </nav>
            
        </>
    )
}

export default NavBar;