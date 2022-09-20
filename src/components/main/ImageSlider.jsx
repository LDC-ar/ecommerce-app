import { SliderData } from './components/helpers/data'
import React from 'react'
import { useState } from 'react';
import './ImageSlider.css';


const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState (0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img src='src\images\left-arrow.png' alt='arrow' className='left-arrow' onClick={prevSlide} />
      <img src='src\images\right-arrow.png' alt='arrow' className='right-arrow' onClick={nextSlide} />

    {SliderData.map((slide, index) => {
      return (
        <div className={index === current ? 'slide.active' :  'slide'} key= {index}>
          {index === current && (
            <img src= {slide.image} alt= 'apple TV' className='image'/>
          )}
        </div>
      )
    })}
    </section>
  );
};

export default ImageSlider