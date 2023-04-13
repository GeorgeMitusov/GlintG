import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/Projects.scss';

const Projects = () => {

  const { imagesInfo } = useContext(Context);

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    if ( inView ) {
      controls.start('enter')
    }
    else {
      controls.start('initial')
    }
  }, [ controls, inView ])

  // const onInit = () => {
  //   console.log('lightGallery has been initialized');
  // };
  
  const containerVariants = {
      initial: { 
        opacity: 0,
        y: 100
      },
      enter: { 
        opacity: 1,
        y: 0,
        transition: {
          delay: .3,
          duration: 1,
          staggerChildren: 1,
          delayChildren: .7
        }
      }
  };

  const itemA = {
    initial: {
      opacity: 0,
      y: 100
    },
    enter: {
      opacity: 1,
      y: 0,
    }
  }

  const gallery = imagesInfo.map( ( i, index ) => (
    <div 
      className='projects-portfolio-item'
      href={i.src}
      key={index}
      style={{ height: i.height}} 
    >

      <img 
        className='projects-portfolio-item-image'
        alt={i.info} 
        src={i.thumb}
        style={{ height: i.height}} 
      />

      <div 
        className='projects-portfolio-item-image-overlay'
        style={{ height: i.height }}
      >
        <div className='projects-portfolio-item-image-overlay-icon-wrap'>
          <a 
            href="/#"
            className='projects-portfolio-item-image-overlay-icon-link'
            >
            <FontAwesomeIcon className='projects-portfolio-item-image-overlay-icon' icon={faLink} />
            <div className='projects-portfolio-item-image-overlay-icon-line'></div>
          </a>
        </div>
        <div className='projects-portfolio-item-image-overlay-plus'> 
          <p> + </p>
        </div>
        <div className='projects-portfolio-item-image-overlay-title'>
          <h3> { i.title } </h3>
          <p> { i.text } </p>
        </div>
      </div>

    </div>
  ))

  return (
    <section className='projects' id='works'>

        <div className='projects-black-section'></div>

        <motion.div 
          className='projects-wrap'
          variants={containerVariants}
          initial="initial"
          ref={ref}
          animate={controls}  
        >

          <motion.div 
            className='projects-header'
            variants={itemA}
          >
            <h3> RECENT WORKS </h3>
            <h1> We love what we do, check out <br/> some of our latest works </h1>
            <div className='projects-header-bottom-line'></div>
          </motion.div>

          <motion.div 
            className='projects-portfolio'
            variants={itemA}
          >

            <LightGallery
              // onInit={onInit}
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              { gallery }
            </LightGallery>

          </motion.div>

        </motion.div>

    </section>
  )
}

export default Projects