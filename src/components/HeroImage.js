import React from "react";

import ImageSix from "./../img/6.png";
import ImageFive from "./../img/5.png";
import ImageFour from "./../img/4.png";
import ImageThree from "./../img/3.png";
import ImageTwo from "./../img/2.png";
import ImageOne from "./../img/1.png";

//import Content from "./Content";

function HeroImage() {
  return (
    <div className='container'>
      <div className='title'>Title</div>
      <div className='images'>
        <div className='image-wrapper' id='first'>
          <img src={ImageSix} alt='6' />
        </div>
        <div className='image-wrapper' id='second'>
          <img src={ImageFive} alt='5' />
        </div>
        <div className='image-wrapper' id='third'>
          <img src={ImageFour} alt='4' />
        </div>
        <div className='image-wrapper' id='forth'>
          <img src={ImageThree} alt='3' />
        </div>

        <div className='image-wrapper' id='fifth'>
          <img src={ImageTwo} alt='2' />
        </div>
        <div className='image-wrapper' id='sixth'>
          <img src={ImageOne} alt='1' />
        </div>

        <div className='blur'></div>
      </div>
    </div>
  );
}

export default HeroImage;
