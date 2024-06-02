import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '../../Components/Box'
import Chip from '../../Components/Chip'
import Min3 from '../../Components/Min3'
import Greenbutton from '../../Components/Greenbutton'
import action from '../../assets/action.png'
import drama from '../../assets/drama.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'
import thriller from '../../assets/thriller.png'
import music from '../../assets/music.png'
import fiction from '../../assets/fiction.png'
import western from '../../assets/western.png'
import fantasy from '../../assets/fantasy.png'
const movies = [
  {
    id: 0,
    category: "Action",
    color:"bg-[#FF5209]",
    theme:action
  },
  {
    id: 1,
    category: "Drama",
    color:"bg-[#D7A4FF]",
    theme:drama
  },
  {
    id: 2,
    category: "Romance",
    color:"bg-[#148A08]",
    theme:romance
  },
  {
    id: 3,
    category: "Thriller",
    color:"bg-[#84C2FF]",
    theme:thriller
  },
  {
    id: 4,
    category: "Western",
    color:"bg-[#902500]",
    theme:western
  }, {
    id: 5,
    category: "Horror",
    color:"bg-[#7358FF]",
    theme:horror
  }, {
    id: 6,
    category: "Fantasy",
    color:"bg-[#FF4ADE]",
    theme:fantasy
  },
  {
    id: 7,
    category: "Music",
    color:"bg-[#E61E32]",
    theme:music
  },
  {
    id: 8,
    category: "Fiction",
    color:"bg-[#6CD061]",
    theme:fiction
  }
]
function Index() {
  const navigate=useNavigate();
  function handlenavigate(){
    localStorage.setItem("selectedmovie",JSON.stringify(selectedmovie))
    navigate("/movies")
  }
  const [selectedmovie,setselectedmovie]=useState([]);
  return (
    <div className='bg-black w-screen h-screen text-white flex justify-between pb-[15rem] pt-[5rem] px-[17rem]'>
      <div className='flex flex-col basis-2/5 mx-9'> 
      <div id='singleday' className='text-6xl my-3'>
          Super app
        </div>
      <div className='text-6xl my-9 font-bold'>Choose your entertainment category</div>
      <div>{selectedmovie.map((movie,index)=>{
          return <Chip selectedmovie={movie} setselectedmovie={setselectedmovie} key={index}/>
        })}</div>
        {selectedmovie.length<3 && <Min3 />}
      </div>
      <div className='basis-3/5 justify-center items-center mx-9'>
        <div className='grid grid-cols-3 gap-[10px]'>{movies.map((movie)=>{
      return <Box data={movie} key={movie.id} selectedmovie={selectedmovie} setselectedmovie={setselectedmovie}/>
     })}
     </div>
     </div>
      {selectedmovie.length>2 && <Greenbutton onclick={handlenavigate} text='Next Page'/>}
     
    </div>
  )
}
export default Index
