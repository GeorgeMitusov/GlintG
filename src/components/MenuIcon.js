import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';

import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/MenuIcon.scss';

const MenuIcon = () => {

  const [ menuChange, setMenuChange ] = useState(false);

  const OnMenuChange = () => {
    if ( window.scrollY >= 80 ) {
      setMenuChange(true)
    } else {
      setMenuChange(false)
    }
  }

  window.addEventListener('scroll', OnMenuChange);

  const { onMenuToggle } = useContext(Context);

  return (
    <button
      className={ menuChange ? 'menu sticky' : 'menu'} 
      onClick={onMenuToggle}
    >
      <span> Menu </span>
      <motion.i
        whileHover={{
          scale: 1.1,
          transition: { duration: .7 },
        }}
        whileTap={{ scale: 0.7 }}
      >
        <FontAwesomeIcon className='menu-icon' icon={faBars} />
      </motion.i>
    </button>
  )
}

export default MenuIcon
