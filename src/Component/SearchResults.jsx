import React from "react";
import { motion } from "framer-motion";
import Anitmatedtxt from "./Anitmatedtxt";
import SearchSection from "../assets/Intro/resultspage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchResults = () => {
  return (
    <div>
      <div>
        <Anitmatedtxt text="Meet your service!"></Anitmatedtxt>
      </div>
      {/* <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: "100" }}
        className="w-full py-10 px-56 text-black"
      >
        <div>

        </div>
        <input
          type="text"
          className="w-full py-5 px-5 rounded-full border-2 items-center justify-center flex text-center border-black/70 text-black"
          placeholder="Find your service"
        />
      </motion.div> */}

      <div className="bg-indigo-600 m-10  flex p-10  rounded-xl text-white">
        <div className="left w-2/3">
          <h1 className="py-3 text-5xl font-bold">Search for your need</h1>
          <p className="py-3">
          Advanced search engine tailors results to your needs.
Get customized search results with our advanced engine.
          </p>
          <div className="relative">
            <input
              className="py-2 w-full pr-10 pl-4 px-5 rounded-full text-black "
              type="text"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
          </div>
          <div className="flex">
          <p className="py-3 flex items-center justify-center">Popular Searches :</p> 
           <ul className="flex items-center justify-center pl-2 text-black gap-2">
            <li >Business , </li>
            <li>Health , </li>
            <li>Renovation , </li>
            <li>Painting , </li>
            <li>Cleaning . </li>
           </ul>
          </div>
        
        </div>
        <div className="right w-1/3 flex items-center justify-center">
          <img className="w-40 h-40 " src={SearchSection} alt="" />
        </div>
      </div>

      <motion.div
        initial={{ x: -4000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-dark text-white rounded-lg">
          <h1 className="text-4xl p-10 font-semibold px-20">Search Results</h1>

          <div className="mb-10 p-3">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1084406/pexels-photo-1084406.jpeg?auto=compress&cs=tinysrgb&w=600')",
                }}
                title="Woman holding a mug"
              ></div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <button className="bg-dark text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>
                  <div class="text-sm">
                    <p className="text-black pl-5 ">price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 p-3">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1084406/pexels-photo-1084406.jpeg?auto=compress&cs=tinysrgb&w=600')",
                }}
                title="Woman holding a mug"
              ></div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <button className="bg-dark text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>
                  <div class="text-sm">
                    <p className="text-black pl-5 ">price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 p-3">
            <div class="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1084406/pexels-photo-1084406.jpeg?auto=compress&cs=tinysrgb&w=600')",
                }}
                title="Woman holding a mug"
              ></div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <button className="bg-dark text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>
                  <div class="text-sm">
                    <p className="text-black pl-5 ">price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchResults;
