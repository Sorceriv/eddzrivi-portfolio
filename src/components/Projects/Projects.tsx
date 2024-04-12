import pharmascanner from "../../assets/images/pharmascanner.png";

import Project from "./Project"
import  './Projects.scss'

interface Props {
    onMouseEnter: (cursorVariant: string, cursoText: string) => void,
    onMouseLeave: () => void,
}

export default function Projects({onMouseEnter, onMouseLeave}: Props) {
    /*Projects*/
    const projects_array = [
        {
            title: "PharmaScanner",
            description: "A counterfeit medicine detector that detects counterfeit medicines by scanning its label. This is achieved through the use of CNN and image recognition using the Keras library. Frontend is built using Dart and Kotlin.",
            image: pharmascanner,
            github: "https://github.com/Sorceriv/PharmaScanner",
            youtube: "https://youtu.be/gevdtRQ88gg",
            documentation: "#",
        },
    ];

    return (
        <> 
            <div id="projects" className="projects-section">
                <div className="container-section">
                    <h1 className="projects-title">Projects</h1>

                    {projects_array.map((d, i) => (
                            <Project onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={d.title} description={d.description} image={d.image} github={d.github} youtube={d.youtube} documentation={d.documentation} key={i}/>
                    ))}
{/* 
                    <div className="projects-container">
                        <div className="description-section">
                            <div className="description-container">
                                
                                <h3 className="project-title">PharmaScanner</h3>
                                <text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibullis a.
                                </text>
                            </div>
                            <div className="description-footer">
                                <text>Technologies used*</text>
                                <div className="description-links">
                                    <span>| <a href="https://github.com/Sorceriv/PharmaScanner" target="_blank">GH</a> | <a href="https://youtu.be/gevdtRQ88gg" target="_blank">YT</a> | <a href="documentation">DOC</a> |</span>
                                </div>
                            </div>
                        </div>
                        <div className="project-section">
                            <div style={{"backgroundImage": "url(" + pharmascanner + ")"}} className="project">
                                <img src={ pharmascanner } alt="project"/>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    );
}