import React, { useRef, useContext, useEffect } from 'react';
import { Context } from '../context/Context';
import { motion, AnimatePresence } from 'framer-motion';

import { Bars } from 'react-loader-spinner';
import LoadingBar from 'react-top-loading-bar';

import '../styles/Loader.scss';

const Loader = () => {

  const ref = useRef(null);

  const { loadingContent, setLoadingContent } = useContext(Context);

  useEffect(() => {
    ref.current.continuousStart()
    setTimeout(() => {
      ref.current.complete();
      setLoadingContent(false)
    }, 1700);
  }, []);

  const barsVariants = {
    initial: { 
        opacity: 0,
        scale: 0, 
        transition: { 
          duration: 1
        } 
    },
    enter: { 
        opacity: 1,
        scale: 1, 
        transition: { 
          duration: 1
        } 
    },
    exit: { 
      opacity: 0,
      scale: 0, 
      transition: { 
        duration: .5
      } 
  },
  };

  return (
    <section className='loader'>

      <div>
        <LoadingBar 
          color="var(--base-color)" 
          ref={ref}
          loaderSpeed="100"
        />
      </div>

      <AnimatePresence mode="wait">

        { loadingContent && (
          <motion.div
            variants={barsVariants}
            initial="initial"
            animate='enter'
            exit="exit"
          >
            <Bars
              height="40"
              width="40"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </motion.div>
        )}    

      </AnimatePresence>

    </section>
  )
}

export default Loader
