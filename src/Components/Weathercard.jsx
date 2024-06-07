import React from 'react'
import { useState, useEffect } from 'react';
function Weathercard() {
  let today = new Date();
  let yy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  let hours = today.getHours();
  let ampm = 'AM';
  if (hours > 12) {
    hours -= 12;
    ampm = 'PM';
  }
  if (hours < 10) {
    hours = '0' + hours;

  }
 
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let formateddate = dd + '/' + mm + '/' + yy;
  let formatedtime = hours + ':' + minutes + ' ' + ampm;
  const [weather, setWeather] = useState(null);
  const [location, setlocation] = useState('')
  const fetchWeather = async (loc) => {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${loc}&format=json&u=f`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '13a87da22emsh1763762e112b185p122022jsn9ee671737e52',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-full w-full'>
      <div className='h-1/3 w-full bg-[#FF4ADE] rounded-t-xl flex justify-around text-3xl text-white font-semibold'>
        <div>{formateddate}</div>
        <div>{formatedtime}</div>
        <div className='w-1/3 h-full flex items-center'>
          <input className='w-3/4 m-2 h-6 text-xs text-black rounded px-2' placeholder='enter location' onChange={(e) => { setlocation(e.target.value) }}></input>
          <button className='bg-white hover:bg-gray-100 h-6 w-16 text-xs text-black font-semibold m-2 border border-gray-400 rounded shadow' onClick={() => { fetchWeather(location) }}>Enter</button>
        </div>
      </div>
      <div className='h-2/3 w-full bg-[#101744] rounded-b-xl flex text-white text-xl'>
        <p className='m-2'>Wind Speed :{weather ? weather.current_observation.wind.speed : ''} kmph</p>
        <p className='m-2'>Humidity :{weather ? weather.current_observation.atmosphere.humidity : ''} %</p>
        <p className='m-2'>Temperature :{weather ? weather.current_observation.condition.temperature : ''} °F</p>
      </div>
    </div>
  )
}

export default Weathercard;