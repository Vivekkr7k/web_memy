import React from 'react'
import { motion } from 'framer-motion'

const Categories = () => {

const Categories =({img , heading , text})=>{
    return(
        <motion.div whileHover={{scale:1.02 , type:"spring" , stiffness:400 }}  className='border-2 rounded-xl hover:bg-dark transition-all duration-300 ease-in-out flex px-4 py-2 bg-darkback text-white mt-3 '>       
        <div>
           <img className='h-36 w-32 rounded-lg' src={img} alt="" />
        </div>
        <div className='pl-5 '>
            <h1 className='text-xl font-bold'>{heading}</h1>
            <p className='py-3 w-full'>{text}.</p>
            <button  className=' bg-white mt-6 py-1 rounded-lg text-black font-light px-5 '>view</button>
        </div>
        </motion.div>


    )
    }


  return (
    <div className='pt-32'>
        <div className="p-10 flex">
            <h1 className='text-5xl font-bold flex items-center justify-center'>Feauted Categories</h1>
            <div className='flex items-center justify-center pl-3 '>
                 <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>

        </div>
        <section className='px-10 py-3'>
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
       
        <Categories img={"https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        <Categories img={"https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600"} heading="Care" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum dolore dicta cupiditate necessitatibus ullam adipisci animi, enim vel velit? " />
        </section>
       
    </div>
  )
}

export default Categories
