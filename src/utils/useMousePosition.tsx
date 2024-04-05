import {useState, useEffect} from 'react';

interface Props {
    preLoaderLoaded: boolean;
}

export default function useMousePosition({preLoaderLoaded}: Props) {

    const [mousePosition, setMousePosition] = useState({x: 0, y:0})
    
    const updateMousePosition = (e: any) => {
        const localY = e.pageY; //- e.target.offsetTop;
        setMousePosition({x: e.clientX, y: localY});
    }

    useEffect( () => {
        if(preLoaderLoaded== true) {
            window.addEventListener("mousemove", updateMousePosition);
            return() => {
                window.removeEventListener("mousemove", updateMousePosition)
            }
        }
    },[preLoaderLoaded])
    //For eddz 28/03/2024
    //Fix mouse offset position custom cursor and its indexes think if add masking watch: https://www.youtube.com/watch?v=nr3U-RpaQuM&t=91s think how not to lag
    //find a way to fix z-indexes how to make elements clickable with custom cursor
    //animation lags when mouse moves, find way to disable mouse animation when preloader starts !IMPORTANT!
    //Maybe add masking like in tutorial : https://www.youtube.com/watch?v=momF_D4odCM&pp=ygUaY2hhbmdlIGN1cnNvciByZWFjdCBmcmFtZXI%3D
    //Fix slider in skills and layout accordingly to mobile and tablet
    //Create projects
    return mousePosition;
}