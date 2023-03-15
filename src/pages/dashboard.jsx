import React from "react";
import {
  FaAngleDoubleRight,
  FaAngleDown,
  FaFirstAid,
  FaHeartbeat,
  FaThumbsUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardSm from "../commonents/dashboardSm";
import DashboardStates from "../commonents/dashboardStates";

const Dashboard = () => {
  return (
    <div className="bg-blue-100 flex flex-col ml-64 sm:ml-0 sm:mt-12 sm:h-screen">
      <div className=" h-96 pb-24 sm:hidden">
        <div className="flex justify-between px-24 pt-12">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl text-bold sm:bg-red-500">Dashboard</h2>
            <p className="pt-4 sm:hidden">
              A quick data overview of the inventory.
            </p>
          </div>
          <button className="flex items-center border border-black rounded-lg w-44 justify-center h-14 sm:hidden">
            <p>Download Report</p>
            <FaAngleDown />
          </button>
        </div>
        <div className="pt-8 flex justify-around px-24 sm:hidden">
          <div className="h-40 w-80 rounded-lg flex flex-col border border-green-600 items-center justify-between overflow-hidden">
            <div className="flex flex-col items-center h-full justify-evenly py-2">
              <FaThumbsUp className="text-4xl text-green-500" />
              <p className="font-bold text-xl">Good</p>
              <p>Completed Repairs</p>
            </div>
            <Link className="flex bg-green-200 w-full justify-center items-center border-2 rounded-b-md border-green-300">
              <p>View Detailed Report </p>
              <FaAngleDoubleRight className="text-xs ml-2" />
            </Link>
          </div>
          <div className="h-40 w-80 rounded-lg flex flex-col border border-blue-600 items-center justify-between overflow-hidden">
            <div className="flex flex-col items-center h-full justify-evenly py-2">
              <FaFirstAid className="text-4xl text-blue-500" />
              <p className="font-bold text-xl">Good</p>
              <p>Current Repairs</p>
            </div>
            <Link className="flex bg-blue-200 w-full justify-center items-center border-2 rounded-b-md border-blue-300">
              <p>View Detailed Report </p>
              <FaAngleDoubleRight className="text-xs ml-2" />
            </Link>
          </div>
          <div className="h-40 w-80 rounded-lg flex flex-col border border-red-600 items-center justify-between overflow-hidden">
            <div className="flex flex-col items-center h-full justify-evenly py-2">
              <FaHeartbeat className="text-4xl text-red-500" />
              <p className="font-bold text-xl">Good</p>
              <p>Priorty Repairs</p>
            </div>
            <Link className="flex bg-red-200 w-full justify-center items-center border-2 rounded-b-md border-red-300">
              <p>Resolve now </p>
              <FaAngleDoubleRight className="text-xs ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <DashboardStates />
      <DashboardSm />
    </div>
  );
};

export default Dashboard;
