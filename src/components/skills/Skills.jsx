import React from 'react'
import StyledCard from '../../styles/StyledCard'
import Languages from './Languages';
import Technologies from './Technologies';


const Skills = () => {
    return (

        <section id="skills">
            <div className='text-center mt-5'>
                <h6>Get to know</h6>
                <h5>About my Skills</h5>
            </div>
            <StyledCard>
                <ul className='row gap-5  mt-5' >
                    <Languages />
                    <Technologies />
                </ul>
            </StyledCard >

        </section >
    )
}

export default Skills