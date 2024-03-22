import { motion, Variants, MotionConfig, useAnimate } from "framer-motion";
import { useState } from "react";

import  './PreLoader.scss'

function PreLoader() {
    const [visible, setVisible] = useState(true);
    const [scope, animate] = useAnimate();

    const handleAnimate = async () => {
        //a
    }

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

    return (
        <> 
        <div ref={scope} className="preloader">
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
                        
                        <motion.span style={{}} variants={child}>E</motion.span>
                        <motion.span style={{}} variants={child}>D</motion.span>
                        <motion.span style={{}} variants={child}>U</motion.span>
                        <motion.span style={{}} variants={child}>A</motion.span>
                        <motion.span style={{}} variants={child}>R</motion.span>
                        <motion.span style={{}} variants={child}>D</motion.span>
                        <motion.span style={{}} variants={child}>O</motion.span>

                        <motion.span style={{}} variants={child}>R</motion.span>
                        <motion.span style={{}} variants={child}>I</motion.span>
                        <motion.span style={{}} variants={child}>V</motion.span>
                        <motion.span style={{}} variants={child}>E</motion.span>
                        <motion.span style={{}} variants={child}>R</motion.span>
                        <motion.span style={{}} variants={child}>A</motion.span>

                        <motion.span style={{}} variants={child}>V</motion.span>
                        <motion.span style={{}} variants={child}>I</motion.span>
                        <motion.span style={{}} variants={child}>L</motion.span>
                        <motion.span style={{}} variants={child}>L</motion.span>
                        <motion.span style={{}} variants={child}>A</motion.span>
                        <motion.span style={{}} variants={child}>N</motion.span>
                        <motion.span style={{}} variants={child}>U</motion.span>
                        <motion.span style={{}} variants={child}>E</motion.span>
                        <motion.span style={{}} variants={child}>V</motion.span>
                        <motion.span style={{}} variants={child}>A</motion.span>
                    </motion.span>
                </MotionConfig>

            </div>
        </div>

        </>
    )
}

export default PreLoader;