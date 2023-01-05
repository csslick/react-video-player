import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [playPos, setPlayPos] = useState(0);
  const videoRef = useRef(); // 비디오 ref

  const playVid = () => {
    // video요소를 선택해야 함. 리액트에서는 dom대신 useRef
    // current 객체를 통해 선택 가능
    videoRef.current.play();
    console.log(videoRef.current)
  }

  const pauseVid = () => {
    videoRef.current.pause();
  }

  return (
    <div>
      <h1>React Video Player</h1>
      <video 
        ref={videoRef} 
        src={process.env.PUBLIC_URL + '/media/video01.mp4'}
      ></video>
      {/* <p>position: {playPos}</p> */}
      <button className="play" onClick={playVid}>play</button>
      <button className="pause" onClick={pauseVid}>pause</button>
    </div>
  )
}

export default App;
