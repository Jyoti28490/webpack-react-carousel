import React from 'react';
import '../styles/Dots.css';


const Dots = ({activeIndex,numberArray, setActiveIndex}) => {

    return (
        <div className="dots">         
          {numberArray.map((item,i)=>(
            <div
             key={item+i}
             className={`slideshowDot${activeIndex === i ? " active" : ""}`}
             onClick={() => {
             setActiveIndex(i);   
              }}
            />
              
          ))}

        </div>
    )
}

export default Dots