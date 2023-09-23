import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import logo from '../assets/Intro/logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignSvg from "../assets/Intro/signIn.svg"

const Navbar = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleSignInClick = () => {
    setIsSignInVisible(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInVisible(false);
  };

  const handleCloseSignUp = () => {
    setIsSignUpVisible(false);
  };

  return (
    <div className='flex text-center justify-evenly bg-black/90 p-x-10 py-5 hover:bg-blue-300 text-white transition-all duration-300 ease-in-out'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-20 flex items-center justify-center' src={logo} alt='Logo' />
      </div>
      <div className='flex items-center justify-center'>
        <ul className='flex gap-7 font-medium text-medium transition-all duration-300 ease-in-out '>
          <li className='hover:text-xl transition-all duration-300 ease-in-out cursor-pointer hover:text-black/75'>About us</li>
          <li className='hover:text-xl transition-all duration-300 ease-in-out cursor-pointer hover:text-black/75'>Services</li>
          <li className='hover:text-xl transition-all duration-300 ease-in-out cursor-pointer hover:text-black/75'>Testimonials</li>
          <li className='hover:text-xl transition-all duration-300 ease-in-out cursor-pointer hover:text-black/75'>Contact us</li>
        </ul>
      </div>
      <div className='flex gap-4'>
        <button className='bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md shadow-blue-100' onClick={handleSignInClick}>SignIn</button>
        <button className='bg-white text-black px-4 py-2 rounded-xl shadow-md shadow-blue-100' onClick={handleSignUpClick}>SignUp</button>
      </div>
      <AnimatePresence> {/* Wrap the modals in AnimatePresence */}
        {isSignInVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties
            exit={{ opacity: 0, y: -20 }} // Exit animation properties
            transition={{ duration: 0.3 }} // Animation duration
            className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50'
          >
            <div className='bg-darkback text-black p-6 rounded-lg shadow-md flex justify-between items-center'>
              <motion.div initial={{x:-400}} animate={{x:0}}  className='w-1/2 flex items-center justify-center'>
                   <img src={SignSvg} alt="" />
              </motion.div>
             
              <div>
              <SignIn />
              <button className='mt-4 bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-red-500 shadow-md shadow-blue-100' onClick={handleCloseSignIn}>Close</button>
              </div>
            
            </div>
          </motion.div>
        )}
        {isSignUpVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties
            exit={{ opacity: 0, y: -20 }} // Exit animation properties
            transition={{ duration: 0.3 }} // Animation duration
            className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50'
          >
            <div className='bg-lightback text-white p-6 rounded-lg shadow-md'>
              <SignUp />
              <button className=' bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-red-300 transition-all duration-300 shadow-md shadow-blue-100' onClick={handleCloseSignUp}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
