import resume from "../../assets/resume.pdf";

import Hamburger from "./Hamburger";
import ModeToggle from "./ModeToggle";
import { motion, useAnimate, Variants } from "framer-motion";
import  './NavBar.scss'
import { useEffect, useState } from "react";

interface Props {
  forwardedRef: React.MutableRefObject<null>,
  setCursor: () => void,
  hamburgerActive: () => void,
  pLoaded: boolean,
}

function NavBar({forwardedRef, setCursor, hamburgerActive, pLoaded}: Props) {
  /*For hamburger*/
  const [visible, setVisible] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    {
      visible ? animate(scope.current, { opacity: 1, zIndex: 2, }, {duration: 0.5}) : animate(scope.current, { opacity: 0, zIndex: 2, transitionEnd: { zIndex: -1, }, }, {duration: 0.5})
    };
    console.log(visible);
  }, [visible]);

  const onClick = () => { //Removes visiblity of navbar upon clicking link
    setVisible(false);
    hamburgerActive();
  }

  /*For inView animations */
  // const ref = useRef(null);
  // const isInView = useInView(ref, {
  //   amount: "all",
  //   once: true,
  // });

  // useEffect(() => {
  //   console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  //   //Maybe check if preloader is loaded(?) another approach is to remove components in view while preloader is not loaded https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
  // }, [isInView])
  //const [loaded, setLoaded] = useState(false);

  const container: Variants = {
      hidden: {
          opacity: 0,
          transition: {
              staggerChildren: 0.25,
          },
      },
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.25,
          },
      }
  }

  const child: Variants = {
      hidden: {
          opacity: 0,
          y: "10px",
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 200
          },  /*For inView animations */
      },
      visible: {
          opacity: 1,
          y: 0,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 200
          },
      }
  };

  return (
      <> 
          <nav ref={forwardedRef} id="nav-bar" className="nav-bar">
            <span className="logo"><a href="#">EDDZRIVI</a></span>  
            <motion.ul initial="hidden" variants={container} animate={pLoaded ? "visible" : "hidden"} className="items">
              <motion.li style={{}} variants={child}><a href="#hero">Home</a></motion.li>
              <motion.li style={{}} variants={child}><a href="#skills">Skills</a></motion.li>
              <motion.li style={{}} variants={child}><a href="#projects">Projects</a></motion.li>
              <motion.li style={{}} variants={child}><a href="#contact">Contact</a></motion.li>
            </motion.ul>
            <div className="toggles">
              <ModeToggle setCursor={setCursor}/>
              <Hamburger visible={ visible } onClickItem={() => {setVisible(!visible); hamburgerActive();}}/>
            </div>
          </nav>
          <nav ref={ scope } className="nav-bar-mobile">
            <ul className="items">
              <li><a onClick={onClick} href="#hero">Home</a></li>
              <li><a onClick={onClick} href="#skills">Skills</a></li>
              <li><a onClick={onClick} href="#projects">Projects</a></li>
              <li><a onClick={onClick} href="#contact">Contact</a></li>
              <li><a onClick={onClick} href={ resume } target="_blank">Resume <svg style={{display: "inline",}} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.87868 34.8198C-0.292893 35.9914 -0.292893 37.8909 0.87868 39.0625C2.05025 40.2341 3.94975 40.2341 5.12132 39.0625L0.87868 34.8198ZM39.9411 3.00004C39.9411 1.34318 38.598 3.47445e-05 36.9411 3.54043e-05L9.94112 3.48564e-05C8.28427 3.49263e-05 6.94112 1.34318 6.94112 3.00004C6.94112 4.65689 8.28427 6.00004 9.94112 6.00004L33.9411 6.00004L33.9411 30C33.9411 31.6569 35.2843 33 36.9411 33C38.598 33 39.9411 31.6569 39.9411 30L39.9411 3.00004ZM5.12132 39.0625L39.0624 5.12135L34.8198 0.878714L0.87868 34.8198L5.12132 39.0625Z" fill="currentcolor"></path></svg></a></li>
            </ul>
          </nav>
      </>
  )
}

export default NavBar;