import  './Skills.scss'
import Skill from './Skill';
import { motion, useAnimate, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
    onMouseEnter: (cursorVariant: string, cursoText: string) => void,
    onMouseLeave: () => void,
}

function Skills({onMouseEnter, onMouseLeave}: Props) {
    /*Skills*/
    const skills_array = [
        {
            title: "HTML & CSS",
            text: "HyperText Markup Language and Cascading Style Sheets are two of the main technologies I use in building a website, they are respectively for structure and design.",
        },
        {
            title: "JavaScript",
            text: "JavaScript is the programming language that I use to make a website more dynamic. When I need advanced transitions and manual control of the DOM, I use JS and its libraries.",
        },
        {
            title: "ReactJS",
            text: "A JS library mainly used for front-end development. I use it so that I do not need to touch the DOM that much. Everything is done through components.",
        },
        {
            title: "Python",
            text: "Python is an intepreted programming language which I mainly use for Data Analytics and AI, mainly using its Pandas, Numpy, and Keras libraries. I also use it for API creation using Flask.",
        },
        {
            title: "SQL",
            text: "SQL is the programming language I use for databases. It is a relational database programming language.",
        },
        {
            title: "Java",
            text: "Java is a general programming language that mainly uses the OOP approach. I mainly use this on software development when I want to take the OOP approach.",
        },
        {
            title: "PowerShell",
            text: "It is a cross-platform scripting language which basically acts like a command-line. I mainly used this in fixing vulnerabilities and creating automation scripts.",
        },
        {
            title: "Bash",
            text: "Like Powershell, I used this in fixing vulnerabilities and creating automation scripts. Unlike PowerShell though, it is mostly available on Linux.",
        },
        {
            title: "Sass",
            text: "Is a CSS preprocessor which makes CSS more readable and easier to use. I mainly use this instead of css due to easier readablity of styles due to nesting.",
        },
        {
            title: "Azure",
            text: "Azure is my main cloud technology. It is a cloud platform offered by Microsoft. Currenty, I have the AZ-900 and AI-900 certifications.",
        },
        {
            title: "TypeScript",
            text: "TS is a framework of JavaScript which makes the code more readable and less-prone to bugs. It is basically defined as JavaScript with syntax for types.",
        },
        {
            title: "PHP",
            text: "PHP is a server-side programming language which I mainly use for communication between the front-end and SQL",
        },
        {
            title: "Git",
            text: "Git is a tool used for source code management. I mainly use it on GitHub for version control.",
        },
        {
            title: "Jira",
            text: "Jira is a project management tool to make company processes more efficient. It is used in two of the companies I interned in.",
        },
        {
            title: "C++",
            text: "C++ is another multi-paradigm programming language I mainly use for software engineering. I use this when I need to build small-projects such as calculators.",
        },
    ];

    /*Animations*/
    const [scope, animate] = useAnimate();
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [left, setLeft] = useState(0);
    
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            console.log("Titing malaki");
            setCarouselWidth(scope.current.scrollWidth - scope.current.offsetWidth);
        });
        observer.observe(scope.current);
        setLeft(0); //Sets left upon resize of screen to avoid design bug on screen resize
        return () => scope.current && observer.unobserve(scope.current);
    }, [carouselWidth])

    /**
     * When setLeft is called, this useEffect does 2 things.
     * 1. Checks if left is greater than 0 which is the threshold for the left offset then calls the setLeft again and sets it to 0 which in turn calls the useEffect again.
     * 2. Checks if left is greater than the negative of the width of the carousel (or the total width of the whole div) which is the threshold for the right offset then calls the setLeft again and sets it to the maximum right offset which is the negative of the width of carousel.
     * If the left value is within 0 and -carouselWidth, the position will be animated.
    **/
    useEffect(() => {
        console.log("Left: " + left);
        console.log("Carousel width: " + carouselWidth);
        if(left > 0) {
            setLeft(0);
        }
        else if(left < -carouselWidth) {
            setLeft(-carouselWidth);
        }
        else {
            animate(scope.current, {x: left}, {duration: 0.5, type: "spring"});
        }
        
    }, [left])

    const leftButton = () => {
        var scopeStyle = window.getComputedStyle(scope.current);
        var matrix = new WebKitCSSMatrix(scopeStyle.transform);
        // console.log("Matrix: " + matrix.m41);
        // console.log("Left: " + left);
        setLeft(matrix.m41+425);
    }

    const rightButton = () => {
        var scopeStyle = window.getComputedStyle(scope.current);
        var matrix = new WebKitCSSMatrix(scopeStyle.transform);
        // console.log("Matrix: " + matrix.m41);
        // console.log("Left: " + left);
        setLeft(matrix.m41-425)
    }

    /*For inView animations */
    const variants: Variants = {
        default: {
            marginLeft: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },

        hidden: {
            opacity: 0,
            marginLeft: "-500px",
            transition: {
                duration: 1,
            },
        },
    }
    
    const isInView = useInView(scope, {
      amount: 0.1,
      once: true,
      //margin: "0px 0px 0px 300px",
    });

    useEffect(() => {
      console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
      //Maybe check if preloader is loaded(?) another approach is to remove components in view while preloader is not loaded https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
    }, [isInView])

    return (
        <> 
            <div id="skills" className="skills-section">
                <div className="text-section">
                    <h1 className="skills-title">Skill & Tool Set</h1>
                    <div className="text-section-right">
                        <span>Tools and technologies are the guns and ammos of developers. I like building stuff and here are some of the guns and ammos I use.</span>
                        <div className="skills-buttons">
                            <button onMouseEnter={() => {onMouseEnter("button", "")}} onMouseLeave={onMouseLeave} onClick={leftButton}>←</button>
                            <button onMouseEnter={() => {onMouseEnter("button", "")}} onMouseLeave={onMouseLeave} onClick={rightButton}>→</button>
                        </div>
                    </div>
                </div>
                <div className="skills-container"> 
                    
                    <motion.div
                        initial={"hidden"}
                        variants={variants}
                        animate={isInView ? "default" : "hidden"}
                        drag="x" 
                        dragConstraints={{right: 0, left: -carouselWidth}}
                        dragElastic={0} 
                        ref={scope} 
                        className="skill-container" 
                        // onDragEnd={(event, info) => 
                        // {
                        // // Update the xPosition motion value when dragging
                        //     setXPosition(info.offset.x);
                        //     console.log(info);
                        // }}
                    >
                        {skills_array.map((d, i) => (
                            <Skill title={d.title} text={d.text} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  key={i}/>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}
//Frontend, backend, database, cloud, other technologies
//Git
//Python, Java, C++ Bash PowerShell 
//libraries & frameworks?
//Methodologies(?)
//ajax etc2?
//Jira, Github, Gitlab, Photoshop, Blackmagic, Azure, Figma
export default Skills;