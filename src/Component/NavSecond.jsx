import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../assets/Intro/logo.png'
import Avatar from "../assets/Intro/avatar.svg"
import Profile from "../Component/Profile"
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0 ">
                <img
                  className="h-12 w-16"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="hidden md:block text-black ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" text-black hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
                  >

                    Search
                  </a>

                  <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Requsted
                  </a>

                  <a
                    href="#"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Account
                  </a>
                               
                </div>
                <div>
                  
                  
                </div>
              </div>
             
            </div>
           
        
            <div className="flex items-center justify-center w-full ml-96 z-10">
        <img
          className="h-10 w-full justify-end ml-96 flex cursor-pointer"
          src={Avatar}
          alt=""
          onClick={openModal}
        />
        <button className=" w-full">Sign Out</button>
      </div>

      {modalOpen && (
      <motion.div   className="fixed inset-0 flex items-center justify-center z-50  bg-white/30   ">
      <div className="modal-overlay fixed inset-0  opacity-50 "></div>
      <div className="modal text-white p-4 rounded-md">
       
        <motion.div  initial={{x:400, y:-400 , opacity:0}} animate={{x:0 , y:0 , opacity:1}} transition={{duration:"1", type:"spring" , stiffness: "100" }}
        className="modal-content bg-gradient-to-tr from-light-blue-300 to-light-blue-400 rounded-lg">
          <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold mb-4 p-3 flex ml-36">Basic Details</h2>
          <button
          className="close-button absolute flex items-center justify-end  ml-4 text-white hover:text-red-500"
          onClick={closeModal}
        >
          X
        </button>
          </div>
          <div className="card px-10 py-5 flex items-center justify-center">
            <div className="left w-2/4 h-50vh flex flex-col items-center justify-center">
                 <img className="bg-black w-40 h-40 rounded-full" src={Avatar} alt="" />
                 <h1 className="py-3">UserName</h1>
                 <p>user@gmail.com</p>
            </div>
             <div className="right w-2/4 h-50vh px-10 py-5 ">
                   <p>Dob</p>
                   <p>Referal Code</p>
                   <p>Zip Code</p>
             </div> 

          </div>
           
        </motion.div>
      </div>
    </motion.div>
      )}

   
              
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Search
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Requesed
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Account
                </a>

  
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header> */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Nav;