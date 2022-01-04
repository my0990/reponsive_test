import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../img/background.png'
import cannon from '../img/cannon.png'


const Container = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background-color: hotpink;
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 768px){
        background-color: gray;
        height: 100vh;
        padding: 0;
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
    @media screen and (min-width: 768px){
        height: 250px;
    }
`

const CannonButton = styled.div`
    width: 5%;
    height: 10%;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    border-radius: 100%;
    cursor: pointer;
    @media screen and (min-width: 768px){
        width: 55px;
        height: 55px;
        bottom: 40px;
    }
`

const CannonBall = styled.div`
    width: 10%;
    height: 20%;
    border-radius: 100%;
    background: linear-gradient( 45deg, white, rgb(0,223,0));
    position: absolute;
    bottom: 20%;
    left: 45%;
    @media screen and (min-width: 768px){
        width: 150px;
        height: 150px;
        bottom: 150px;
        left: 50.2%;
        transform: translate(-50%);
    }
`
function Background({children, isStarted, isFirstClicked, setIsFirstClicked, setToggle, click}){

    return(
        <Container>
            {!isFirstClicked ? <CannonBall/> : null}
           
           <Cannon />
           {window.innerHeight}
           {isStarted ? <CannonButton onClick={()=>{click()}}/> : null }
           {children}
        </ Container>
    )
}

export default Background;