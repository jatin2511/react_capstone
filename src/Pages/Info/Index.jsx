import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile2 from '../../assets/profile2.png'
import Notes from '../../Components/Notes'
import Weathercard from '../../Components/Weathercard'
import Timer from '../../Components/Timer'
import Newscard from '../../Components/Newscard'
function Index() {
  const [userdata, setdata] = useState(JSON.parse(localStorage.getItem('userdata')))
  const [selectedgenre, setselectedgenre] = useState(JSON.parse(localStorage.getItem('selectedmovies')))
    const navigate=useNavigate();
  return (
    <div className='bg-black p-20 h-[100vh] w-[100vw]'>
      <div className='grid grid-cols-3 grid-rows-5 h-full w-full gap-12'>
        <div className='bg-[#5746EA] row-span-2 rounded-xl flex p-4 hover:scale-105'>
          <img src={profile2}></img>
          <div className='pl-4 text-white'>
            <div className='text-2xl'>{userdata.name}</div>
            <div className='text-2xl'>{userdata.email}</div>
            <div className='text-4xl font-semibold'>{userdata.username}</div>
            <div className='mt-auto'>
              {selectedgenre.length<=4?selectedgenre.map((movie,index) => {
                return <div key={index} className='inline-block rounded-full bg-[#9F94FF] w-2/5 pl-5 h-10 m-2 py-2'>{movie}</div>
              }):selectedgenre.map((movie,index) => {
                return <div key={index} className='inline-block rounded-full bg-[#9F94FF] w-1/4 pl-5 h-10 m-1 py-2 align-middle'>{movie}</div>
              })}
            </div>
          </div>
        </div>
        <div className='bg-[#F1C75B] row-span-3 rounded-xl hover:scale-105'>
          <Notes />
        </div>
        <div className='bg-white row-span-5 rounded-xl hover:scale-105'>
          <Newscard />
        </div>
        <div className='rounded-xl hover:scale-105'>
          <Weathercard />
        </div>
        <div className='bg-[#1E2343] col-span-2 rounded-xl row-span-2 hover:scale-105'>
          <Timer />
        </div>
      </div>
      <button className='absolute bottom-5 right-20 bg-[#148A08] text-white w-32 h-10 rounded-full' onClick={()=>{navigate('/movies')}} >Browse</button>
    </div>
  )
}

export default Index