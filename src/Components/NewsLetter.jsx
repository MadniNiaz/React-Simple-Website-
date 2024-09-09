import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4 w-screen md:flex justify-evenly'> 
        <div className=' py-10 m-2 '>
            <h1 className='font-bold text-xl md:text-2xl text-white '>Want to learn Latest I.T Skills?.</h1>
            <span className='text-white '>Sign up to our NewsLetter and <br/>stay up to date</span>
        </div>
        <div className=' mt-6  m-2'>
            <input type='text' className=' p-2 mx-2 text-slate-600 rounded-md' placeholder='Email'/>
            <button className='bg-black text-white rounded-md p-2 mt-3' >Notifye Me</button>
            <br/>
            <p className='text-white mt-2'>We are bout the Protection of Your data.Read our<br/>Privacy Policy </p>
        </div>
    </div>
  )
}

export default NewsLetter