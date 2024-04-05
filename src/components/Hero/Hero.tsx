import  './Hero.scss'
import picture from "../../assets/main-pic.jpg";
import { motion, useTransform } from 'framer-motion';



export default function Hero({onMouseEnter, onMouseLeave, progress, range, targetScale}: any) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0]);
    return (
        <> 
            <div id="home" className="hero-section">
                <motion.div style={{ scale, opacity }} className="container-section">
                    <div className="text-section">
                        <h1><s>Hello</s>, I am</h1>
                        <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Eduardo Villanueva</h1>
                    </div>
                    <div className="image-section">
                        <img src={ picture }/>
                    </div>
                    <div className="sub-text-section">
                        <text>Available - <br></br>Let's work together!</text>
                    </div>
                    <div className="sub-button-section">
                        <a href="#skills">↓</a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}