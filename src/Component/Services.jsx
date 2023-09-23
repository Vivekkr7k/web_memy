import React from 'react'


const Card=()=>{
    return(
        <div class="max-w-2xl mx-auto">
        
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm transition-all divide-purple-400 ease-in-out">
            <a href="#">
                <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
            </a>
            <div class="p-5 ">
                <a href="#">
                    <h5 class=" font-bold text-2xl tracking-tight mb-2  ">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="font-normal mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    
    </div>
    )
}

const Services = () => {
  return (
     <>
        <div className='bg-black/90 text-white items-center flex justify-center pt-24 pb-15'>
           <h1 className='text-7xl font-semibold '> <span className='text-blue-900'>S</span>ervices</h1>
        </div>
        <section className='grid grid-cols-3  gap-3 bg-black/90 p-20'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
     </>
  )
}

export default Services
