import React from 'react'
import StyledCard from '../../styles/StyledCard'
import VerifiedIcon from '@mui/icons-material/Verified';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const LANGUAGES = [
    { language: "HTML", percentage: "90" },
    { language: "CSS", percentage: "75" },
    { language: "Javascript", percentage: "80" },
]
const TECHNOLOGIES = [
    "Bootstrap",
    "Tailwind",
    "React",
    "MUI",
    "Redux",
    "Next JS",
]
const Skills = () => {
    return (

        <section id="skills">
            <div className='text-center mt-5'>
                <h6>Get to know</h6>
                <h5>About my Skills</h5>
            </div>
            <StyledCard>
                <ul className='row gap-5  mt-5' >
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

                        <li className='col' >
                            <h4>Technologies</h4>
                            <div>
                                <div  className='row justify-content-evenly m-auto'>
                                    {
                                        TECHNOLOGIES.map(technology =>
                                            <small style={{fontSize:'0.79em'}} key={technology} className='col-5 mt-4 m-auto text-start borde'><VerifiedIcon style={{fontSize:'0.9em'}} /> {technology}</small>
                                        )
                                    }
                                </div>
                            </div>
                        </li>
                </ul>
            </StyledCard >

        </section >
    )
}

export default Skills