import { motion, MotionConfig } from "framer-motion";
import { useState } from "react";

function Hamburger() {
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
                    onClick={() => setActive(previous_state => !previous_state)}
                    className="hamburger relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
                    animate={active ? "open" : "closed"}
                    // variants= {{
                    //     open: {
                    //         background: "bg-white",
                    //     },
                    //     closed: {
                    //         background: "bg-white/0",
                    //     }
                    // }}
                >
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%",
                        }}
                        className="absolute h-1 w-10 bg-white"
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
                        }}
                        className="absolute h-1 w-10 bg-white"
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
                            left: "calc(50% + 10px)",
                            bottom: "35%",
                            x: "-50%",
                            y: "50%",
                        }}
                        className="absolute h-1 w-5 bg-white"
                        variants={{
                            open: {
                                rotate: ["0deg", "0deg", "108deg"],
                                bottom: ["35%", "50%", "50%"],
                                left: ["calc(50% + 10px)", "calc(50% + 10px)", "50%"],
                            },
                            closed: {
                                rotate: ["108deg", "0deg", "0deg"],
                                bottom: ["50%", "50%", "35%"],
                                left: ["50%", "50%", "calc(50% + 10px)"],
                            }
                        }}
                    />
                </motion.button>
            </MotionConfig>
        </>
    )
}

export default Hamburger;