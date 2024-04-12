import { motion, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import  './Project.scss'

interface Props {
    title: string,
    description: string,
    image: string,
    github: string,
    youtube: string,
    documentation: string,
}

export default function Projects({title, description, image, github, youtube, documentation} : Props) {
    
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
        console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
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
                    <text>Technologies used*</text>
                    <div className="description-links">
                        <span>| <a href={github} target="_blank">GH</a> | <a href={youtube} target="_blank">YT</a> | <a href={documentation}>DOC</a> |</span>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={"hiddenRight"} variants={variants} animate={isInView ? "default" : "hiddenRight"} className="project-section">
                <div style={{"backgroundImage": "url(" + image + ")"}} className="project">
                    {/* <img src={ pharmascanner } alt="project"/> */}
                </div>
            </motion.div>
        </div>
        </>
    );
}