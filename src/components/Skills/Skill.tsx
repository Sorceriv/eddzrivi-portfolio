import  './Skill.scss'
import atom from '../../assets/atom.svg';
interface Props {
    title: String;
    text: String;
}

function Skill({title, text}: Props) {
    return (
        <> 
            <div className="skill">
                <div className="skill-image">
                    <img src={atom}/>
                </div>
                <h4>{ title }</h4>
                <text>{ text }</text>
            </div>
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