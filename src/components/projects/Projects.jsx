import StyledCard from '../../styles/StyledCard';
import quizlet from '../../assets/quizlet.png';
import portfolio from '../../assets/react-portfolio.png';
import vbank from '../../assets/v-bank-clone.png';
import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const Projects = () => {
    const PROJECTS = [
        { name: "Quizlet Quiz App", liveDemo: "https://quizlet001.netlify.app", image: quizlet, gitHub: "https://github.com/techie-sam/cbt_react_app", description: "" },
        { name: "React Portfolio", liveDemo: "#", image: portfolio, gitHub: "https://quizlet001.netlify.app" },
        { name: "V Bank Clone", liveDemo: "https://v-bank001.vercel.app", image: vbank, gitHub: "https://github.com/techie-sam/v-bank" },
        { name: "Twitter Clone", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
        { name: "React Portfolio0", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
        { name: "React Portfoli", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
    ]
    return (
        <section id="projects">
            <div className='text-center mt-5 mb-5'>
                <h6>Recent Projects</h6>
                <h5>Projects</h5>
            </div>
            <StyledCard>
                <ul className='row gap-3'>
                    {
                        PROJECTS.map(({ name, liveDemo, gitHub, image, description }) =>
                            <motion.li
                            variants={textVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true }}
                             className='col-sm col-12' key={name}>
                                <div>
                                    <img src={image} className="w-100" alt={name} />
                                    <h4 className='p-3'>{name}</h4>
                                    <small>{description}</small>
                                </div>
                                <a href={liveDemo} target={name === "React Portfolio" ? null : "_blank"} rel="noreferrer" className="btn btnPrimary m-1">Live Demo</a>
                                <a href={gitHub} target="_blank" rel="noreferrer" className="btn btnPrimary m-1">Github</a>
                            </motion.li>
                        )
                    }
                </ul>
            </StyledCard>
        </section>
    )
}

export default Projects