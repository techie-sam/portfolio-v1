import StyledHeader from './StyledHeader';
import CTA from './CTA';
import { motion } from 'framer-motion';
import { childVariant, containerVariant } from './HeaderAnimationStyles';

const items = [
  <h5 key="1">Hi, my name is</h5>,
  <h1 key="2" >Samuel Abolade.</h1>,
  <h6 key="3">Front-end Developer</h6>
];



const Home = () => {

  return (

    <StyledHeader id='home'>
      <section>
        <motion.div initial="hidden" animate="visible" variants={containerVariant}>
          {items.map((item, i) =>
            <motion.div variants={childVariant}>{item}</motion.div>
          )}
        </motion.div>
        <CTA />
      </section >
    </ StyledHeader>


  )
};

export default Home;
