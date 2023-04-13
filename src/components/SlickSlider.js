import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/TopSlider.scss';
import '../styles/LowerSlider.scss';

const SlickSlider = ({ data, property, structure, className, className2 }) => {

  const lowerSlider = data.map( ( i, index ) => (
    <div key={index} className="lower-slide">
        <p className='lower-slide-text'> { i.content } </p>
        <div className='lower-slide-profile'>
            <img 
              className='lower-slide-profile-image'
              src={i.src} 
              alt={i.alt} 
            />
            <span className='lower-slide-profile-user-name'> { i.name } </span>
            <span className='lower-slide-profile-user-title'> { i.title } </span>
        </div>
    </div>
  ))

  const topSlider = data.map( ( i, index ) => (
    <a key={index} className="top-slide" href="/#">
      <img src={i.src} alt={i.alt} />
    </a>
  ))

  const build = structure === 'icon' ? topSlider : lowerSlider;

  return (
    <div className={className}>

      <Slider className={className2} { ...property }>
        { build }
      </Slider>

    </div>
  )
}

export default SlickSlider