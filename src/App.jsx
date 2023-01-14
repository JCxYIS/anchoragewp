// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const anchorageAspectRadio = 1023 / 702;
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [date, setDate] = useState(new Date());
  const pad0 = (i) => (i < 10) ? "0" + i : i;
  const dateString = `${date.getFullYear()}/${pad0(date.getMonth() + 1)}/${pad0(date.getDate())}`;
  const timeString = `${pad0(date.getHours())}:${pad0(date.getMinutes())}:${pad0(date.getSeconds())}`;

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // console.log(width, height)
  }

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }, []);

  window.addEventListener('resize', handleResize);


  return (<>
    <div id="bg"></div>
    <img id="anchorage" alt='anchorage' src='/pic/AnchorageP.png' style={{ left: (width-height*anchorageAspectRadio)/2 }} />
    <div id="book" style={{ left: (width-height*anchorageAspectRadio)/2 + 888 }}>
      <div id="date">{dateString}</div>
      <div id="time">{timeString}</div>
    </div>
  </>);
}

export default App;
