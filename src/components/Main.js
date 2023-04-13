import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';
import Logo from '../assets/logo.png'

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import MenuIcon from './MenuIcon'
import SideMenu from './SideMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../styles/Main.scss'

const Main = () => {

    const controls = useAnimation();
    const [ ref, inView ] = useInView();

    const { socialInfo } = useContext(Context);

    useEffect(() => {
      if ( inView ) {
        controls.start('enter')
      }
      else {
        controls.start('exit')
      }
    }, [ controls, inView ])

    const contentVariants = {
        initial: { scale: 1, opacity: 0 },
        enter: { 
            scale: 1, 
            opacity: 1, 
            staggerChildren: .2,
            delayChildren: .3,
        },
        exit: { 
            scale: 0, 
            opacity: 0, 
        }
    };

    const linksVariants = {
        initial: { 
            opacity: 0, 
            transition: { 
                delay: 1, 
                duration: 1.5
            } 
        },
        enter: { 
            opacity: 1, 
            transition: { 
                delay: 1.3, 
                duration: 1.5,
            } 
        },
    };

    const link = socialInfo.map( ( item, index ) => (
        <motion.li 
            className='main-link' 
            key={index}
            variants={linksVariants}
            initial="initial"
            animate='enter'
        >
            <a href='/#'>
                <span className='main-link-title'> 
                    { item.title }
                </span>
                <FontAwesomeIcon className='main-link-icon' icon={item.icon} />
            </a>
        </motion.li>
    ))

  return (
    <div className='main' id='home'>

        <header>
            <img src={Logo} alt="logo" />
            <MenuIcon/>
        </header>

        <SideMenu/>

        <div className='main-content'>
            
            <motion.div 
                className='content'
                ref={ref}
                variants={contentVariants}
                initial="initial"
                animate={controls}
            >
                <h3> WELCOME TO GLINT </h3>
                <h1> 
                    We are a creative group <br/>
                    of people who design <br/>
                    influential brands and <br/>
                    digital experiences. 
                </h1>
                <div className='content-btns'>

                    <AnchorLink className='content-btn-start' href='#contact'> 
                        start a project
                    </AnchorLink>

                    <AnchorLink className='content-btn-about' href='#about'> 
                        more about us
                    </AnchorLink>

                </div>
            </motion.div>

            <ul className='main-links'>
                { link }
            </ul>

            <div className='main-scroll-down'>
                <AnchorLink className='main-scroll-down-link' href="#about">
                    <FontAwesomeIcon className='main-scroll-down-icon' icon={faChevronDown} />
                    scroll down
                </AnchorLink>
            </div>

            <div className='main-content-line'></div>
            
        </div>
    </div>
  )
}

export default Main
