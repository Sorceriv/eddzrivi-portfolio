import  './Skills.scss'
import Skill from './Skill';
import atom from '../../assets/atom.svg';
import { animate, motion, useAnimate, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function Skills({onMouseEnter, onMouseLeave}: Props) {
    /*Skills*/
    const skills_array = [
        {
            title: "HTML & CSS",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet leo a tellus molestie, non ornare orci semper.",
        },
        {
            title: "Javascript",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet leo a tellus molestie, non ornare orci semper.",
        },
        {
            title: "ReactJS",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet leo a tellus molestie, non ornare orci semper.",
        },
        {
            title: "Java",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet leo a tellus molestie, non ornare orci semper.",
        },
        {
            title: "C++",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet leo a tellus molestie, non ornare orci semper.",
        },
    ];

    /*Animations*/
    
    
    const [scope, animate] = useAnimate();
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [left, setLeft] = useState(0);
    

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            console.log("Test");
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

    return (
        <> 
            <div id="skills" className="skills-section">
                <div className="text-section">
                    <h1 className="skills-title">Skill & Tool Set</h1>
                    <div className="text-section-right">
                        <span>Tools and technologies are the guns and ammos of developers. I like building stuff and here are some of the guns and ammos I use.</span>
                        <div className="skills-buttons">
                            <button onClick={leftButton}>←</button>
                            <button onClick={rightButton}>→</button>
                        </div>
                    </div>
                </div>
                <div className="skills-container"> 
                    
                    <motion.div
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