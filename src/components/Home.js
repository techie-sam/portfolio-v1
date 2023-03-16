import React from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const StyledHeroSection = styled.section`


  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
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
        <StyledHeroSection>
            <CSSTransition classNames='fadeup' timeout={5}>
                <h1 style={{ transitionDelay: 1000 }}>Hi, my name is</h1>
            </CSSTransition>
            <h2 className="big-heading">Samuel Abolade.</h2>
            <h3 className="big-heading">I build things for the web.</h3>
        </StyledHeroSection>
    )
}

export default Home