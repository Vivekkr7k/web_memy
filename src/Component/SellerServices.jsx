import React from 'react'

const SellerServices = () => {
  return (
    <div className='bg-dark px-10 mt-5 text-white mx-10 rouned-lg '>
       <div>
           <div className='p-10'>
            <div className='flex items-center justify-between'>
            <h1 className='text-3xl' >Posted Servies</h1>
            <button className='px-4 py-2 bg-white text-black'>Post Service</button>
            </div>
            
              <ul>
                <li>servie1</li> 
                <li>servie2</li>
                <li>servie3</li>
              </ul>
           </div>
       </div>
    </div>
  )
}

export default SellerServices
