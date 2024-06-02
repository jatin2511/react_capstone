import React from 'react'
import { useState } from 'react'
import formimage from '../../assets/formimage.jpg'
import { useNavigate } from 'react-router-dom'
import './index.css'

function Index() {
  const navigate=useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false
  })
  const [errors,seterrors]=useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: ""
  })
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handlecheckbox = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.checked })
  }
  const handlesubmit = (e) => {
   e.preventDefault();
   let newerrors={...errors};
   if(formdata.name.trim().length===0||formdata.name===undefined||formdata.name===null){
    newerrors.name="Name is required";
   }
   else{
    newerrors.name="";
   }
   if(formdata.username.trim().length===0||formdata.username===undefined||formdata.username===null){
    newerrors.username="Username is required";
   }
   else{
    newerrors.username="";
   }
   if(formdata.email.trim().length===0||formdata.email===undefined||formdata.email===null){
    newerrors.email="Email is required";
   }
   else{
    newerrors.email="";
   }
   if(formdata.mobile.trim().length===0||formdata.mobile===undefined||formdata.mobile===null){
    newerrors.mobile="Mobile is required";
   }
   else{
    newerrors.mobile="";
   }
   if(!formdata.checkbox){
    newerrors.checkbox="Please accept the terms and conditions";
   }
   else{
    newerrors.checkbox="";
   }
seterrors({...newerrors});
if(
  newerrors.name==""&&
  newerrors.username==""&&
  newerrors.email==""&&
  newerrors.mobile==""&&
  newerrors.checkbox==""
){
  localStorage.setItem("userdata",JSON.stringify(formdata))
  alert("Form Submitted Successfully")
  navigate('/genre')
}
else{
  alert("Please fill the form correctly")
}
  }
  return (
    <div className='h-screen w-screen flex text-white'>
      <div className='h-full w-6/12 relative' >
        <img src={formimage} className='h-full w-full' ></img>
        <p className='absolute text-white text-5xl bottom-20 left-5 font-black'> Discover new things on Superapp</p>
      </div>
      <div className='h-full w-6/12 bg-black flex flex-col justify-center items-center'>
        <div id='singleday' className='text-6xl my-3'>
          Super app
        </div>
        <div className='mb-7'>Create your new account</div>
        <form className='flex flex-col w-2/4 gap-4' onSubmit={handlesubmit} >
          <input type='text' name='name' placeholder='Name' className='h-12 bg-[#292929] px-2 border rounded-[5px]' onChange={handlechange} style={{
            borderColor:`${errors.name.length>0?"red":"green"}`}}></input>
          {errors.name && <p className='text-red-500' >{errors.name}</p>}
          <input type='text' name='username' placeholder='Username' className='h-12 bg-[#292929] px-2 border rounded-[5px]' onChange={handlechange} style={{
            borderColor:`${errors.username.length>0?"red":"green"}`}}></input>
          {errors.username && <p className='text-red-500'>{errors.username}</p>}
          <input type='email' name='email' placeholder='Email' className='h-12 bg-[#292929] px-2 border rounded-[5px]' onChange={handlechange} style={{
            borderColor:`${errors.email.length>0?"red":"green"}`}}></input>
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
          <input type='tel' name='mobile' placeholder='Mobile' className='h-12 bg-[#292929] px-2 border rounded-[5px]' onChange={handlechange} style={{
            borderColor:`${errors.mobile.length>0?"red":"green"}`}}></input>
          {errors.mobile && <p className='text-red-500'>{errors.mobile}</p>}
          <div className='my-4'>
            <input type='checkbox' name='checkbox' onChange={handlecheckbox}></input>
            <label htmlFor='checkbox' className='mx-4 text-[#7C7C7C]'>Share my registration data with Superapp</label>
          </div>
          {errors.checkbox && <p className='text-red-500'>{errors.checkbox}</p>}
          <button className='bg-[#72DB73] h-12 rounded-full font-bold text-2xl'>SIGN UP</button>
        </form>
      </div>

    </div>
  )
}

export default Index