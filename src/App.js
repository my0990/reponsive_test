import Background from './components/background.js';
import InputModal from './components/inputModal.js';
import {useState, useCallback, useEffect, useRef} from 'react';
import BallAnimation from './components/ball_animation.js';
import Reset from './components/reset';
import cannon from './img/cannon.mp3'


function App() {
  const [lastNumber,setLastNumber] = useState(0);
  const [isStarted,setIsStarted] = useState(false);
  const [isFirstClicked,setIsFirstClicked] = useState(false);
  const [toggle,setToggle] = useState(true);
  const [numArr,setNumArr] = useState([]);
  const [pickedNumber,setPickedNumber] = useState([]);
  var audio = new Audio(cannon);
  useEffect(()=>{
    const getNumber =(number) => {
      let tempArr = [];
      for(let i=0;i< number;i++){
        tempArr.push(i);
      };
      setNumArr(tempArr);
    };
    getNumber(parseInt(lastNumber));
  },[isStarted])
  const click = () => {
    if(numArr.length != 0){
    setToggle(e => e+ 1);
    setIsFirstClicked(true);
    let tempArr = numArr;
    let popped = tempArr.splice(Math.random()*lastNumber,1);
    console.log('tempArr: ' + tempArr);
    console.log('numArr: ' + numArr);
    setPickedNumber(parseInt(popped)+1);
    setNumArr(tempArr);
    setLastNumber(lastNumber-1);
    audio.play();
    } else {
      alert('번호를 모두 뽑았습니다.');
      setPickedNumber();
      reset();
    }
  }
  const reset = () => {
    setIsFirstClicked(false);
    setIsStarted(false);
    
  }

  return (
    <div className="App">
      <Background isStarted={isStarted} isFirstClicked={isFirstClicked} setIsFirstClicked={setIsFirstClicked} setToggle={setToggle} click={click}>
        <BallAnimation isStarted={isStarted} toggle={toggle} setToggle={setToggle} pickedNumber={pickedNumber}/>  
        <InputModal setLastNumber={setLastNumber} isStarted={isStarted} setIsStarted={setIsStarted}/>
        <h1>{typeof(lastNumber)}</h1>
        <h1>numArr: {numArr}</h1>
        <h1>pickedNumber: {pickedNumber}</h1>
        <h1>lastNumber: {lastNumber}</h1>
        <Reset reset={reset} >다시</Reset>
        <button onClick={()=>{setIsStarted(false)}}>test</button>
      </Background>
    </div>
  );
}

export default App;
