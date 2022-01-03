import {useTransition, animated, config } from 'react-spring';
import {useState} from 'react';
import styled from 'styled-components';



const AnimatedBall = styled(animated.div)`
    position: absolute;
    border-radius: 100%;
    bottom: 50px;
    left: 44%;
    transform: translateX(-65%);
    background: rgb(45, 194, 84);
    font-size: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
`

function BallAnimation(){
    const [toggle,setToggle] = useState(true);
    const transition = useTransition(toggle, {
        from: {y: '10%', width: '20%', x: 0, height: '40%'},
        enter: {y: '-30%', width:'20%', x: '-13%', height: '40%'},
        config: config.wobbly
      })
    return(
        <> 
            {transition((style,item)=>
            item ? <AnimatedBall style={style}></AnimatedBall>: ''
            )}
            <button onClick={()=>{setToggle(toggle+1)}}>test</button>
        </>
    )
}

export default BallAnimation;