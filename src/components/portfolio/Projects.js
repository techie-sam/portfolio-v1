import React from 'react'
import StyledCard from '../about/StyledCard'

const Projects = () => {
    const PROJECTS =[
        { name: "Quizlet Quiz App", link:"https://quizlet001.netlify.app"  },
        { name: "Weather App", link:"https://quizlet001.netlify.app"  },
        { name: "React Portfolio", link:"https://techie-sam.netlify.app"  },
        { name: "React Portfolio", link:"https://techie-sam.netlify.app"  }
    ]
    return (
        <section id="projects">
            <div className='text-center mt-5'>
                <h6>Recent Projects</h6>
                <h5>Projects</h5>
            </div>
            <StyledCard>
                <span>
                </span>
            </StyledCard>
        </section>
    )
}

export default Projects