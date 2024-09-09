import React from 'react'
import Laptop from '../assets/Laptop.webp'
import { LoremIpsum } from 'react-lorem-ipsum';

function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 p-4  md:grid grid-cols-2  ' >
        <div className=' col-span-1 w-[80%] shadow-slate-500  shadow-md'>
        <img src={Laptop}/>
        </div>
        <div className='col-span-1 flex flex-col justify-center items-center '>
            <h1 className=' text-[#00df9a] font-bold my-2 text-2xl'>Learn from Experts</h1>
            <p className='my-2'><LoremIpsum p={1}/></p>
            <button className='bg-black text-white rounded-md p-2 w-[20%] ' >Get Started</button>
        </div>
        
    </div>
  )
}

export default Experts