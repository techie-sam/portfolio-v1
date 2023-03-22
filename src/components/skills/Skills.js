import React from 'react'
import StyledCard from '../about/StyledCard'
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
    "Material UI",
    "Redux",
    "Responsive web-design",
]
const Skills = () => {
    return (

        <section className=''>
            <div className='text-center mt-5'>
                <h6>Get to know</h6>
                <h5>About my Skills</h5>
            </div>
            <StyledCard>
                <div className='row gap-5 container m-auto mt-5' >
                    <span className='col' >
                        <h4>Language</h4>
                        <div>
                            <div className='row' >
                                {
                                    LANGUAGES.map(({ language, percentage }) =>
                                        <div className="col mt-3" key={language}>
                                            <CircularProgressbar styles={{
                                                root: { width: "60px", },
                                                path: { stroke: "var(--color-primary)" },
                                                trail: { stroke: "#d6d6d6" },
                                                text: { fill: "var(--light-slate)", fontSize: "24px" },
                                            }}
                                                className='m-auto col row'
                                                value={percentage}
                                                text={`${percentage}%`} />
                                            <h4 className='mt-3 fs-6 '> {language}</h4>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </span>

                    <span className='col' >
                        <h4>Technologies</h4>
                        <div>
                            <div className='row m-auto border'>
                                {
                                    TECHNOLOGIES.map(technology =>
                                        <small key={technology} className='col-5 mt-4 m-auto text-start'><VerifiedIcon /> {technology}</small>
                                    )
                                }
                            </div>
                        </div>
                    </span>
                </div>
            </StyledCard >

        </section >
    )
}

export default Skills