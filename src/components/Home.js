import React from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const StyledHeroSection = styled.section`


  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 0px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
    @media (min-width: 480px) {
      margin: 90px 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }


`;

const Home = () => {

  return (
    <header className='col-8 m-auto text-center'>
      <h4>Hi, my name is</h4>
      <h1 className="mt-2">Samuel Abolade.</h1>
      <h6 className="text-secondary">Front-end Developer</h6>
    </header>
  )
}

export default Home