import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
//import HeaderElement from './HeaderElement';

function Header() {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#2699fb]  p-4 w-screen'>
        <div className='max-w-[1240px] py-[12px]  mx-auto flex items-center justify-between '>
            <div className='text-3xl font-bold'>Madii Web</div>
            {
                toggle ?
                <IoClose onClick={()=> setToggle(!toggle)} className='text-white text-3xl md:hidden block cursor-pointer'/>
                :
                <IoMdMenu onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block cursor-pointer'/>
            }
            
            
            <ul className='hidden md:flex text-white gap-10 cursor-pointer '>
                
                <li className='hover:scale-125 duration-300 hover:text-purple-800 '>
                    Home
                </li>
                <li className='hover:scale-125 duration-300 hover:text-purple-800 '>
                    Company
                </li >
                <li className='hover:scale-125 duration-300 hover:text-purple-800 '>
                    Resource
                </li>
                <li className='hover:scale-125 duration-500 hover:text-purple-800'>
                    About us
                </li>
            </ul>
            {/*Hidden Menu */}
            <ul className={` cursor-pointer duration-300 md:hidden w-[20%]  h-screen text-white fixed bg-black  top-[92px] ${toggle? 'left-[0]' :'left-[-709px]'}`}>
              
                <li className='p-4'>
                    Home
                </li>
                <li className='p-4'>
                    Company
                </li>
                <li className='p-4'>
                    Resource
                </li>
                <li className='p-4'>
                    About us
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header