import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { Key } from '@mui/icons-material';

const one = <h5>Hi, my name is</h5>
const two = <h1 style={{ transitionDelay: `${11}00ms` }}>Samuel</h1>
const three = <h6>Front-end Developer</h6>
const items = [one, two, three]


const StyledHeader = styled.header`
  h1{
    font-size: 3rem;
    color: var(--light-slate);
    font-weight: 700;
  }
  h6{
    color: var(--slate);
    font-weight:550
  }
  .custom_btn{
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    cursor: pointer;
    border-radius: 0.4rem;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
  }
  .btn:hover{
    background-color: var(--light-slate);
    color: var(--color-bg);
    border-color: transparent;
  }
  .btn-primary{
    background: var(--color-primary);
    color: var(--color-bg);
  }
  .cta_div{
      margin-top: 2.5rem;
      display: flex;
      gap: 1.2rem;
  }
`;
const transitionStyles = {
  entering: { opacity: 100 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


const defaultStyle = {
  // transition: `opacity 1000ms ease-in-out`,
  // opacity: 0,
  transform: `translateY(20px)`,
  transition: `opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1)`
}

const Home = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    if (isMounted) {
      setInProp(true)
    }
    return () => clearTimeout(timeout);
  });

  return (
    <StyledHeader>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]

          }}>
            {
              items.map((item, i) =>
              <div key={i}>
                {item}
              </div>
          )
          }
          </div>
        )}
      </Transition>
    </StyledHeader>
  )
}

export default Home