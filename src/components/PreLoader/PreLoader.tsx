import { motion, Variants, MotionConfig, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

import  './PreLoader.scss'

function PreLoader() {
    const [visible, setVisible] = useState(false);
    const [scope, animate] = useAnimate();

    const container: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        }
    }

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            },
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

    const handleAnimate = async () => {
        
        await animate([
            //["#U", { color: "rgba(0,0,255)", y: -20 }, { duration: 0.5, }],
            ["#A", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
            ["#R", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
            ["#D-1", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
            ["#O", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
        ]);
    }

    useEffect(()=> {
        setVisible(true);
        setTimeout(() => {
            handleAnimate();
        }, 2000);
        
    });

    return (
        <> 
        <div ref={ scope } className="preloader">
            <div className="texts-container"
            >
                <MotionConfig 
                    transition={{
                    }}
                >
                    <motion.span
                        initial="hidden"
                        variants={container}
                        style={{
                            display: "flex",
                            overflow: "hidden",
                        }}
                        animate={visible ? "visible" : "hidden"}
                    >
                        
                        <motion.span id="E" style={{}} variants={child}>E</motion.span>
                        <motion.span id="D" style={{}} variants={child}>D</motion.span>
                        <motion.span id="U" style={{}} variants={child}>U</motion.span>
                        <motion.span id="A" style={{}} variants={child}>A</motion.span>
                        <motion.span id="R" style={{}} variants={child}>R</motion.span>
                        <motion.span id="D-1" style={{}} variants={child}>D</motion.span>
                        <motion.span id="O" style={{}} variants={child}>O</motion.span>

                        <motion.span id="R-1" style={{}} variants={child}>R</motion.span>
                        <motion.span id="I" style={{}} variants={child}>I</motion.span>
                        <motion.span id="V" style={{}} variants={child}>V</motion.span>
                        <motion.span id="E-1" style={{}} variants={child}>E</motion.span>
                        <motion.span id="R-2" style={{}} variants={child}>R</motion.span>
                        <motion.span id="A-1" style={{}} variants={child}>A</motion.span>

                        <motion.span id="V" style={{}} variants={child}>V</motion.span>
                        <motion.span id="I-1" style={{}} variants={child}>I</motion.span>
                        <motion.span id="L" style={{}} variants={child}>L</motion.span>
                        <motion.span id="L-1" style={{}} variants={child}>L</motion.span>
                        <motion.span id="A-2" style={{}} variants={child}>A</motion.span>
                        <motion.span id="N" style={{}} variants={child}>N</motion.span>
                        <motion.span id="U-1" style={{}} variants={child}>U</motion.span>
                        <motion.span id="E-2" style={{}} variants={child}>E</motion.span>
                        <motion.span id="V-1" style={{}} variants={child}>V</motion.span>
                        <motion.span id="A-3" style={{}} variants={child}>A</motion.span>
                    </motion.span>
                </MotionConfig>

            </div>
        </div>

        </>
    )
}

export default PreLoader;