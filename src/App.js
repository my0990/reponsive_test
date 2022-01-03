import Background from './components/background.js';
import InputModal from './components/inputModal.js';
import {useState, useCallback} from 'react';
import BallAnimation from './components/ball_animation.js';

function App() {
  const [lastNumber,setLastNumber] = useState(0);
  const [isStarted,setIsStarted] = useState(false);


  return (
    <div className="App">
      <Background isStarted={isStarted}>
      <InputModal setLastNumber={setLastNumber} isStarted={isStarted} setIsStarted={setIsStarted}/>
      <BallAnimation />  
      <h1>{lastNumber}</h1>
      </Background>
    </div>
  );
}

export default App;
