import styled from 'styled-components';


const ResetButton = styled.h1`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1rem;
    margin: 0;
    @media screen and (min-width: 768px){
        font-size: 50px;
    };
    cursor: pointer;
    &:hover{
        color: white;
    }
`

function Reset({children, reset}){
    return(
        <ResetButton onClick={reset}>{children}</ResetButton>
    )
}

export default Reset;