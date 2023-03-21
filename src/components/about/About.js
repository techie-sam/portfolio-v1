import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import pic from '../../assets/491825c1e50e9253e5bc9457037b7e86.png'
import StyledAbout from './StyledAbout';

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
      <div className="about__me">
        <div className="about__me-image">
          <img src={pic} alt="About Image" className='w-100' />
        </div>
      </div >
    </StyledAbout>
  );
}
export default About