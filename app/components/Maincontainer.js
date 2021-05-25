import React, {useState, useEffect, useRef} from 'react';
import '../styles/Maincontainer.css';
import Dots from "./Dots";
import Slides from "./Slides";
import { BiMessageAltCheck, BiRightArrowCircle } from 'react-icons/bi';
import { BiLeftArrowCircle } from 'react-icons/bi';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img1 from './Assets/img1.jpg';


const Maincontainer = () => {
 
    const numberArray = [img1,img2,img3,img4,img5,img2];
    const len=numberArray.length;
    const lastIndex= numberArray.length - 1;
    const delay = 5000;

    const [activeIndex,setActiveIndex]=useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current=setTimeout(
          () =>
            setActiveIndex((i) =>
              i === lastIndex ? 0 : i + 1
            ),
          delay
        );
        return () => {};
      }, [activeIndex]);


    const leftClickhandler = () => {
        setActiveIndex((activeIndex>0)?activeIndex-1:lastIndex)  
    }


    const rightClickhandler = () => {
        setActiveIndex((activeIndex===lastIndex)?0:activeIndex+1)
    }


    return (
        <div className="container">
                     

           <Slides className="container__slides" activeIndex={activeIndex} numberArray={numberArray} len={len} />
          
           <Dots className= "container__dots" activeIndex={activeIndex} numberArray={numberArray} setActiveIndex={setActiveIndex}/>
           
           <div className="buttons">
                <button className="button button--left"  onClick={leftClickhandler}><BiLeftArrowCircle size={35}/></button>
                <p className="button__middle">{activeIndex+1}/{len}</p>
                <button className="button button--right"  onClick={rightClickhandler} ><BiRightArrowCircle size={35}/></button>
           </div>
        </div>
    )
}

export default Maincontainer
