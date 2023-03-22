import React from 'react'
import StyledCard from '../about/StyledCard'
import VerifiedIcon from '@mui/icons-material/Verified';
const skills = ['HTML', 'CSS', 'JAVASCRIPT', ]
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
                            <small className="" data-aos="fade-right">
                                <VerifiedIcon className="" />
                                <div><h4>HTML</h4>
                                </div>
                            </small>
                            <small className="" data-aos="fade-left">
                                <VerifiedIcon className="" />
                                <small>  <h4>CSS</h4>
                                </small>
                            </small>
                            <small className="" data-aos="fade-right">
                                <VerifiedIcon className="" />
                                <div>
                                    <h4>JavaScript</h4>

                                </div>
                            </small>
                            <small className="" data-aos="fade-left">
                                <VerifiedIcon className="" />
                                <div><h4>TypeScript</h4>
                                </div>
                            </small>
                            <small className="" data-aos="fade-right">
                                <VerifiedIcon className="" />
                                <div>
                                    <h4>React JS</h4>

                                </div>
                            </small>
                            <small className="experience__details" data-aos="fade-right">
                                <VerifiedIcon className="experience__details-icon" />
                                <div>
                                    <h4>Next JS</h4>

                                </div>
                            </small>

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

export default Skills