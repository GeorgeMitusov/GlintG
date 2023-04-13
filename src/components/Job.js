import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/Job.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Job = () => {

  const { workItemInfo } = useContext(Context);

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
          y: 100
        },
        enter: { 
          opacity: 1,
          y: 0,
          transition: {
            delay: .7,
            duration: 1,
            staggerChildren: .4,
            delayChildren: .6
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

  const jobItem = workItemInfo.map( ( item, index ) => (
    <motion.div 
      className='job-item' 
      key={index}
      variants={itemA}
    >

      <div className='job-item-icon-section'>
        <FontAwesomeIcon className='job-item-icon' icon={item.icon} />
      </div>

      <div className='job-item-text-section'>
        <h1> { item.title } </h1>
        <h6> { item.content } </h6>
      </div>

    </motion.div>
  ))

  return (
    <section className='job' id='services'>
      
      <motion.div 
        className='job-container'
        variants={containerVariants}
        initial="initial"
        ref={ref}
        animate={controls}
      >

        <motion.div 
          className='job-top'
          variants={itemA}
        >
          <h3> what we do </h3>
          <h1> 
            We’ve got everything you need to <br/>
            launch and grow your business 
          </h1>
        </motion.div>
    
        <div className='job-top-bottom-line'></div>

        <div className='job-items'>
          { jobItem }
        </div>

      </motion.div>
      
    </section>
  )
}

export default Job