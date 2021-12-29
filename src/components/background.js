import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../img/background.png'
import cannon from '../img/cannon.png'


const Container = styled.div`
    background-image: url(${backgroundImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 0;
    padding-bottom: 56.26%;
    background-color: hotpink;
    position: relative;
    overflow; hidden;
    @media screen and (min-width: 768px){
        background-color: gray;
    }
`

const Cannon = styled.div`
    background-image: url(${cannon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 17.626vw;
    position: absolute;
    bottom: 0;
`
function Background(){
    return(
        <Container>
           <Cannon />
           {window.innerWidth}
        </ Container>
    )
}

export default Background;