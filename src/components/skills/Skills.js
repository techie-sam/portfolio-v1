import React from 'react'
import StyledCard from '../about/StyledCard'
import VerifiedIcon from '@mui/icons-material/Verified';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import EachSkill from './EachSkill';
import { margin } from '@mui/system';
const LANGUAGES = [
    { language: "HTML", percentage: "90" },
    { language: "CSS", percentage: "75" },
    { language: "Javascript", percentage: "80" },
]
const TECHNOLOGIES = [
    { technology: "Bootstrap", percentage: "90" },
    { technology: "React", percentage: "75" },
    { technology: "Tailwind", percentage: "80" },
    { technology: "MUI", percentage: "80" },
]
const Skills = () => {
    return (

        <section className='mt-5'>
            <div className='text-center mb-3'>
                <h6>Get to know</h6>
                <h5>About my Skills</h5>
            </div>
            <StyledCard>
                <div className='row gap-3' >
                    <span className='col' >
                        <h4>Language</h4>
                        <div>
                            <div className='row' >
                                {
                                    LANGUAGES.map(({ language, percentage }) =>
                                        <div style={{ width: "10px" }} className="col mt-3">

                                                <CircularProgressbar styles={{
                                                    root: { width: "70px", margin:"50px" },
                                                    path: { stroke: "var(--color-primary)" },
                                                    trail: { stroke: "#d6d6d6" },
                                                    text: { fill: "var(--light-slate)", fontSize: "24px" },
                                                }} 
                                                className='m-auto col row' 
                                                style={{ width: "x" }} value={percentage} text={`${percentage}%`} />
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
                            <div className='row' >
                                {
                                    TECHNOLOGIES.map(({technology, percentage}) =>
                                        <small></small>
                                    )
                                }
                            </div>
                        </div>
                    </span>
                    <span className='col' >
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </span>
                </div>
            </StyledCard >

        </section >
    )
}

// function Example(props) {
//     return (
//         <div style={{ marginBottom: 80 }}>
//             <hr style={{ border: "2px solid #ddd" }} />
//             <div style={{ marginTop: 30, display: "flex" }}>
//                 <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
//                 <div style={{ width: "70%" }}>
//                     <h3 className="h5">{props.label}</h3>
//                     <p>{props.description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
export default Skills