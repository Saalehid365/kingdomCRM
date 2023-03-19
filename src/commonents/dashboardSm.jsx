import React from "react";
import { FaPlus, FaRegClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSm = () => {
  return (
    <div className="hidden sm:flex sm:justify-center sm:mt-12">
      <div className=" sm:w-96 sm:bg-gray-200 text-xs border border-gray-300  ">
        <div className="bg-red-500 flex h-16 justify-between items-center px-4">
          <div className="flex text-gray-200">
            <FaRegClipboard />
            <p className="pl-2">Dashboard</p>
          </div>
          <Link
            to="/currentrepairs/addrepair"
            className="bg-white flex h-6 items-center p-2"
          >
            <FaPlus /> Add Repair
          </Link>
        </div>
        <Link
          to="/currentrepairs"
          className=" bg-white border-b-2 flex h-16 justify-between items-center px-4"
        >
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Current Repairs</p>
          </div>
          <div
            className="bg-yellow-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>5</p>
          </div>
        </Link>
        <Link
          to="/priortyrepairs"
          className="bg-white border-b-2 flex h-16 justify-between items-center px-4"
        >
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Priorty Repairs</p>
          </div>
          <div
            className="bg-red-500 rounded-lg w-max p-2 text-white
          "
          >
            <p>10</p>
          </div>
        </Link>
        <Link
          to=""
          className="bg-white border-b-2 flex h-16 justify-between items-center px-4"
        >
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Completed Repairs</p>
          </div>
          <div
            className="bg-blue-200 rounded-lg w-max p-2 text-white
          "
          >
            <p>345</p>
          </div>
        </Link>
        <div className="bg-white border-b-2 flex h-16 justify-between items-center px-4">
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Total Appliances</p>
          </div>
          <div
            className="bg-green-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>14545</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-16 justify-between items-center px-4">
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Total Parts Ordered</p>
          </div>
          <div
            className="bg-yellow-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>345</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-16 justify-between items-center px-4">
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Scrapped Items</p>
          </div>
          <div
            className="bg-red-600 rounded-lg w-max p-2 text-white
          "
          >
            <p>127</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-16 justify-between items-center px-4">
          <div className="flex items-center">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2 text-lg">Returned To Customer</p>
          </div>
          <div
            className="bg-green-800 rounded-lg w-max p-2 text-white
          "
          >
            <p>345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSm;
