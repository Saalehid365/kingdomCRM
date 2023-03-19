import React, { useState } from "react";
import {
  FaBlenderPhone,
  FaBorderAll,
  FaCog,
  FaDoorClosed,
  FaDoorOpen,
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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "./context";

const Menubar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      handleToggle();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-1/6 h-full fixed bg-slate-600 sm:w-screen sm:h-2 ">
      <div
        className="flex items-center justify-evenly bg-gray-800 text-white h-20 
      sm:items-start sm:justify-between sm:text-left sm:text-1xl sm:pl-4 sm:h-14 "
      >
        <FaTools className="sm:hidden" />
        <div>
          <p>Kingdom Appliances</p>
          <p>Workshop</p>
        </div>
      </div>
      <div className="flex h-1/6 items-center justify-evenly sm:hidden">
        <div className="h-12 w-12 bg-red-300 rounded-lg flex justify-center items-center text-gray-500">
          <p>A.N</p>
        </div>
        {user && (
          <div className=" flex flex-col items-start">
            <p className="text-green-400">Welcome back</p>
            <p className="text-gray-300">{user && user.email}</p>
          </div>
        )}
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

            {user ? (
              <div className="flex items-center w-full justify-evenly hover:text-red-400">
                <FaDoorClosed />
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="flex items-center w-full justify-evenly hover:text-red-400">
                <FaDoorOpen />
                <Link to="/" onClick={handleToggle}>
                  Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className="flex flex-col justify-evenly items-start h-1/3 border-b-2 border-red text-gray-200 
                        sm:hidden"
      >
        <Link
          to="dashboard"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaBorderAll className="ml-12 mr-6" />
          Dashboard
        </Link>
        <Link
          to="currentrepairs"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaCog className="ml-12 mr-6" />
          Current Repairs
        </Link>
        <Link
          to="priortyrepairs"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaExclamationTriangle className="ml-12 mr-6" />
          Priorty Repairs
        </Link>
        <Link
          to="unrepairable"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaTrash className="ml-12 mr-6" />
          Unrepairable
        </Link>
      </div>
      <div className="flex flex-col border-b-2 h-1/3 justify-evenly text-white sm:hidden">
        <Link
          to="contactmanagement"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaBlenderPhone className="ml-12 mr-6" />
          Contact Management
        </Link>
        <Link
          to="chatwithengineers"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaRocketchat className="ml-12 mr-6" />
          Chat with engineers
        </Link>

        <Link
          to="engineers"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaUsersCog className="ml-12 mr-6" />
          Engineers
        </Link>
        <Link
          to="gethelp"
          className=" h-16 hover:bg-cyan-600 flex items-center  w-full text-lg"
        >
          <FaHandsHelping className="ml-12 mr-6" />
          Get tech help
        </Link>
      </div>
      <div className="bg-gray-800 h-8 flex flex-col justify-end mt-12 sm:hidden">
        <p className="text-gray-500 text-sm">
          Powered by Anthony ID365 &#169; 2023
        </p>
      </div>
    </div>
  );
};

export default Menubar;
