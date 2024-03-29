import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import DashboardSm from "../commonents/dashboardSm";

const Addrepair = () => {
  const [brand, setBrand] = useState("");
  const [catergory, setCatergory] = useState("");
  const [engineer, setEngineer] = useState("");
  const [jobNumber, setJobNumber] = useState("");
  const [location, setLocation] = useState("");
  const [model, setModel] = useState("");
  const [priorty, setPriorty] = useState(0);
  const [receipt, setReceipt] = useState("");
  const [serial, setSerial] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const colRef = collection(db, "repairs");

    await addDoc(colRef, {
      brand: brand,
      catergory: catergory,
      engineer: engineer,
      jobNumber: jobNumber,
      location: location,
      model: model,
      priorty: priorty,
      receipt: receipt,
      serial: serial,
      status: status,
      comments: comments,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="ml-96 mr-14 h-screen pt-4 sm:ml-0 sm:px-4 sm:mr-0 ">
      <DashboardSm />
      <form className="h-screen flex justify-evenly mt-20 sm:flex-col  sm:mb-72">
        <div className="w-2/4 h-screen flex flex-col items-start justify-start sm:h-auto sm:mt-96 sm:w-full sm:border sm:pb-4">
          <div className="hidden sm:bg-red-500 sm:w-full sm:h-12 sm:items-center sm:flex sm:justify-start sm:pl-4">
            <p>Add Repair</p>
          </div>
          <div className="flex items-start justify-start flex-col w-full sm:h-12 sm:w-full sm:px-2 sm:pt-2">
            <label className="">Job Number</label>

            <input
              onChange={(e) => {
                setJobNumber(e.target.value);
              }}
              placeholder="A119643 or U46781..."
              className="border-2 border-gray-300 w-5/6 h-10 pl-2 rounded-md sm:w-full"
            ></input>
            <p className="text-sm text-red-500 sm:hidden">
              Do not exceed 7 characters when entering job number
            </p>
          </div>

          <div className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2">
            <label className="mr-4">Manufacturer</label>
            <select
              onChange={(e) => {
                const selectedBrand = e.target.value;
                setBrand(selectedBrand);
              }}
              className="w-5/6 h-10 border-2 border-gray-300 pl-2 rounded-md sm:w-full"
            >
              <option value="">-</option>
              <option value="AEG">AEG</option>
              <option value="Zanussi">Zanuss</option>
              <option value="Electrolux">Electrolux</option>
              <option value="Neff">Neff</option>
              <option value="Samsung">Samsung</option>
              <option value="Bosch">Bosch</option>
            </select>
          </div>
          <div
            className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2 
          "
          >
            <label>Model No</label>
            <input
              onChange={(e) => {
                setModel(e.target.value);
              }}
              placeholder="Enter model no..."
              className="border-2 border-gray-300 w-5/6 h-10 pl-2 rounded-md sm:w-full "
            ></input>
          </div>

          <div className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2">
            <label>Serial No</label>
            <input
              onChange={(e) => {
                setSerial(e.target.value);
              }}
              placeholder="Enter serial no..."
              className="border-2 border-gray-300 w-5/6 h-10 pl-2 rounded-md sm:w-full "
            ></input>
          </div>
          <div className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2">
            <label>Priorty </label>
            <input
              onChange={(e) => {
                setPriorty(e.target.value);
              }}
              placeholder="Enter priorty..."
              className="border-2 border-gray-300 w-5/6 h-10 pl-2 rounded-md sm:w-full"
            ></input>
            <div className="text-sm w-72 flex mt-2">
              <p className="text-white mr-4 bg-red-500 h-6 rounded w-full text-xs flex items-center justify-center sm:w-1/3">
                High = 1
              </p>

              <p className="text-white mr-4 bg-green-500 rounded w-full text-xs flex items-center justify-center sm:w-1/3">
                Low = 2
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col w-5/6 mt-6 sm:h-12  sm:pt-4 sm:w-full sm:px-2">
            <label className="  ">Location</label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Enter Location..."
              className="border-2 border-gray-300 w-full h-10 pl-2 rounded-md"
            ></input>
            <div className="flex w-full justify-evenly text-sm sm:hidden">
              <p>
                Large items{" "}
                <span>
                  e.g <span className="text-red-500 font-bold">O14</span>
                </span>
              </p>
              <p>
                Small items{" "}
                <span>
                  e.g <span className="text-red-500 font-bold">S12</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-3/4 flex flex-col items-start sm:w-full sm:h-auto sm:border sm:pt-4">
          <div className="flex flex-col justify-between w-full items-start sm:h-12 sm:full sm:px-2">
            <label className="mr-4">Status</label>
            <select
              onChange={(e) => {
                const selectedStatus = e.target.value;
                setStatus(selectedStatus);
              }}
              className="w-5/6 h-10 border-2 border-gray-300 pl-2 rounded-md sm:w-full"
            >
              <option value="">-</option>
              <option value="Queue">Queued</option>
              <option value="Repair">Repair</option>
              <option value="Scrap">Scrap</option>
              <option value="Completed">Completed</option>
              <option value="RTC">Returned to customer</option>
            </select>
          </div>
          <div
            className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:wull sm:px-2
          "
          >
            <label>Receipt No</label>
            <input
              onChange={(e) => {
                setReceipt(e.target.value);
              }}
              placeholder="Enter receipt no..."
              className="border-2 border-gray-300 w-5/6 h-10 pl-2 rounded-md sm:w-full"
            ></input>
          </div>
          <div
            className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2
          "
          >
            <label>Catergory</label>
            <select
              onChange={(e) => {
                const selectedCatergory = e.target.value;
                setCatergory(selectedCatergory);
              }}
              className="w-5/6 h-10 border-2 border-gray-300 pl-2 rounded-md sm:w-full"
            >
              <option value="">-</option>
              <option value="Washing Machine">Washing Machine"</option>
              <option value="Washer Dryer">Washer Dryer</option>
              <option value="Dishwasher">Dishwasher</option>
              <option value="Refrigeration">Refrigeration</option>
              <option value="Single Oven">Single Oven</option>
              <option value="Double Oven">Double Oven</option>
              <option value="Hobs">Hobs</option>
              <option value="Microwaves">Microwaves</option>
              <option value="Hoods">Hoods</option>
              <option value="Warmer Drawer">Warmer Drawer</option>
            </select>
          </div>
          <div
            className="flex flex-col justify-between w-full items-start mt-4 sm:h-12 sm:w-full sm:px-2
          "
          >
            <label>Engineer</label>
            <select
              onChange={(e) => {
                const selectedEngineer = e.target.value;
                setEngineer(selectedEngineer);
              }}
              className="w-5/6 h-10 border-2 border-gray-300 pl-2 rounded-md sm:w-full"
            >
              <option value="">-</option>
              <option value="Saaleh">Saaleh</option>
              <option value="Naeem">Naeem</option>
              <option value="Shaheed">Shaheed</option>
              <option value="Reece">Reece</option>
              <option value="Amjad">Amjad</option>
              <option value="Aadil">Aadil</option>
              <option value="Ryan">Ryan</option>
            </select>{" "}
          </div>

          <div className="flex flex-col justify-between w-full items-start mt-4 sm:h-124 sm:px-2 sm:w-full">
            <label>Comments</label>
            <input
              onChange={(e) => {
                setComments(e.target.value);
              }}
              placeholder="Comments about repair..."
              className="border-2 border-gray-300 w-5/6 h-32 pl-2 rounded-md sm:w-full"
            ></input>
          </div>

          <div className="pt-12 sm:pl-24">
            <button
              className="bg-red-600 h-10 w-40 rounded-md flex items-center text-white justify-evenly"
              type="submit"
              onClick={handleSubmit}
            >
              <FaPlusCircle />
              Add repair
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrepair;
