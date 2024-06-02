import React from 'react'

function Greenbutton({text,onclick}) {
  return (
    <button onClick={onclick} className='bg-[#148A08] h-10 fixed bottom-20 right-80 px-10 py-2 items-center rounded-full font-semibold'>{text}</button>
  )
}

export default Greenbutton