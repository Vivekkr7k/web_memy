import React from 'react'
import SearchSvg from '../assets/Intro/search.svg'
import AnimatedText from '../Component/Anitmatedtxt'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  return (
    <div>
      <section className='bg-light'>
           <div className='w-full flex text-7xl items-center justify-center'>
               {/* <h1 className='font-semibold item-center justify-center capitalize '>Your Servie under your fingures</h1> */}
               <AnimatedText text="Your Service Under your fingures"/>
           </div>
           <div className='flex  items-center justify-evenly ' >
                <motion.div className='img' initial={{x:-800}} animate={{x:-20}} transition={{delay:.5 , duration:2 , type:"spring" , stiffness:400}} >
                        <img className='h-80  w-auto' src={SearchSvg} alt="" />
                </motion.div>
                
                <motion.div className='flex-col  items-center justify-center  ' initial={{x:800}} animate={{x:20}} >
                   <div className='flex'>
                   <div className=' flex items-center justify-center'>
                   <svg className='px-5' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </div> 
                    <input className='border-2 px-32  border-black  py-5 rounded-lg' type="text" placeholder='What are u looking for ?' />

                   </div>              
                  

                     <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}} className='flex items-center justify-center mt-10 gap-2 text-sm pl-7'>
                        <p className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Care</p>
                        <p  className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Painting</p>
                        <p  className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Health</p>
                        <p  className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Party</p>
                        <p  className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Decoration</p>
                        <p  className='border-2 border-black rounded-2xl px-3 py-1 hover:bg-black/90 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>Cleaning</p>
                     </motion.div>
                </motion.div>
           </div>
           
      </section>
    </div>
  )
}

export default Search
