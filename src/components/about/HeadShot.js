import headshot from '../../assets/me.png'
import StyledPic from './StyledPic';
import { motion } from 'framer-motion';
import { cardVariants } from '../../styles/ScrollEffectAnimationVariant';

const HeadShot = () => {
  return (
    <StyledPic>
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
      className="wrapper rounded-circle">
      <img
        className="img w-100"
        src={headshot}
        alt="head-shot"
      />
    </motion.div>
  </StyledPic>
  )
}

export default HeadShot