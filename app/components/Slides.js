import React from 'react';
import '../styles/Slides.css'
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img1 from './Assets/img1.jpg';

const Slides = ({activeIndex,numberArray,len}) => {
    return (
    <div class="slides-box">
       
      <div class="slide"
       style={{transition:"all 0.2s"}}
      >

        <div className="card"
         style={{transform:`translateX(${activeIndex*-30}rem)`}}
         > 
            {numberArray.map((img,activeIndex) =>
              <img
               key={img+activeIndex}
               src={img} 
               alt="photo" 
               style={{height: "100%"}}
              />
            )}
         
        </div>
     
      </div>    
    </div>
       
  )
}

export default Slides


