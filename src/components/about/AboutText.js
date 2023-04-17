import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const AboutText = () => {
    return (
        <motion.div variants={textVariants} whileInView='onscreen'initial="offscreen"  className='col-12 col-sm-10 m-auto fs-6 mt-4 text-sm-center'>
            <p className='text-center' >Hello and welcome to my portfolio! My name is Samuel, I am a Front-end developer with proficiency in React JS. I am passionate about building things that lives on the internet, always learning and staying up-to-date with the latest technologies and developments to ensure that I am providing the best possible solutions to my clients.
            </p>
            <a href="#contact" className="btn btnPrimary p-3">Let's Talk</a>
        </motion.div>
    )
}

export default AboutText