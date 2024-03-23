import { motion, stagger, Variants, MotionConfig, useAnimate, delay } from "framer-motion";
import { useEffect, useState } from "react";

import  './PreLoader.scss'

function PreLoader() {
    const [visible, setVisible] = useState(false);
    const [scope, animate] = useAnimate();

    const container: Variants = {
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
            },
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
        await animate(scope.current, { opacity: 1 }, {delay: 2});
        await animate(".disappear", { y: -20, color: "rgba(0,0,0,0)" }, { delay: stagger(0.05)});
        // await animate("#DZ", { display: "inline" });
        // await animate("#DZ", { opacity: 1, }, {delay: 1});
        // await animate([
        //     //["#U", { color: "rgba(0,0,255)", y: -20 }, { duration: 0.5, }],
        //     // ["#A", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
        //     // ["#R", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
        //     // ["#D-1", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
        //     // ["#O", { color: "rgba(0,0,255)", }, { duration: 0.5, }],
        // ]);
        await animate(scope.current, { opacity: 0, zIndex: -9999, }, {delay: 0.5});
        /*await animate(scope.current, { display: "none", zIndex: 0, }, {duration: 0.1});*/
    }

    useEffect(()=> {
        setVisible(true);
        handleAnimate();
        
    });

    return (
        <> 
        <div ref={ scope } className="preloader">
            <div className="texts-container">
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
                        <motion.span id="DZ" style={{ opacity: "0", display: "none", }}>DZ</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>U</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>A</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>R</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>D</motion.span>
                        <motion.span className="disappear" id="O" style={{}} variants={child}>O</motion.span>

                        <motion.span id="R-1" style={{}} variants={child}>R</motion.span>
                        <motion.span id="I" style={{}} variants={child}>I</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>V</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>E</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>R</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>A</motion.span>

                        <motion.span id="V" style={{}} variants={child}>V</motion.span>
                        <motion.span id="I-1" style={{}} variants={child}>I</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>L</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>L</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>A</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>N</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>U</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>E</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>V</motion.span>
                        <motion.span className="disappear" style={{}} variants={child}>A</motion.span>
                    </motion.span>
                </MotionConfig>

            </div>
        </div>

        </>
    )
}

export default PreLoader;