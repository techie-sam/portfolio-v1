import React from 'react'
import StyledCard from '../about/StyledCard'
import quizlet from '../../assets/quizlet.png'
import portfolio from '../../assets/react-portfolio.png'
const Projects = () => {
    const PROJECTS = [
        { name: "Quizlet quiz App", liveDemo: "https://quizlet001.netlify.app", image: quizlet, gitHub: "https://github.com/techie-sam/cbt_react_app" },
        { name: "React Portfolio", liveDemo: "#", image: portfolio, gitHub: "https://quizlet001.netlify.app" },
        { name: "Weather App", liveDemo: "https://weathermate001.netlify.app", image: "", gitHub: "https://github.com/techie-sam/weather-app" },
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
                        PROJECTS.map(({ name, liveDemo, gitHub, image }) =>
                            <li className='col-sm col-12' key={name}>
                                <div>
                                    <img src={image} className="w-100" alt={name} />
                                    <h4 className='p-3'>{name}</h4>
                                </div>
                                <a href={liveDemo} target={name === "React Portfolio" ? null : "_blank"} rel="noreferrer" className="btn btnPrimary m-1">Live Demo</a>
                                <a href={gitHub} target="_blank" rel="noreferrer" className="btn btnPrimary m-1">Github</a>
                            </li>
                        )
                    }
                </ul>
            </StyledCard>
        </section>
    )
}

export default Projects