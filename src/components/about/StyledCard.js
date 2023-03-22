import styled from "styled-components";
const StyledCard = styled.div`
    span{
        background: var(--color-bg-variant);
        border: 1px solid transparent;
        border-radius: 1rem;
        padding: 1.5rem;
        text-align: center;
        transform: var(--transition);
    }
    span:hover{
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }
`;
export default StyledCard