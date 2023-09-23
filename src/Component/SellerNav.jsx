import React from 'react'
import logo from "../assets/Intro/logo.png"

const SellerNav = () => {
  return (
    <>
    <div className='bg-dark px-10 py-3 flex items-center justify-between text-white'>
        <div>
             <img className='h-10 w-16' src={logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-8'>
              <li className='cursor-pointer'>Profile</li>
              <li  className='cursor-pointer'>Requests</li>
              <li  className='cursor-pointer'>Payments</li>
            </ul>
        </div>
        <div>
          <button className='hover:bg-black  hover:text-white bg-white text-black px-4 py-2 rounded-lg '>Sign Out</button>
        </div>
    </div>
    <div>
        <p className='bg-black/90 text-white text-sm flex items-center justify-center'>Seller : <span className='text-indigo-300'> <span> </span>  adfs@gmail.com</span></p>
    </div>
    </>
  )
}

export default SellerNav
