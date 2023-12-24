import styled from "styled-components";
const StyledCard = styled.div`
ul{
    margin:0;
    padding:0;
}
li{
        background: var(--color-bg-variant);
        border: 1px solid transparent;
        border-radius: 1rem;
        padding: 20px;
        text-align: center;
        transform: var(--transition);
        min-width:15em;
        transition: var(--transition)
    }
    @media screen and (max-width: 300px){
        li{
            min-width:13em;
            // max-width:350px;
        }
    }  
    @media screen and (min-width: 500px){
        li{
            min-width:15em;
        }
    }  
    li:hover{
        background: transparent;
        border-color: var(--color-primary-variant);
        transition
        cursor: default;
    }

`;
export default StyledCard