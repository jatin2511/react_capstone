import React from 'react'

function Moviecard({movie}) {
  return (

        <img className='flex-shrink-0 mx-10 rounded' style={{height:'18vh' ,width:'20vw'}} src={movie.poster_path} alt='movieposter' />

  )
}

export default Moviecard