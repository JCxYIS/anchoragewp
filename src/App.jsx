// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import pic from './pic/AnchorageP.png';
import parts from './pic/psd_0006_Parts-.png'
import partHeart from './pic/psd_0007_TextHeart.png'

function App() {
  // const anchorageAspectRadio = 1023 / 702;  // a

  // const [width, setWidth] = useState(window.innerWidth); // w
  // const [height, setHeight] = useState(window.innerHeight); // h

  const [date, setDate] = useState(new Date());
  const pad0 = (i) => (i < 10) ? "0" + i : i;
  const dateString = `${date.getFullYear()}/${pad0(date.getMonth() + 1)}/${pad0(date.getDate())}`;
  const timeString = `${pad0(date.getHours())}:${pad0(date.getMinutes())}:${pad0(date.getSeconds())}`;

  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  //   // console.log(width, height)
  // }
  // window.addEventListener('resize', handleResize);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {clearInterval(timer)}
  }, []);

  return (
    <>
      <div className='container'>
        <div id="bg"></div>
        <img id="anchorage" alt='anchorage' src={pic} style={{
          // left: anchoragePosX,
          // top: 0,
        }} />
        <div id="book">
          <div id="time">
            {dateString}<br />{timeString}
          </div>
          <img alt='heart' src={partHeart} style={{ left: '75%', top: '20%', width: '10%' }} />
          <img alt='house' src={parts} style={{ left: 0, top: '48%', width: '95%' }} />
        </div>
      </div>
    </>
  );
}

export default App;
