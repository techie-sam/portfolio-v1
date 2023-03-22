import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import pic from '../../assets/me.png'
import StyledAbout from './StyledAbout';
import StyledPic from './StyledPic';

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
    <StyledAbout>
      <section className='container col-10 m-auto d-md-flex gap-5 justify-content-between'>

        {/* <div className="col-8 col-md-4">
          <div className="my-image-div">
            <img src={pic} alt="About Imae" className='w-100 m-auto' />
          </div>
        </div > */}
        <StyledPic>
          <div className="wrapper rounded-circle">
            <img
              className="img w-100"
              src={pic}
              alt="Headshot"
            />
          </div>
        </StyledPic>

        <div >
          <div >
            <articule data-aos="zoom-in">
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </articule>
            <articule data-aos="zoom-in">
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </articule>
          </div>

          <p>Hello! My name is Samuel and I enjoy creating things that live on the internet </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </section>

    </StyledAbout>
  );
}
export default About