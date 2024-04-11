import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
    setCursor: () => void,
}

function ModeToggle({setCursor}: Props) {
    const [active, setActive] = useState(false);
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light')
    }
    
    useEffect(() => {
        active ? setLightMode() : setDarkMode();
        setCursor();
    }, [active]); // <- add the count variable here

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
                    className="mode-toggle relative h-20 w-20 rounded-full bg-white/0 transition-colors"
                    animate={active ? "light" : "dark"}
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
                            left: "75%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%",
                            background: "transparent",
                            boxShadow: "-15px 0px 0px 0px white",
                        }}
                        className="absolute h-10 w-10 bg-white rounded-full"
                        variants={{
                            dark: {
                                //rotate: ["0deg", "0deg", "108deg"],
                                left: ["50%", "50%", "50%", "75%"],
                                background: ["white", "transparent", "transparent", "transparent"],
                            },
                            light: {
                                //rotate: ["108deg", "0deg", "0deg"],
                                left: ["75%", "50%", "50%", "50%"],
                                boxShadow: ["none","none","none", "none"],
                                background: ["transparent", "transparent", "transparent", "black"],
                            }
                        }}
                    />
                    {/* <motion.span
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
                    /> */}
                </motion.button>
            </MotionConfig>
        </>
    )
}

export default ModeToggle;