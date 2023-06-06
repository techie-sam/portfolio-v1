import StyledCard from '../../styles/StyledCard';
import quizlet from '../../assets/quizlet.png';
import portfolio from '../../assets/react-portfolio.png';
import vbank from '../../assets/v-bank-clone.png';
import trems from '../../assets/trems-nigeria.png'
import { motion } from 'framer-motion';
import { textVariants } from '../../styles/ScrollEffectAnimationVariant';

const Projects = () => {
    const PROJECTS = [
        {
            name: "Trems Nigeria",
            liveDemo: "https://tremsnigeria.com",
            image: trems,
            gitHub: "https://quizlet001.netlify.app",
            description: "The website has significantly boosted TREMS Nigeria brand income through its Search Engine Optimization (SEO), seamless user experience, intuitive navigation which have attracted a significant influx of new clients",
        },
        {
            name: "V-Pay",
            liveDemo: "https://v-bank001.vercel.app",
            image: vbank,
            gitHub: "https://github.com/techie-sam/v-bank",
            description: "A functional banking solution which allows users to simulate transactions, manage accounts, and view balances in a secure and reliable environment. The app is built using vanilla JavaScript, HTML, and CSS, and offers a range of basic features.",
        },
        {
            name: "Quizlet Quiz App",
            liveDemo: "https://quizlet001.vercel.app",
            image: quizlet, gitHub: "https://github.com/techie-sam/cbt_react_app",
            description: "A test app designed to combats exam malpractice. Create and take tests online with multiple-choice questions, timed tests, and advanced analytics for progress tracking."
        },

        // {
        //     name: "React Portfolio",
        //     liveDemo: "#",
        //     image: portfolio,
        //     gitHub: "https://github.com/techie-sam/portfoliov1",
        //     description: "Portfolio site showcasing my skills in building responsive web applications using React, Bootstrap, and Material-UI."

        // },
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
                                    <small className='text-justify'>{description}</small>
                                </div>
                                <div className='mt-4'>
                                    <a href={liveDemo} target={name === "React Portfolio" ? null : "_blank"} rel="noreferrer" className="btn btnPrimary m-1">Live Demo</a>
                                    <a href={gitHub} target="_blank" rel="noreferrer" className="btn btnPrimary m-1">Github</a>
                                </div>
                            </motion.li>
                        )
                    }
                </ul>
            </StyledCard>
        </section>
    )
}

export default Projects