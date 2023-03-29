import styled from "styled-components";
const StyledHeader = styled.header`
  h1{
    font-size: 3rem;
    color: var(--light-slate);
    font-weight: 700;
  } 
  h5{
    color: var(--color-primary)
  }
  @media screen and (max-width: 500px){
    h1{
      font-size:2.5em;
    }
    h5{
      font-size:1em
    }
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
  .cta_div{
      margin-top: 2.5rem;
      display: flex;
      gap: 1.2rem;
  }
  .animation {
    opacity: 0;
    transform: translateX(-300px);
    transition: all 0.7s ease-out;
    transition-delay: 0.4s;

}

.scroll-animation {
    opacity: 1;
    transform: translateX(0);
}
`;

export default StyledHeader