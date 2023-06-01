import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
import { cardVariants } from "../../styles/ScrollEffectAnimationVariant";

const LANGUAGES = ["HTML", "CSS", "JAVASCRIPT", "PHP"]

const Languages = () => {
    return (
        <motion.li
            className='col'
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
        >
            <h4>Language</h4>
            <div style={{ fontSize: '1em' }} className='mt-5 row justify-content-evenly gap-4 m-auto' >
                {
                    LANGUAGES.map(language => (
                        <div className="col-4 border rounded rounded-3" key={language}>
                            <p className='mt-2 col'> {language}</p>
                        </div>
                    )
                    )
                }
            </div>
        </motion.li>
    )
}

export default Languages