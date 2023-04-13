import React, { useContext } from 'react';
import { Context } from '../context/Context';

import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../styles/Contact.scss';

import ContactForm from './ContactForm';

const Contact = () => {

    const { contactFormInfo, socialInfo } = useContext(Context);

    const contactFormInfoItem = contactFormInfo.map( ( item, index ) => (
        <div className={item.className} key={index}>
            <h5> { item.title } </h5>
            <p> { item.text } </p>
        </div>
    ))

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
            className='contact-form-info-link' 
            key={index}
            variants={linksVariants}
            initial="initial"
            animate='enter'
        >
            <AnchorLink className='side-menu-link' href='#home'> 
                <FontAwesomeIcon className='contact-form-info-link-icon' icon={item.icon} />
            </AnchorLink>
        </motion.li>
    ))

  return (
    <section className='contact' id="contact">
    
        <div className='contact-container'>

            <div className='contact-top'>
                <h3> CONTACT US </h3>
                <h1> Reach out for a new project or just say hello </h1>
            </div>

            <div className='contact-form-container'>

                <div className='contact-form-wrap'>

                    <div className='contact-form-inner-container'>

                        <h3> send us a message </h3>

                        <ContactForm />

                    </div>

                </div>

                <div className='contact-form-info'>

                    <div className='contact-form-info-container'>

                        <div className='contact-form-info-title'>
                            <h3> contact info </h3> 
                        </div>

                        { contactFormInfoItem }
                        
                        <ul className='contact-form-info-links'>
                            { link }
                        </ul>

                    </div>

                </div>

            </div>            
            
        </div>

        <div className='contact-content-line'></div>

    </section>
  )
}

export default Contact
