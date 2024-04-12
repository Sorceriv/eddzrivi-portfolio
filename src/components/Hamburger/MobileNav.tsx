import resume from "../../assets/resume.pdf";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import "./MobileNav.scss";

interface Props {
  clickItem: () => void,
  visible: boolean,
}

function MobileNav({clickItem, visible}: Props) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    {
      visible ? animate(scope.current, { opacity: 1, zIndex: 2, overflow: "hidden", }, {duration: 0.5}) : animate(scope.current, { opacity: 0, zIndex: 2, transitionEnd: { zIndex: -1, } }, {duration: 0.5})
    };
    console.log(visible);
  }, [visible]);

  return (
      <> 
          <nav ref={ scope } className="scroll-nav-mobile">
            <ul className="items">
              <li><a onClick={clickItem} href="#hero">Home</a></li>
              <li><a onClick={clickItem} href="#skills">Skills</a></li>
              <li><a onClick={clickItem} href="#projects">Projects</a></li>
              <li><a onClick={clickItem} href="#contact">Contact</a></li>
              <li><a onClick={clickItem} href={ resume } target="_blank">Resume <svg style={{display: "inline",}} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.87868 34.8198C-0.292893 35.9914 -0.292893 37.8909 0.87868 39.0625C2.05025 40.2341 3.94975 40.2341 5.12132 39.0625L0.87868 34.8198ZM39.9411 3.00004C39.9411 1.34318 38.598 3.47445e-05 36.9411 3.54043e-05L9.94112 3.48564e-05C8.28427 3.49263e-05 6.94112 1.34318 6.94112 3.00004C6.94112 4.65689 8.28427 6.00004 9.94112 6.00004L33.9411 6.00004L33.9411 30C33.9411 31.6569 35.2843 33 36.9411 33C38.598 33 39.9411 31.6569 39.9411 30L39.9411 3.00004ZM5.12132 39.0625L39.0624 5.12135L34.8198 0.878714L0.87868 34.8198L5.12132 39.0625Z" fill="currentcolor"></path></svg></a></li>
            </ul>
          </nav>
      </>
  )
}

export default MobileNav;