import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import SlickSlider from './SlickSlider';

import '../styles/Clients.scss';

const Clients = () => {

  const { sliderImages, usersData } = useContext(Context);

  const SlickArrowLeft = ({ currentSlide, slideCount, props, onClick }) => (
    <button
      { ...props }
      className="slick-arrow-left"
      aria-disabled={currentSlide === 0 ? true : false}
      onClick={onClick}
    >
      <FontAwesomeIcon className='slick-arrow-left-icon' icon={faArrowLeft} />
    </button>
  )

  const SlickArrowRight = ({ currentSlide, slideCount, props, onClick }) => (
    <button
      { ...props }
      className="slick-arrow-right"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      onClick={onClick}
    >
      <FontAwesomeIcon className='slick-arrow-right-icon' icon={faArrowRight} />
    </button>
  )

  const topSliderSettings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
  }

  const lowerSliderSettings = {
    dots: false,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear' 
  }

  return (
    <section className='clients' id='clients'>
      
      <div className='clients-container'>

        <div className='clients-container-top-content'>

          <motion.div className='clients-container-top-content-header'>
            <h3> OUR CLIENTS </h3>
            <h1> Glint has been honored to partner <br /> up with these clients </h1>
          </motion.div>

          <SlickSlider
            data={sliderImages}
            property={topSliderSettings}
            structure='icon'
            className='top-slick-slider'
            className2='top-slider'
          />

          <div className='clients-container-top-content-bottom-line'></div>

        </div>
        
        <div className='clients-container-bottom-content'>

          <SlickSlider
            data={usersData}
            property={lowerSliderSettings}
            structure='lower'
            className='lower-slick-slider'
            className2='lower-slider'
          />

        </div>

      </div>

      <div className='clients-content-line'></div>

    </section>
  )
}

export default Clients
