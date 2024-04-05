'use client';
import useMousePosition from "./utils/useMousePosition";

import PreLoader from "./components/PreLoader/PreLoader";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

import { animate, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import './App.scss';


function App() {
  /*Preloader Loaded Handler*/
  const [pLoaded, setPLoaded] = useState(false);
  const preLoaded = () => setPLoaded(true);

  useEffect(() => {
    if(pLoaded) {
      animate("body", {position: "static"});
    }
    else {
      animate("body", {position: "fixed"});
    }
  },[pLoaded])

  /*Custom Cursor*/
  const { x, y } = useMousePosition({preLoaderLoaded: pLoaded});
  const [cursorVariant, setCursorVariant] = useState("default");
  const size = 20;
  
  const variants = {
    default: {
      x: `${x - size/2}px`,
      y: `${y - size/2}px`,
      backgroundColor: "",
      boxShadow: "0px 0px 100px 10px var(--text-color)",
    },
    text: {
      height: 150,
      width: 150,
      x: `${x - 150/2}px`,
      y: `${y - 150/2}px`,
      mixBlendMode: "difference",
      backgroundColor: "white",
    },
    opposite: {
      x: `${x - size/2}px`,
      y: `${y - size/2}px`,
      backgroundColor: "var(--background-color)",
      boxShadow: "0px 0px 100px 10px var(--text-color-inverse)",
    }
  }

  const textEnter = () => setCursorVariant("text");
  const skillEnter = () => setCursorVariant("opposite");
  const cursorLeave = () => setCursorVariant("default");

  /*Nav Bar Hamburger Handler*/
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const onHamburgerActive = () => setHamburgerActive(!hamburgerActive);

  useEffect(() => {
    if(pLoaded) {
      if(hamburgerActive) {
        animate("body", {position: "fixed"});
      }
      else {
        animate("body", {position: "static"});
      }
    }
  },[hamburgerActive])

  /*Scroll Handler*/
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  //
  

  return (
    <>
      <PreLoader onLoaded={preLoaded}/>
      <motion.div 
          className="custom-cursor"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            //duration: 0,
            //delay: 0,
            ease: "backOut",
          }}
        >
      </motion.div>
      <div ref={ container } className="main-container">
        <NavBar hamburgerActive={onHamburgerActive}/>
        <Hero onMouseEnter={textEnter} onMouseLeave={cursorLeave} progress={scrollYProgress} range={[0.05, 0.2]} targetScale={0.9}/>
        <Skills onMouseEnter={skillEnter} onMouseLeave={cursorLeave}/>
        <Projects />
      </div>
    </>
    
  )
}

export default App
