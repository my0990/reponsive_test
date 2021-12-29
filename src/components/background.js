import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../img/background.png'


const Container = styled.div`
    background-image: url(${backgroundImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
    
    
`
function Background(){
    return(
        <Container>
           
        </ Container>
    )
}

export default Background;