import React, { useState, useEffect } from "react";
import {
  FaArrowDown,
  FaFilter,
  FaInfoCircle,
  FaPenFancy,
  FaPlus,
  FaRegCheckCircle,
  FaToolbox,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import DashboardSm from "../commonents/dashboardSm";

const CurrentRepairs = () => {
  const [toggle, setToggle] = useState(false);

  const handleModal = () => {
    setToggle(!toggle);
  };

  const [repairs, setRepairs] = useState([]);
  const repairsRef = collection(db, "repairs");

  useEffect(() => {
    const getRepairs = async () => {
      const data = await getDocs(repairsRef);
      setRepairs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getRepairs();
  }, []);

  return (
    <div className="bg-gray-200 h-full   ml-64 sm:max-w-lg sm:pt-24 sm:ml-0">
      <DashboardSm />
      <div className=" flex justify-around sm:hidden">
        <div className="title w-1/3  h-40 mt-12">
          <div className="flex flex-col items-start justify-evenly h-full">
            <div className="flex items-center ">
              <p className="text-3xl mr-8">Current Repairs</p>
              <p className="text-bold text-gray-400">({repairs.length})</p>
            </div>
            <div className="flex items-center w-92 ">
              <input
                placeholder="Search for a item..."
                className="w-96 h-12 bg-gray-300 rounded-l-lg text-xl pl-4
            "
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end w-1/3 h-40 mt-16 justify-evenly ">
          <button className="flex bg-red-500 hover:bg-red-400 h-10 rounded-md w-40 justify-center items-center text-white">
            <FaPlus className="mr-4" />
            <Link to="addrepair">Add new repair</Link>
          </button>
          <div className="flex">
            <div className="flex items-center mr-4">
              <FaFilter className="mr-4" />
              <select className=" flex items-center justify-between bg-white w-72 h-10 px-6 rounded-lg">
                <FaArrowDown className="text-xs" />
                <option>- Search by engineer -</option>
                <option>Saaleh</option>
                <option>Naaem</option>
                <option>Shaheed</option>
                <option>Amjad</option>
                <option>Reece</option>
                <option>Ryan</option>
                <option>Aadil</option>
              </select>
            </div>
            <div className="flex items-center">
              <FaFilter className="mr-4" />
              <select className=" flex items-center justify-between bg-white w-72 h-10 px-6 rounded-lg">
                <FaArrowDown className="text-xs" />
                <option>- Search by catergory -</option>
                <option>Cookers</option>
                <option>Hobs</option>
                <option>Refridgeration</option>
                <option>Hoods</option>
                <option>Microwaves</option>
                <option>Laundry</option>
                <option>Dishwashers</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-6">
        <p className="sm">Current Repairs</p>
      </div>
      <div className="appliance-container m-12 sm:ml-0 sm:w-screen sm:p-4 ">
        <table className="w-full bg-gray-300 ">
          <tr className="h-16 text-sm sm:h-4">
            <th>Prod No.(SKU)</th>
            <th>Model No</th>

            <th className="sm:hidden">Category</th>
            <th className="sm:hidden">Location</th>
            <th>Priorty</th>
            <th>Engineer</th>
            <th className="sm:hidden flex justify-center items-center h-16">
              <p>Status</p>
              <FaInfoCircle className="ml-2 text-1xl" onClick={handleModal} />
            </th>
            <th className="sm:hidden">Created</th>
            <th className="sm:hidden">Edit</th>
          </tr>
          {repairs?.map((listing, listingIndex) => (
            <tr
              key={listingIndex}
              className="h-12 bg-gray-100 border-gray-300 border-2 text-xs uppercase"
            >
              <td className="uppercase">{listing.jobNumber}</td>
              <td className="uppercase">{listing.model}</td>
              <td className="sm:hidden">{listing.catergory}</td>
              <td className="uppercase sm:hidden">{listing.location}</td>

              <td className="uppercase flex justify-center items-center h-14">
                {listing.priorty === "0" ? (
                  <p className="w-32 bg-yellow-100 rounded-xl h-8 border-2 flex items-center justify-center  text-xs sm:w-24">
                    no priorty
                  </p>
                ) : (
                  <p className="w-28 bg-red-400 rounded-xl h-8 border-2 flex items-center justify-center font-bold text-xs sm:w-20 sm:h-12 sm:text-xs">
                    high priorty
                  </p>
                )}
              </td>

              <td className="sm:hidden">{listing.engineer}</td>
              <td className="sm:hidden">
                {listing.status === "Completed" ? (
                  <div className="flex items-center justify-center relative">
                    <FaRegCheckCircle className="text-green-500 mr-2" />
                    <p>{listing.status}</p>
                    {toggle && (
                      <div className=" absolute rounded-xl p-2 h-20 text-xs bg-slate-400 w-96 flex flex-col justify-evenly right-10">
                        <div
                          onClick={handleModal}
                          className=" bg-red-700 rounded-xl w-6 h-6 text-white flex text-base items-center justify-center absolute -right-1 -top-2 hover:cursor-pointer"
                        >
                          x
                        </div>
                        <div className=" flex  items-start">
                          <p className="text-red-600 font-bold underline flex mr-2">
                            Repair:
                          </p>
                          <p>being repaired </p>
                        </div>
                        <div className="flex mr-2">
                          <p className="text-green-600 font-bold underline">
                            Completed:
                          </p>
                          <p className="text-start">
                            can be sent back to customer
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaToolbox className="text-red-500 mr-4" />
                    <p>{listing.status}</p>
                  </div>
                )}
              </td>
              <td className="sm:hidden">{listing.status}</td>
              <td>
                <div className="flex flex-col justify-evenly items-center">
                  <button className=" rounded-md mb-2 bg-green-400 text-white text-sm w-16 h-4 flex items-center justify-evenly mt-2">
                    <FaPenFancy />
                    Edit
                  </button>
                  <button className="rounded-md mb-2 bg-blue-400 text-white text-sm w-16 h-4 flex items-center justify-evenly">
                    Images
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div></div>
    </div>
  );
};
export default CurrentRepairs;
