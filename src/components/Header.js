import React from 'react'
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
`;

const Home = () => {

  return (
    <StyledHomeHeader>
      <header className='col-10 col-sm-8 m-auto'>
        <h5>Hi, my name is</h5>
        <h1>Samuel <span className='name_span'>Abolade.</span></h1>
        <h6>Front-end Developer</h6>
      </header>
    </StyledHomeHeader>
  )
}

export default Home