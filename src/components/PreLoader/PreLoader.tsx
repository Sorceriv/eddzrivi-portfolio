import { motion, stagger, Variants, MotionConfig, useAnimate, delay, easeIn, AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useState } from "react";

import  './PreLoader.scss'

interface Props {
    onLoaded: () => void;
}

function PreLoader({onLoaded}: Props) {
    const [visible, setVisible] = useState(false);

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
            y: "20%",
            color: "rgba(255,255,255,1)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            color: "rgba(255,255,255,1)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            },
        }
    };

    const [scope, animate] = useAnimate();

    const handleEnterAnimate = async () => {
        await animate(scope.current, { opacity: 1, zIndex: 100, }, {delay: 1});
        await animate(".disappear", { y: "-20%", color: "rgba(0,0,0,0)" }, { delay: stagger(0.05)});
        
        animate("#E", { x: "1000%", }, { type: "tween" });
        animate("#D", { x: "725%", }, { type: "tween" });
        animate("#R", { x: "400%", }, { type: "tween" });
        animate("#I", { x: "1000%", }, { type: "tween" });
        animate("#V", { x: "-75%", }, { type: "tween" });
        await animate("#I-1", { x: "-195%", }, { type: "tween" });
        animate("#DZ", { position: "absolute", });
        await animate("#DZ", { display: "inline", opacity: 1, }, { delay: 0.5, duration: 0.5});

        await animate(scope.current, { opacity: 0, }, {delay: 0.5});
        await animate(scope.current, { transitionEnd: { display: "none", zIndex: -100 } }, {});
        await onLoaded();
    }
    useEffect(()=> {
        setVisible(true);
        handleEnterAnimate();
    });

    //!IMPORTANT!
    //24/03/2024 me: Clean code (specifically animation, find a way to remove percentages), fix error when saving multiple times due to scope not being detected(?) at display none error is maximum callback
    //FIXED: DUE TO EASEIN TRANSITION IS THE CAUSE! SO PUT IT IN MOTIONCONFIG OR USE TYPE: "TWEEN" INSTEAD

    //localize font
    
    return (
        <> 
        <AnimatePresence>
            <motion.div ref={ scope } className="preloader">
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
                            <motion.span id="DZ" initial={{ opacity: 0, display: "none", left: "44.9%",}}>DZ</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>U</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>A</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>R</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>D</motion.span>
                            <motion.span className="disappear" id="O" style={{}} variants={child}>O</motion.span>
                            <span>  </span>
                            <motion.span id="R" style={{}} variants={child}>R</motion.span>
                            <motion.span id="I" style={{}} variants={child}>I</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>V</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>E</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>R</motion.span>
                            <motion.span className="disappear" style={{}} variants={child}>A</motion.span>
                            <span>  </span>
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
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default PreLoader;