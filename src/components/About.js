import React, { useContext, useEffect } from 'react'

import { Context } from '../context/Context';

import AnimatedNumber from 'animated-number-react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/About.scss';

const About = () => {

    const { formatValue, statsInfo } = useContext(Context);

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
    
    const containerVariants = {
        initial: { 
          opacity: 0,
          y: -100
        },
        enter: { 
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            staggerChildren: .3,
            delayChildren: .5
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

    const aboutItem = statsInfo.map( ( item, index ) => (
      <div className='about-bottom-section' key={index}>
          <div className='about-bottom-section-stats'>
              <AnimatedNumber 
                value={item.value}
                duration={3000}
                delay={1200}
                formatValue={formatValue}
              />
          </div>
          <h5> { item.title } </h5>
      </div>
    ))

  return (
    <section className='about' id='about'>
        
        <motion.div 
          className='about-container'
          variants={containerVariants}
          initial="initial"
          ref={ref}
          animate={controls}
        >

          <motion.div 
            className='about-top'
            variants={itemA}
          >
            <h3> hello there </h3>
            <h1> We Are Glint </h1>
          </motion.div>

          <motion.div 
            className='about-middle'
            variants={itemA}
          >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/>
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
          </motion.div>

          <motion.div 
            className='about-bottom'
            variants={itemA}
          >
            { aboutItem }
          </motion.div>

        </motion.div>  

        <div className='about-content-line'></div>

    </section>
  )
}

export default About
