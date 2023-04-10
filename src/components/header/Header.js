import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StyledHeader from './StyledHeader';
import CTA from './CTA';

const items = [
  <h5 key="1">Hi, my name is</h5>,
  <h1 key="2" >Samuel Abolade</h1>,
  <h6 key="3">Front-end Developer</h6>
];



const Home = () => {
  const [inProp, setInProp] = useState(false);
  const [CTAdisplay, setCTAdisplay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setInProp(true), 1000);
    setTimeout(() => setCTAdisplay(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <header id='home' className='m-auto'>
      <section >
        <StyledHeader>
          <TransitionGroup>
            {inProp  && items.map((item, i) =>
              <CSSTransition key={i} in={inProp} timeout={2000} classNames="fadeup">
                <div className="fadeup-component" style={{ transitionDelay: `${i + 1}00ms` }} >
                  {item}
                </div>
              </CSSTransition>
            )}
            {
              CTAdisplay && <CTA />
            }
          </TransitionGroup>
        </ StyledHeader>
      </section>
    </header>

  )
};

export default Home;
