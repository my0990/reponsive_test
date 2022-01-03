import styled from 'styled-components';
import button from '../img/button.png'
import {useState, useCallback} from 'react';



const Container = styled.div`
    width: 50%;
    height: 50%;
    border: 5px solid black;
    border-radius: 5%;
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translate(-50%);
    background-color: gray;
    padding-top: 5%;
    box-sizing: border-box;
    font-size: 2.5vw;
    .h1 {
        font-size: 2.5vw;
        text-align: center;
        margin: 0;
        margin-bottom: 5%;
    }
    .input {
        width: 10%;
        height: 5px;
        font-size: 1em;
    }
    @media screen and (min-width: 768px){
        width: 800px;
        height: 500px;
        bottom: 250px;
        padding-top: 150px;
        border: 10px solid black;
        .h1 {
            font-size: 45px;
        };
        .input {
            width: 100px;
            height: 55px;
            padding: 0;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 315px;
        };
        label {
            position: absolute;
            bottom: 0;
            left: 415px;
            font-size: 40px;
        };
        .test {
            width: 10%;
            height: 25%;
            @media screen and (min-width: 768px){
                width: 90px;
                height: 90px;
                right: 56px;
                bottom: 56px;
            }
        };
    }
`

const Button = styled.div`
    background-image: url(${button});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    width: 15%;
    height: 25%;
    position: absolute;
    bottom: 10%;
    right: 5%;
    @media screen and (min-width: 768px){
        width: 110px;
        height: 110px;
        right: 50px;
        bottom: 50px;
    }

    
`



function InputModal({setLastNumber, isStarted, setIsStarted}){
    const [isKeyDown,setIsKeyDown] = useState(false);
    const [text,setText] = useState('');
    
    const start = () => {
        //버튼 눌렀을때
        setLastNumber(text);
        setIsStarted(true);
    }
    const onChange = (e) => {
        setText(e.target.value)
    };
    const test = (e) => {
        if( e.key === "Enter"){
        start();
        }
    };
    if(!isStarted){
    return (
        <Container>
            <h1 className='h1'>마지막 번호가 몇 번인가요?</h1>
            <div style={{textAlign:'center', position: 'relative', height: '55px'}}>
                <input type='number' value={text} className='input' onKeyPress={(e)=>{test(e)}} onChange={onChange}/>
                <label>번</label>
            </div>
            <Button className={isKeyDown?  'test' : ''} onClick={()=>{start()}} onMouseDown={()=>{setIsKeyDown(!isKeyDown)}} onMouseUp={()=>{setIsKeyDown(!isKeyDown)}} onMouseOut={()=>{setIsKeyDown(false)}} />
        </ Container>
    )} else {
        return null
    }
}

export default InputModal;