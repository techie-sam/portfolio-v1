import React from 'react'
import StyledCard from '../about/StyledCard'
import VerifiedIcon from '@mui/icons-material/Verified';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Fade from 'react-reveal/Fade';

const LANGUAGES = [
    { language: "HTML", percentage: "90" },
    { language: "CSS", percentage: "75" },
    { language: "Javascript", percentage: "80" },
]
const TECHNOLOGIES = [
    "Bootstrap",
    "Tailwind",
    "React",
    "Material UI",
    "Redux",
    "Next JS",
]
const Skills = () => {
    return (

        <section id="skills" className='borer'>
            <div className='text-center mt-5'>
                <h6>Get to know</h6>
                <h5>About my Skills</h5>
            </div>
            <StyledCard>
                <ul className='row gap-5  mt-5' >
                    <Fade bottom>
                        <li className='col' >
                            <h4>Language</h4>
                            <div style={{fontSize:'0.8em'}} className='d-flex mt-5 justify-content-evenly gap-4 m-auto' >
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
                        </li>
                    </Fade>

                    {/* <Fade bottom>
                        <li className='col' >
                            <h4>Technologies</h4>
                            <div>
                                <div style={{ minWidth: '250px' }} className='row m-auto'>
                                    {
                                        TECHNOLOGIES.map(technology =>
                                            <small key={technology} className='col-5 mt-4 m-auto text-start'><VerifiedIcon /> {technology}</small>
                                        )
                                    }
                                </div>
                            </div>
                        </li>
                    </Fade> */}
                </ul>
            </StyledCard >

        </section >
    )
}

export default Skills