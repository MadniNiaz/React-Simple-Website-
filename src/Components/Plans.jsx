import React from 'react'
import { IoPersonOutline } from "react-icons/io5";

function Plans() {
  return (
    <div className='py-[100px] w-screen'>
       <div className='max-w-[1240px] mx-auto my-3 md:grid grid-cols-3 gap-8'>
           <div className='shadow-xl  h-[500px] flex flex-col items-center bg-gray-100 hover:scale-110 duration-500'>
           < IoPersonOutline size={70}/>
           <h1 className='text-black font-bold text-2xl my-8'>Web Development</h1>
           <h1 className='text-black font-bold text-2xl'>$149</h1>
           <p className='mt-3'>Lorem Ipsum is Simply</p>
           <br/>
           <p>Lorem ipsum is simply Dummy text of the printing</p>
           <br/>
           <p>Lorem ipsum is Simply</p>
           <br/>
           <button className='bg-green-600 text-white rounded-md p-2 mt-3' >Get Started</button>
           </div>


           <div className='shadow-xl  h-[500px] flex items-center flex-col bg-gray-100 hover:scale-110 duration-500'>
           < IoPersonOutline size={70}/>
           
           <h1 className='text-black font-bold text-2xl my-8'>Digital Marketing</h1>
           <h1 className='text-black font-bold text-2xl'>$149</h1>
           <p className='mt-3'>Lorem Ipsum is Simply</p>
           <br/>
           <p>Lorem ipsum is simply Dummy text of the printing</p>
           <br/>
           <p>Lorem ipsum is Simply</p>
           <br/>
           <button className='bg-green-600 text-white rounded-md p-2 mt-3' >Get Started</button>
           </div>
           <div className='shadow-xl  h-[500px] flex flex-col items-center bg-gray-100 hover:scale-110 duration-500'>
           < IoPersonOutline size={70}/>
           
           <h1 className='text-black font-bold text-2xl my-8'>App Development</h1>
           <h1 className='text-black font-bold text-2xl'>$149</h1>
           <p className='mt-3'>Lorem Ipsum is Simply</p>
           <br/>
           <p>Lorem ipsum is simply Dummy text of the printing</p>
           <br/>
           <p>Lorem ipsum is Simply</p>
           <br/>
           <button className='bg-green-600 text-white rounded-md p-2 mt-3' >Get Started</button>
           </div>
        </div> 
    </div>
  )
}

export default Plans