import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import pic from '../../assets/me.png'
import StyledAbout from './StyledAbout';
import StyledPic from './StyledPic';
import StyledCard from './StyledCard';

const duration = 7000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


function About() {
  const [inProp, setInProp] = useState(false)
  const nodeRef = useRef(null);
  return (
    <>
      <div className='text-center mb-3'>
        <h6>Get To Know</h6>
        <h5>About Me</h5>
      </div>
      <section className='container col-10 m-auto d-md-flex gap-5 justify-content-between'>
        <StyledPic>
          <div className="wrapper rounded-circle">
            <img
              className="img w-100"
              src={pic}
              alt="Headshot"
            />
          </div>
        </StyledPic>

        <div className='col-md-6'>
          <StyledCard>
            <div className='row gap-3' >
              <span className='col' data-aos="zoom-in">
                <h5>Experience</h5>
                <small>2+ years Working</small>
              </span>
              <span className='col' data-aos="zoom-in">
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </span>
              <span className='col' data-aos="zoom-in">
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </span>
            </div>
          </StyledCard>

          <p className='col-12 fs-6 mt-4 text-center'>Hello and welcome to my portfolio! My name is Samuel, and I am a Front-end developer with 2 years of experience and proficiency in React JS. I am passionate about building things that lives on the internet, and I have a proven track record of success.<br></br>I am always learning and staying up-to-date with the latest trends and developments in my field to ensure that I am providing the best possible solutions to my clients.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </section>

    </>
  );
}
export default About