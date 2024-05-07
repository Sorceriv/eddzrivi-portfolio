import file_icon from "../../assets/images/icons/file_icon.svg";
import github_icon from "../../assets/images/icons/github_icon.svg";
import youtube_icon from "../../assets/images/icons/youtube_icon.svg";

import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import  './Project.scss'

interface Props {
    onMouseEnter: (cursorVariant: string, cursoText: string) => void,
    onMouseLeave: () => void,
    title: string,
    description: string,
    image: string,
    github: string,
    youtube: string,
    documentation: string,  
    technologies: string,   
}

export default function Projects({onMouseEnter, onMouseLeave, title, description, image, github, youtube, documentation, technologies} : Props) {
    
    /*For inView animations */
    const variants: Variants = {
        default: {
            marginLeft: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },

        hiddenRight: {
            opacity: 0,
            marginLeft: "1000px",
            transition: {
                duration: 1,
            },
        },

        hiddenLeft: {
            opacity: 0,
            marginLeft: "-500px",
            transition: {
                duration: 1,
            },
        }
    }
    
    const scope = useRef(null);

    const isInView = useInView(scope, {
        amount: 0.25,
        once: true,
        //margin: "0px 0px 0px 300px",
    });
  
    useEffect(() => {
        //console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
        //Maybe check if preloader is loaded(?) another approach is to remove components in view while preloader is not loaded https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
    }, [isInView])

    return (
        <> 
        <div ref={scope} className="projects-container">
            <motion.div initial={"hiddenLeft"} variants={variants} animate={isInView ? "default" : "hiddenLeft"} className="description-section">
                <div className="description-container">
                    
                    <h3 className="project-title">{title}</h3>
                    <text>
                        {description}
                    </text>
                </div>
                <div className="description-footer">
                    <text onMouseEnter={() => {onMouseEnter("projectDescription" ,technologies)}} onMouseLeave={onMouseLeave}>Technologies used*</text>
                    <div className="description-links">
                        <span>
                            <a onMouseEnter={() => {onMouseEnter("projectLink" ,"GitHub")}} onMouseLeave={onMouseLeave} href={github} target="_blank">
                                <img src={github_icon}/>
                            </a> 
                            <a onMouseEnter={() => {onMouseEnter("projectLink" ,"YouTube")}} onMouseLeave={onMouseLeave} href={youtube} target="_blank">
                                <img src={youtube_icon}/>
                            </a> 
                            <a onMouseEnter={() => {onMouseEnter("projectLink" ,"Document")}} onMouseLeave={onMouseLeave} href={documentation}>
                                <img src={file_icon}/>
                            </a> 
                        </span>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={"hiddenRight"} variants={variants} animate={isInView ? "default" : "hiddenRight"} className="project-section">
                <div style={{"backgroundImage": "url(" + image + ")"}} className="project">
                    {/* <img src={ image } alt=""/> */}
                </div>
            </motion.div>
        </div>
        </>
    );
}