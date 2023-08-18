import { motion } from "framer-motion";
import { textVariants } from "../../styles/ScrollEffectAnimationVariant";

const AboutText = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={textVariants}
      whileInView="onscreen"
      initial="offscreen"
      className="col-12 col-sm-10 m-auto fs-6 mt-4 text-sm-center"
    >
      <p className="text-center">
        Welcome to my portfolio! I'm Samuel, a skilled Web Developer. I have a
        passion for crafting online solutions that drive results. My primary
        objective is to assist you in creating a website that significantly
        enhances your earnings. I continually update my knowledge and stay
        current with the latest technologies to provide you with top-notch
        solutions. Let's collaborate to develop a website that not only meets
        but surpasses your income goals.
      </p>
      <a href="#contact" className="btn btnPrimary p-3">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default AboutText;
