import React, { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import uparow from '../assets/uparow.png'
import downarow from '../assets/downarow.png'

function Timer() {
 
  const [isPlaying,setisplaying]=useState(false);
  const [Time,settime]=useState(0);
  const [hours1,sethours]=useState(0);
  const [minutes1,setminutes]=useState(0);
  const [seconds1,setseconds]=useState(0);
  const [key, setKey] = useState(0);

  function formatTime(time) {
    const hours = parseInt(time / 3600, 10);
    const minutes = parseInt((time - hours * 3600) / 60, 10);
    const seconds = parseInt(time - hours * 3600 - minutes * 60, 10);
    if(time===0){
      setisplaying(false);
    }
    return (
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    );
  }
  function triggertimer(){
     settime((hours1*3600)+(minutes1*60)+(seconds1));
     setKey(prevKey => prevKey + 1);
    setisplaying(!isPlaying);
  }
  
  return (
    <div className='h-full w-full flex justify-between '>
      <div className='h-full w-1/4 m-12 ml-20 text-3xl text-white'>
        <CountdownCircleTimer
         key={key}
    isPlaying={isPlaying}
    duration={Time}
    colors={['#FF6A6A']}
  >
    {({ remainingTime }) => formatTime(remainingTime)}
  </CountdownCircleTimer>
  </div>
      
  <div className='flex flex-col h-full w-3/5 m-5 items-center text-[#949494]'>
    <div className='flex flex-row w-full h-4/5 justify-center items-center'>
    <div className='hours flex flex-col justify-around mx-20 items-center h-full'>
      <div>Hours</div>
    <img className='h-6 w-6 cursor-pointer' src={uparow} onClick={()=>sethours(pre=>pre+1)}></img>
      <div className='h-6 w-8 bg-transparent text-3xl text-white text-center'>{hours1}</div>
      <img className='h-6 w-6 cursor-pointer' src={downarow} onClick={()=>{ if(hours1>0){sethours(pre=>pre-1)}}}></img>
    </div>
    <div>:</div>
    <div className='minutes flex flex-col justify-around items-center mx-20 h-full'>
      <div>Minutes</div>
      <img className='h-6 w-6 cursor-pointer' src={uparow} onClick={()=>setminutes(pre=>pre+1)}></img>
      <div className='h-6 w-8 bg-transparent text-3xl text-white text-center'>{minutes1}</div>
      <img className='h-6 w-6 cursor-pointer' src={downarow} onClick={()=>{ if(minutes1>0){setminutes(pre=>pre-1)}}} ></img>
    </div>
    <div>:</div>
    <div className='second flex flex-col justify-around mx-20 items-center h-full'>
      <div>Seconds</div>
    <img className='h-6 w-6 cursor-pointer' src={uparow} onClick={()=>setseconds(pre=>pre+1)}></img>
    <div className='h-6 w-8 bg-transparent text-3xl text-white text-center'>{seconds1}</div>
      <img className='h-6 w-6 cursor-pointer's src={downarow} onClick={()=>{ if(seconds1>0){setseconds(pre=>pre-1)}}}></img>
    </div>
    </div>
    <div className='w-full h-2/5 flex justify-center'>
      <button className='bg-[#FF6A6A] w-3/4 h-2/5 m-2 rounded-full text-white text-3xl font-semibold' onClick={triggertimer}>{isPlaying?'Stop':'Start' }</button>
    </div>
  </div>
    </div>
  )
}

export default Timer