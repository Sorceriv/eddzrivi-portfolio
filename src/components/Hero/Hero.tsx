import  './Hero.scss'
import picture from "../../assets/main-pic.jpg";
import { motion, useTransform, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';



export default function Hero({onMouseEnter, onMouseLeave, progress, range, targetScale, pLoaded}: any) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0]);
    
    /*For inView animations */
    const variants: Variants = {
        default: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },

        hidden: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },

        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },

        below: {
            y: "50px",
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    }

    return (
        <> 
            <div id="hero" className="hero-section">
                <motion.div style={{ scale, opacity }} className="container-section">
                    <motion.div variants={variants} animate={pLoaded ? "visible" : "hidden"} className="text-section">
                        <h1><s>Hello</s>, I am</h1>
                        <h1 onMouseEnter={() => {onMouseEnter("text", "");}} onMouseLeave={onMouseLeave}>Eduardo Villanueva</h1>
                    </motion.div>
                    <motion.div variants={variants} animate={pLoaded ? "visible" : "hidden"} className="image-section">
                        <img src={ picture } alt="loading..."/>
                    </motion.div>
                    <motion.div variants={variants} animate={pLoaded ? "default" : "below"}  className="sub-text-section">
                        <text>Available - <br></br>Let's work together!</text>
                    </motion.div>
                    <motion.div variants={variants} animate={pLoaded ? "default" : "below"}  className="sub-button-section">
                        <a onMouseEnter={() => {onMouseEnter("button", "")}} onMouseLeave={onMouseLeave} href="#skills">↓</a>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}