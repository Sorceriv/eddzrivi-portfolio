import  './Skill.scss'
import atom from '../../assets/atom.svg';
import { motion } from 'framer-motion';

interface Props {
    title: String;
    text: String;
    onMouseEnter: (cursorVariant: string, cursorText: string) => void;
    onMouseLeave: () => void;
}

function Skill({title, text, onMouseEnter, onMouseLeave}: Props) {
    return (
        <> 
            <motion.div 
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                //whileTap={{ rotate: 1 }} 
                className="skill" 
                onMouseEnter={() => {onMouseEnter("skillCard", "Drag Me")}} 
                onMouseLeave={onMouseLeave}
            >
                <div className="skill-image">
                    <img src={atom}/>
                </div>
                <h4>{ title }</h4>
                <text>{ text }</text>
            </motion.div>
        </>
    )
}
//Frontend, backend, database, cloud, other technologies
//Git
//Python, Java, C++ Bash PowerShell 
//libraries & frameworks?
//Methodologies(?)
//ajax etc2?
//Jira, Github, Gitlab, Photoshop, Blackmagic, Azure, Figma
export default Skill;