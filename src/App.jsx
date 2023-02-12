// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import pic from './pic/AnchorageP.png';
import parts from './pic/psd_0006_Parts-.png'
import partHeart from './pic/psd_0007_TextHeart.png'

function App() {
  const anchorageAspectRadio = 1023 / 702;  // a

  const [width, setWidth] = useState(window.innerWidth); // w
  const [height, setHeight] = useState(window.innerHeight); // h
  
  const [date, setDate] = useState(new Date());
  const pad0 = (i) => (i < 10) ? "0" + i : i;
  const dateString = `${date.getFullYear()}/${pad0(date.getMonth() + 1)}/${pad0(date.getDate())}`;
  const timeString = `${pad0(date.getHours())}:${pad0(date.getMinutes())}:${pad0(date.getSeconds())}`;
  
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // console.log(width, height)
  }
  window.addEventListener('resize', handleResize);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }, []);


  const anchoragePosX = (width-height*anchorageAspectRadio)/2  // (w-ha)/2

  return (<>
    <div id="bg"></div>
    <img id="anchorage" alt='anchorage' src={pic} style={{ 
      left: anchoragePosX, 
      top: 0,
    }} />
    <div id="book" style={{ 
      // x,y in [0,1]
      left: anchoragePosX + 0.644*height*anchorageAspectRadio,  // (w-ha)/2 + xha
      top:  0.321 * height,  // yh
      // width: .525 * height,
      // fontSize: .070 * height,
      transform: `scale(${.00105 * height})`,
    }}>
      <div className="time" style={{ left: 30, top: 80 }}>
        {dateString}<br />{timeString}
      </div>
      <img alt='' src={partHeart} style={{left: 387, top: 100, scale: '1.3'}} />
      <img alt='' src={parts} style={{left: 0, top: 295, scale: '1.3'}} />
    </div>
  </>);
}

export default App;
