import React from "react";
import { FaArrowDown, FaFilter, FaPlus, FaSearch } from "react-icons/fa";

const CurrentRepairs = () => {
  return (
    <div className="bg-blue-100 h-full flex justify-around">
      <div className="title w-1/3  h-40 mt-16">
        <div className="flex flex-col items-start justify-evenly h-full">
          <div className="flex items-center ">
            <p className="text-3xl mr-8">Current Repairs</p>
            <p>(5678)</p>
          </div>
          <div className="flex items-center w-full ">
            <input
              className="w-96 h-12 bg-blue-200 rounded-l-lg
            "
            ></input>
            <FaSearch className="bg-blue-200 h-full text-lg rounded-r-lg " />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-1/3 h-40 mt-16 justify-evenly">
        <button className="flex bg-red-500 hover:bg-red-400 h-10 rounded-md w-40 justify-center items-center text-white">
          <FaPlus className="mr-4" />
          <p>Add new repair</p>
        </button>
        <div className="flex items-center">
          <FaFilter className="mr-4" />
          <button className=" flex items-center justify-between bg-white w-72 h-10 px-6 rounded-lg">
            <p>- select a group -</p>
            <FaArrowDown className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentRepairs;
