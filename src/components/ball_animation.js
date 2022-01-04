import {useTransition, animated, config } from 'react-spring';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useMediaQuery} from "react-responsive";



const AnimatedBall = styled(animated.div)`
    position: absolute;
    border-radius: 100%;
    bottom: 60x;
    left: 50%;
    transform: translateX(50%);
    background: rgb(45, 194, 84);
    font-size: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media screen and (min-width: 768px){
        font-size: 200px;
    }
`

const mobileStyle = {
    from: {y: '40%', width: '10%', height: '40%', opacity: '0.2', x: '-50%'},
    enter: {y: '-40%', width:'20%',  height: '40%', opacity: '1', x: '-50%'},
}

const desktopStyle = {
    from: {y: 500, width: 200, height: 200, opacity: '0.2', x: '-50%'},
    enter: {y: 0, width:500,  height: 500, opacity: '1', x: '-50%'},
}








function BallAnimation({isStarted, toggle, setToggle, pickedNumber}){
    
    const isSmallScreen = useMediaQuery({
        query: "(max-width: 768px)"
    });
    const [style,setStyle] = useState();
    useEffect(()=>{
        if(isSmallScreen) {setStyle(mobileStyle)} else {setStyle(desktopStyle)}
    },[isSmallScreen])
    const transition = useTransition(toggle, {
        
        ...style,
        config: config.wobbly
      });

    if(isStarted){
        return(
            <> 
                {transition((style,item)=>
                item ? <AnimatedBall style={style}>{pickedNumber}</AnimatedBall>: ''
                )}
                <button onClick={()=>{setToggle(toggle+1)}}>test</button>
            </>
        )} else {
            return null;
        }
}

export default BallAnimation;