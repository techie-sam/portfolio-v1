import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const AboutText = () => {
    return (
        <motion.div viewport={{ once: true }} variants={textVariants} whileInView='onscreen' initial="offscreen" className='col-12 col-sm-10 m-auto fs-6 mt-4 text-sm-center'>
            <p className='text-center' >Hello and welcome to my portfolio! My name is Samuel, and I'm a Web Developer. I love building things for the internet, and my main goal is to help you create a website that can double your income. I'm always learning and keeping up with the latest technologies to make sure I can provide you with the best solutions. Let's work together to create a website that boosts your earnings!"
            </p>
            <a href="#contact" className="btn btnPrimary p-3">Let's Talk</a>
        </motion.div>
    )
}

export default AboutText