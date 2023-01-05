import './App.css';
import { useState, useRef, useEffect } from 'react';
import Progress from './components/Progress';

function App() {
  const [duraion, setDuraion] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(); // 비디오 ref

  // 비디오 재생 hook
  useEffect(()=> {
    setDuraion(videoRef.current.duration)
    setCurrentTime(videoRef.current.currentTime)

    let play = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime)
    }, 1000)

    // clean up interval
    return () => {
      clearInterval(play)
    }
  }, [currentTime])

  const playVid = () => {
    // video요소를 선택해야 함. 리액트에서는 dom대신 useRef
    // current 객체를 통해 선택 가능
    videoRef.current.play();
    console.log(videoRef.current)
  }

  const pauseVid = () => {
    videoRef.current.pause();
  }

  const stopVid = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  }

  return ( 
    <div>
      <h1>React Video Player</h1>
      <video 
        ref={videoRef} 
        src={process.env.PUBLIC_URL + '/media/video01.mp4'}
      ></video>
      
      <p>duration: {duraion.toFixed(1)}s</p>
      <p>currentTime: {currentTime.toFixed(1)}s</p>
      <Progress val={currentTime} />
      <button className="play" onClick={playVid}>play</button>
      <button className="pause" onClick={pauseVid}>pause</button>
      <button className="stop" onClick={stopVid}>stop</button>
    </div>
  )
}

export default App;
