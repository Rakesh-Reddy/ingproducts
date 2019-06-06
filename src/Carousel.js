import React from 'react';
import INGLOGO1 from './image1.jpg';
import INGLOGO2 from './image2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carousell = (props) => {
  return (
    <div id="carouselss">
      <Carousel className="pt-2">
        <div>
          <img src={INGLOGO1} alt="" />
        </div>
        <div>
          <img src={INGLOGO2} alt="" />
        </div>
        <div>
          <img src={INGLOGO1} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousell;