import  './Hero.scss'
import picture from "../../assets/main-pic.jpg";

interface Props {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function Hero({onMouseEnter, onMouseLeave}: Props) {
  return (
      <> 
         <div id="home" className="hero-section">
            <div className="container-section">
                <div className="text-section">
                    <text><strike>Hello</strike>, I am</text>
                    <text onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Eduardo Villanueva</text>
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
            </div>
         </div>
      </>
  )
}

export default Hero;