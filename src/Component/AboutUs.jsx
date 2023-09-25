import React from 'react'
import intrologo from '../assets/Intro/intro.png'
import pic1 from '../assets/Intro/pic1.png'
import pic from "../assets/Intro/business_listing.svg"


const AboutUs = () => {
  return (
    <div>
        <div className=" first p-20  flex rounded-b-2xl  ">
            <section className='left w-1/2'>
               <img src={pic} alt="" />
            </section>
            <section className='right text-white/95'>
               <div className=' pl-20 pt-20 flex flex-col justify-center text-6xl font-bold'>
                  <h1 className='text-black'>You<span className='text-indigo-500'>r</span> </h1>
                   <h1 className='pl-24 text-4xl text-black'>Business Listing</h1>
                   <h1 className='pl-60 text-blue-800 text-black'>Solution</h1>
               </div>
               <div className='pt-20 text-medium font-semibold text-black pl-10'>
                <p > Amplify your online presence with our powerful listing service</p>
               </div>
            </section>
        </div>
        <div className='second px-32 pt-32 bg-indigo-50 pb-32 flex text-black '>
            <section className='left w-1/2 '>
                <h1 className='text-3xl pb-6 pt-24'>
                <span className='text-blue-900'>E</span>nhance your <span className='text-blue-900'>digital</span>  footprint using our listing solution
                </h1>
                <p className='text-black/80'>
                Boost your visibility and reach with our cutting-edge listing solution. Elevate your online profile with our premium listing service.Upgrade your online presence with our top-notch listing solution.
                </p>
                <p className='pt-5 text-black/80'>
                Revitalize your online image with our advanced listing solution, igniting your digital presence. Experience a surge in visibility and engagement like never before.
                </p>
            </section>
            <section className='right w-1/2'>
                  <img className='' src={pic1} alt="" />
            </section>
        </div>
    </div>
  )
}

export default AboutUs
