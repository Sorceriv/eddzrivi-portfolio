'use client';
import useMousePosition from "./utils/useMousePosition";

import PreLoader from "./components/PreLoader/PreLoader";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    },
    text: {
      height: 150,
      width: 150,
      x: `${x - 150/2}px`,
      y: `${y - 150/2}px`,
      mixBlendMode: "difference",
      backgroundColor: "white",
    },
    thirdVariantWorksPlaceholder: {

    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

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

  //
  

  return (
    <>
      <PreLoader onLoaded={preLoaded}/>
      <div className="main-container">
        <motion.div 
          className="custom-cursor"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "tween",
            ease: "backOut",
          }}
        >
        </motion.div>

        <NavBar hamburgerActive={onHamburgerActive}/>
        <Hero onMouseEnter={textEnter} onMouseLeave={textLeave}/>
        <Skills/>
      </div>
    </>
    
  )
}

export default App
