import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StyledHeader from './StyledHeader';
import CTA from './CTA';
import { motion } from 'framer-motion';
import { childVariant, containerVariant } from './HeaderAnimationStyles';

const items = [
  <h5 key="1">Hi my name is</h5>,
  <h1 key="2" >Samuel Abolade</h1>,
  <h6 key="3">Front-end Developer</h6>
];



const Home = () => {
  // const [inProp, setInProp] = useState(false);
  // const [CTAdisplay, setCTAdisplay] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setInProp(true), 1000);
  //   setTimeout(() => setCTAdisplay(true), 2000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (

    <header id='home' className='m-auto'>
      {/* <motion.h2 className='m-auto' initial={{ x: "-100vw" }} animate={{ fontSize: "100px", color: "#ff2994", x: 0 }}>
        Wubba Lubba Dub Dub!
      </motion.h2> */}
      <section >
        <StyledHeader>
          <motion.ul initial="hidden" animate="visible" variants={containerVariant}>
            {items.map((item, i) =>
              <motion.li variants={childVariant}>{item}</motion.li>
            )}
          </motion.ul>
          {
            <CTA />
          }
        </ StyledHeader>
      </section>
    </header>

  )
};

export default Home;
