import React from 'react'
import StyledCard from '../about/StyledCard'
import VerifiedIcon from '@mui/icons-material/Verified';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import EachSkill from './EachSkill';
const skills = [
    { skill: "HTML", percentage: "90" },
    { skill: "CSS", percentage: "75" },
    { skill: "Javascript", percentage: "80" }
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
                        <h3>Language</h3>
                        <div className="">
                            <div className='row' >
                                {
                                    skills.map(({ skill, percentage }) =>
                                        <div style={{ width: "10px" }} className="col mt-3 border">
                                            <div className='border' style={{ width: "70px" }}>

                                                <CircularProgressbar className='border m-auto col row' style={{ width: "70px" }} value={percentage} text={`${percentage}%`} />
                                            </div>
                                            <h4 className='mt-3 fs-6 '> {skill}</h4>
                                        </div>
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