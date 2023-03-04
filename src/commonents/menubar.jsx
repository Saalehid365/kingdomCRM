import React, { useState } from "react";
import {
  FaBlenderPhone,
  FaBorderAll,
  FaCog,
  FaDoorClosed,
  FaEllipsisV,
  FaExclamationTriangle,
  FaHandsHelping,
  FaHouseDamage,
  FaRocketchat,
  FaTools,
  FaTrash,
  FaUserCog,
  FaUsersCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-1/5 h-full fixed bg-slate-600  ">
      <div className="flex items-center justify-evenly bg-gray-800 text-white h-20">
        <FaTools />
        <div>
          <p>Kingdom Appliances</p>
          <p>Workshop</p>
        </div>
      </div>
      <div className="flex h-1/6 items-center justify-evenly">
        <div className="h-12 w-12 bg-red-300 rounded-lg flex justify-center items-center text-gray-500">
          <p>A.N</p>
        </div>
        <div className=" flex flex-col items-start">
          <p className="text-gray-300">Saaleh</p>
          <p className="text-yellow-600 font-400">dishwasher</p>
        </div>
        <div>
          <button onClick={handleToggle} className="hover:cursor-pointer w-8">
            <FaEllipsisV className="text-white" />
          </button>
        </div>
        {toggle && (
          <div className="flex flex-col bg-white w-32 h-16 justify-evenly items-center rounded absolute left-44 top-44">
            <div className="flex items-center w-full justify-evenly hover:text-red-400">
              <FaUserCog />
              <Link>Profile</Link>
            </div>
            <div className="flex items-center w-full justify-evenly hover:text-red-400">
              <FaDoorClosed />
              <button>Logout</button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-evenly items-start h-1/3 border-b-2 border-red text-gray-200 ">
        <Link
          to="dashboard"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaBorderAll className="ml-12 mr-6" />
          Dashboard
        </Link>
        <Link
          to="currentrepairs"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaCog className="ml-12 mr-6" />
          Current Repairs
        </Link>
        <Link
          to="priortyrepairs"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaExclamationTriangle className="ml-12 mr-6" />
          Priorty Repairs
        </Link>
        <Link
          to="dashboard"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaTrash className="ml-12 mr-6" />
          Unrepairable
        </Link>
        <Link
          to="dashboard"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaHouseDamage className="ml-12 mr-6" />
          Returns
        </Link>
      </div>
      <div className="flex flex-col border-b-2 h-1/3 justify-evenly text-white">
        <Link
          to="contactmanagement"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaBlenderPhone className="ml-12 mr-6" />
          Contact Management
        </Link>
        <Link
          to="chatwithengineers"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaRocketchat className="ml-12 mr-6" />
          Chat with engineers
        </Link>

        <Link
          to="engineers"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaUsersCog className="ml-12 mr-6" />
          Engineers
        </Link>
        <Link
          to="gethelp"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-xl"
        >
          <FaHandsHelping className="ml-12 mr-6" />
          Get tech help
        </Link>
      </div>
      <div className="bg-gray-800 h-8 flex flex-col justify-end mt-12">
        <p className="text-gray-500 text-sm">
          Powered by Anthony ID365 &#169; 2023
        </p>
      </div>
    </div>
  );
};

export default Menubar;
