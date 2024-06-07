import React, { useEffect, useState } from 'react'

function Notes() {
    const [notes,setnotes]=useState("");
   useEffect(()=>{
  setnotes(localStorage.getItem('notes'))
   },[])
  return (
  <div className='p-10 w-full h-full '>
    <div className='text-3xl font-semibold mb-5'>All notes</div>
    <textarea className='w-full h-4/5 bg-inherit focus:outline-none overflow-hidden resize-none ' value={notes} onChange={(e)=>{localStorage.setItem('notes',e.target.value);setnotes(e.target.value)}
}></textarea>
  </div>
  )
}

export default Notes