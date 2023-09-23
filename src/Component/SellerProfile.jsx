import React from 'react'
import Avatar from "../assets/Intro/avatar.svg"

const SellerProfile = () => {
  return (
    <>
  
    <div className='px-10 bg-dark mx-10 rounded-lg my-5 text-white flex  '>
      <div className='left w-1/3 p-5 flex flex-col items-center justify-center'>
           <img className='w-20 h-20' src={Avatar} alt="" />
           <p className='py-1'>Name</p>
           <p className='py-1'>Email id</p>
            <p className='py-1'>KYC status</p>
      </div>
      <div className='right w-full p-5'>
        <h1 className='text-2xl fontbold pb-5'>Other Details</h1>
        <div className='flex '>
            <ul>
              <li>First Name :</li>
              <li>Last Name : </li>
              <li>Businesss Name : </li>
              <li>GSTIN</li>
              <li>Services Posted</li>
              
            </ul>
            <ul className='pl-96'>
            <li>Dob</li>
              <li></li>
              <li>Zip</li>
              <li>Zip</li>
            </ul>
        </div>
      </div> 
      <div> <button className=' text-white bg-red-300 items-center px-4 py-2 w-full'>Edit</button></div>
       
    </div>
    
     
    </>
  )
}

export default SellerProfile
