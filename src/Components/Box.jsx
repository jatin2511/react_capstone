import React from 'react';

function Box({ data, selectedmovie, setselectedmovie }) {
  function handleselection() {
    if (selectedmovie.includes(data.category)) {
      setselectedmovie((prev) => prev.filter((item) => item !== data.category));
    } else {
      setselectedmovie((prev) => [...prev, data.category]);
    }
  }
  const isSelected = selectedmovie.includes(data.category);

  return (
    <div
      className={`h-[13rem] w-[13rem] inline-block m-[10px] p-4 cursor-pointer text-[1.5rem] rounded-[10px] shadow-2xl ${data.color} ${selectedmovie.includes(data.category) ? 'border-[5px] border-[#11B800]' : null}`}
      onClick={handleselection}>
      <div className='h-full w-full flex flex-col justify-between'>
        <p>{data.category}</p>
        <img src={data.theme}></img>
      </div>


    </div>
  );
}

export default Box;