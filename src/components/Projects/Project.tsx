import  './Project.scss'

interface Props {
    title: string,
    description: string,
    image: string,
    github: string,
    youtube: string,
    documentation: string,
}

export default function Projects({title, description, image, github, youtube, documentation} : Props) {
    return (
        <> 
        <div className="projects-container">
            <div className="description-section">
                <div className="description-container">
                    
                    <h3 className="project-title">{title}</h3>
                    <text>
                        {description}
                    </text>
                </div>
                <div className="description-footer">
                    <text>Technologies used*</text>
                    <div className="description-links">
                        <span>| <a href={github} target="_blank">GH</a> | <a href={youtube} target="_blank">YT</a> | <a href={documentation}>DOC</a> |</span>
                    </div>
                </div>
            </div>
            <div className="project-section">
                <div style={{"backgroundImage": "url(" + image + ")"}} className="project">
                    {/* <img src={ pharmascanner } alt="project"/> */}
                </div>
            </div>
        </div>
        </>
    );
}