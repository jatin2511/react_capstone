import React from 'react'
import caution from '../assets/caution.png'
function Min3() {
  return (
    <div className='flex items-baseline '><img src={caution}></img><p className='text-[#FF0000] mx-2 text-2xl'>Minimum 3 category required</p></div>
  )
}

export default Min3;