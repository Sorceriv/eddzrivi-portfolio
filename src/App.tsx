//'use client';
//import useMousePosition from "./utils/useMousePosition";
import useMouse from "@react-hook/mouse-position";

import PreLoader from "./components/PreLoader/PreLoader";
import Hamburger from "./components/Hamburger/Hamburger";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { animate, motion, useInView, useScroll, Variants } from "framer-motion";
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
    //const { x, y } = useMousePosition({preLoaderLoaded: pLoaded});

    const mouse = useMouse(document.body, {
      enterDelay: 100,
      leaveDelay: 100,
    });

    const [currX, setCurrX] = useState<any>(0);
    const [currY, setCurrY] = useState<any>(0);

    let x: number | null = currX;
    let y: number | null = currY;
    //console.log(mouse);
    

    useEffect(() => {
      if(pLoaded == true) {
        if (mouse.x !== null) {
          setCurrX(mouse.clientX);
        }
        if (mouse.y !== null) {
          setCurrY(mouse.clientY);
        }
      }
    },[mouse])
    
    const [cursorVariant, setCursorVariant] = useState("default");
    const size = 20;

    const variants : Variants = {
      default: {
        opacity: 1,
        x: `${x as any - size/2}px`,
        y: `${y as any - size/2}px`,
        backgroundColor: "var(--text-color)",
        boxShadow: "0px 0px 100px 10px var(--text-color)",
      },
      reset: {
        opacity: 1,
        x: `${x as any - size/2}px`,
        y: `${y as any - size/2}px`,
        backgroundColor: "",
        boxShadow: "0px 0px 100px 10px var(--text-color)",
      },
      text: {
        opacity: 1,
        height: 150,
        width: 150,
        x: `${x as any - 150/2}px`,
        y: `${y as any - 150/2}px`,
        mixBlendMode: "difference",
        backgroundColor: "white",
      },
      footer: {
        opacity: 1,
        x: `${x as any - size/2}px`,
        y: `${y as any - size/2}px`,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 100px 10px #FFFFFF",
      },
      skillCard: {
        opacity: 1,
        height: 150,
        width: 150,
        x: `${x as any - 150/2}px`,
        y: `${y as any - 150/2}px`,
        backgroundColor: "var(--text-color-inverse)",
        color: "var(--text-color)",
        boxShadow: "0px 0px 100px 10px var(--text-color-inverse)",
      },
      button: {
        opacity: 0,
        height: 0,
        width: 0,
        x: `${x as any - size/2}px`,
        y: `${y as any - size/2}px`,
        backgroundColor: "var(--text-color)",
        boxShadow: "0px 0px 100px 10px var(--text-color)",
      },
      resume: {
        height: 150,
        width: 150,
        opacity: 1,
        x: `${x as any - 150/2}px`,
        y: `${y as any - 150/2}px`,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        boxShadow: "0px 0px 100px 10px #FFFFFF",
      }
    }

    const [cursorText, setCursorText] = useState("");

    const cursorEnter = (setVariant: string, cursorText: string,) => {setCursorVariant(setVariant); setCursorText(cursorText);};

    const cursorLeave = () => {setCursorVariant("default"); setCursorText("");};
    const resetCursor = () => {setCursorVariant("reset");}
    
    useEffect(() => {
      if(cursorVariant == "reset") {
        setCursorVariant("default"); //Resets cursor to default upon theme change
      }
    }, [cursorVariant]);

    /*Nav Bar Hamburger Handler*/
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const onHamburgerActive = () => setHamburgerActive(!hamburgerActive);

    useEffect(() => {
      if(pLoaded) {
        if(hamburgerActive) {
          animate("body", {overflow: "hidden",});
        }
        else {
          animate("body", {overflow: "auto",});
        }
      }
    },[hamburgerActive])

    /*Scroll Handler*/
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })

    /*Hamburger Handler*/
    const navScope = useRef(null); //Gets skill component
    const isInView = useInView(navScope, { //Checks if skill component is in view by passing ref to the component
      amount: 0.1,
      //margin: "0px 0px 0px 300px",
    });

    // useEffect(() => {
    //   //console.log(`Skill Card ${isInView ? "is" : "is NOT"} in view`);
    //   //Maybe check if preloader is loaded(?) another approach is to remove components in view while preloader is not loaded https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
    // }, [isInView])
    

    return (
      <>
        <PreLoader onLoaded={preLoaded}/>
        <motion.div 
            className="custom-cursor"
            variants={variants}
            animate={cursorVariant}
            transition={{
              type: "tween",
              duration: 0.5,
              //delay: 0,
              ease: "backOut",
            
            }}
          >
            <span className="cursor-text">{cursorText}</span>
        </motion.div>
        <div ref={ container } className="main-container">
          <Hamburger hamburgerActive={onHamburgerActive} display={isInView ? "none" : "block"}/>
          <NavBar forwardedRef={ navScope } setCursor={resetCursor} hamburgerActive={onHamburgerActive} pLoaded={pLoaded}/>
          <Hero onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} progress={scrollYProgress} range={[0.05, 0.2]} targetScale={0.9} pLoaded={pLoaded}/>
          <Skills onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}/>
          <Projects />
          <Contact onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} />
          <Footer onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} />
        </div>
      </>
      
    )
}

export default App
