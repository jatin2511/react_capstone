import React from 'react'

function Chip({selectedmovie,setselectedmovie}) {
  function deselect(){
    setselectedmovie((prev)=>prev.filter((item)=>item!=selectedmovie))
  }
  return (
    <div className='inline-block'>
      <p className='h-10 w-44 px-6 bg-[#148A08] rounded-full m-4 flex justify-between items-center'><span>{selectedmovie}</span><span className='text-[#085C00] m-2 cursor-pointer' onClick={deselect}>X</span></p>
  </div>)
    
}

export default Chip;