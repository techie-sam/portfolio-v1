import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";
import { cardVariants } from "../../styles/ScrollEffectAnimationVariant";

const LANGUAGES = [
    { language: "HTML", percentage: "90" },
    { language: "CSS", percentage: "75" },
    { language: "Javascript", percentage: "80" },
]

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
            <div style={{ fontSize: '0.8em' }} className='d-flex mt-5 justify-content-evenly gap-4 m-auto' >
                {
                    LANGUAGES.map(({ language, percentage }) =>
                        <div className="col-3" key={language}>
                            <CircularProgressbar styles={{
                                root: { width: "70%", },
                                path: { stroke: "var(--color-primary)" },
                                trail: { stroke: "#d6d6d6" },
                                text: { fill: "var(--light-slate)", fontSize: "1.5em" },
                            }}
                                className='m-auto col row'
                                value={percentage}
                                text={`${percentage}%`} />
                            <p className='mt-2 col'> {language}</p>
                        </div>
                    )
                }
            </div>
        </motion.li>
    )
}

export default Languages