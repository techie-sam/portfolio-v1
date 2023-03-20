import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const duration = 7000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
function About() {
    const [inProp, setInProp] = useState(false)
    const nodeRef = useRef(null);
    return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        <>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )}
      ehkwjeowojiol
      <button onClick={()=>setInProp(true)}>Start </button>
        </>
    </Transition>
  );
}
export default About