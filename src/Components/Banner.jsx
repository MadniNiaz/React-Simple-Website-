import React from 'react'
import { ReactTyped, Typed } from 'react-typed'

function Banner() {
  return (
    <div className='bg-[#2699fb] text-center w-screen py-[100px]'>
        <div className='max-w-[1240px] mx-auto font-bold '>
            <div className='text-xl md:text-3xl mt-4'>
                Learn with us
            </div>
            <div className='text-white text-3xl md:text-6xl mt-4'>
                Grow with us.
            </div>
            <div className='text-xl md:text-4xl text-white mt-4'>
                Learn <ReactTyped 
                    strings={['Web development','Digital Marketing','Ethical Haking']} 
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                    />
            </div>
            <button className='bg-black text-white rounded-md p-2 mt-3' >Get Started</button>
        </div>
        
    </div>
  )
}

export default Banner