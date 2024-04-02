import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

interface Props {
    onClickItem: () => void;
}

function Hamburger({onClickItem}: Props) {
    const [active, setActive] = useState(false);
    
    return (
        <> 
            <MotionConfig
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <motion.button 
                    initial={false}
                    onClick={() => {setActive(previous_state => !previous_state); onClickItem();}}
                    className="hamburger relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
                    animate={active ? "open" : "closed"}
                    variants= {{
                        open: {
                            background: "rgba(255,255,255,0.2)",
                        },
                        closed: {
                            background: "rgba(255,255,255,0)",
                        }
                    }}
                >
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%",
                            background: "var(--text-color)",
                            borderRadius: "5px"
                        }}
                        className="absolute h-1 w-7 bg-white"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "108deg"],
                                top: ["35%", "50%", "50%"],
                            },
                            closed: {
                                rotate: ["108deg", "0deg", "0deg"],
                                top: ["50%", "50%", "35%"],
                            }
                        }}
                    />
                    <motion.span
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%",
                            background: "var(--text-color)",
                            borderRadius: "5px"
                        }}
                        className="absolute h-1 w-7 bg-white"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "108deg"],
                            },
                            closed: {
                                rotate: ["108deg", "0deg", "0deg"],
                            }
                        }}
                    />  
                    <motion.span
                        style={{
                            left: "calc(50% + 6px)",
                            bottom: "35%",
                            x: "-50%",
                            y: "50%",
                            background: "var(--text-color)",
                            borderRadius: "5px"
                        }}
                        className="absolute h-1 w-4 bg-white"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "108deg"],
                                bottom: ["35%", "50%", "50%"],
                                left: ["calc(50% + 6px)", "calc(50% + 6px)", "50%"],
                            },
                            closed: {
                                rotate: ["108deg", "0deg", "0deg"],
                                bottom: ["50%", "50%", "35%"],
                                left: ["50%", "50%", "calc(50% + 6px)"],
                            }
                        }}
                    />
                </motion.button>
            </MotionConfig>
        </>
    )
}

export default Hamburger;