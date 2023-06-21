import { motion } from "framer-motion";
import { cardVariants } from "../../styles/ScrollEffectAnimationVariant";
import { Verified } from "@mui/icons-material";

const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP"]

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
            <div style={{ fontSize: '0.8em' }} className='mt-5 row justify-content-evenly gap-4 m-auto' >
                {
                    LANGUAGES.map(language => (
                        <div className="col-5 col-md-4 border rounded rounded-3" key={language}>
                            <p className='mt-2 col'><Verified style={{ fontSize: '1.2em' }} /> {language}</p>
                        </div>
                    )
                    )
                }
            </div>
        </motion.li>
    )
}

export default Languages