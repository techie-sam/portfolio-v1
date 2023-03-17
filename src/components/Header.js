import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CTA from './CTA';
const StyledHomeHeader = styled.header`


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

const Home = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledHomeHeader>
      <TransitionGroup>
        {isMounted &&
          <header className='col-10 col-sm-8 m-auto'>
            <h5>Hi, my name is</h5>
            <CSSTransition classNames="fadeup" timeout={1000}>
              <h1>Samuel <span className='name_span'>Abolade.</span></h1>
            </CSSTransition>
            <h6>Front-end Developer</h6>
            <CTA />
          </header>
        }
      </TransitionGroup>
    </StyledHomeHeader>
  )
}

export default Home