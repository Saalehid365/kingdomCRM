import React from "react";
import { FaPlus, FaRegClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSm = () => {
  return (
    <div className="hidden sm:flex sm:justify-center sm:mt-12">
      <div className=" sm:w-72 sm:bg-gray-200 text-xs border border-gray-300  ">
        <div className="bg-red-500 flex h-12 justify-between items-center px-4">
          <div className="flex text-gray-200">
            <FaRegClipboard />
            <p className="pl-2">Dashboard</p>
          </div>
          <Link className="bg-white flex h-6 items-center p-2">
            <FaPlus /> Add Repair
          </Link>
        </div>
        <div className=" bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Current Repairs</p>
          </div>
          <div
            className="bg-yellow-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>5</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Priorty Repairs</p>
          </div>
          <div
            className="bg-blue-200 rounded-lg w-max p-2 text-white
          "
          >
            <p>10</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Completed Repairs</p>
          </div>
          <div
            className="bg-red-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>345</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Total Appliances</p>
          </div>
          <div
            className="bg-green-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>14545</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Total Parts Ordered</p>
          </div>
          <div
            className="bg-yellow-400 rounded-lg w-max p-2 text-white
          "
          >
            <p>345</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Scrapped Items</p>
          </div>
          <div
            className="bg-red-600 rounded-lg w-max p-2 text-white
          "
          >
            <p>127</p>
          </div>
        </div>
        <div className="bg-white border-b-2 flex h-12 justify-between items-center px-4">
          <div className="flex">
            <FaRegClipboard />
            <p className="text-gray-500 pl-2">Returned To Customer</p>
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
