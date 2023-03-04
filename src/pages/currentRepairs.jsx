import React, { useState } from "react";
import {
  FaArrowDown,
  FaFilter,
  FaInfoCircle,
  FaPenFancy,
  FaPlus,
  FaRegCheckCircle,
  FaSearch,
  FaToolbox,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CurrentRepairs = () => {
  const [toggle, setToggle] = useState(false);

  const handleModal = () => {
    setToggle(!toggle);
  };

  const appliances = [
    {
      jobnumber: "U45902",
      status: "repair",
      model: "KME761000M",
      catergory: "Microwave",
      brand: "AEG",
      serial: "1345890",
      location: "S17",
      priorty: "5",
      engineer: "Saaleh",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "A119568",
      status: "completed",
      model: "FSK52710Z",
      catergory: "Dishwasher",
      brand: "Zanussi",
      serial: "1345890",
      location: "S1",
      priorty: "1",
      engineer: "Naeem",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "U45102",
      status: "repair",
      model: "BPK351020M",
      catergory: "Single Oven",
      brand: "AEG",
      serial: "1345890",
      location: "S7",
      priorty: "4",
      engineer: "Shaheed",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "A117543",
      status: "repair",
      model: "ZCV66050XA",
      catergory: "Cooker",
      brand: "AEG",
      serial: "1345890",
      location: "S23",
      priorty: "3",
      engineer: "Amjad",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "A118621",
      status: "repair",
      model: "DCK5960HM",
      catergory: "Hood",
      brand: "AEG",
      serial: "1345890",
      location: "S86",
      priorty: "2",
      engineer: "Saaleh",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "A11246",
      status: "repair",
      model: "DCK5960HM",
      catergory: "Hood",
      brand: "AEG",
      serial: "1345890",
      location: "S86",
      priorty: "2",
      engineer: "Saaleh",
      created: "date",
      customer: "khadeejah",
    },
    {
      jobnumber: "A118621",
      status: "repair",
      model: "DCK5960HM",
      catergory: "Dishwasher",
      brand: "AEG",
      serial: "1345890",
      location: "S86",
      priorty: "2",
      engineer: "Saaleh",
      created: "date",
      customer: "khadeejah",
    },
  ];

  return (
    <div className="bg-gray-200 h-full ml-80 ">
      <div className=" flex justify-around">
        <div className="title w-1/3  h-40 mt-12">
          <div className="flex flex-col items-start justify-evenly h-full">
            <div className="flex items-center ">
              <p className="text-3xl mr-8">Current Repairs</p>
              <p>(5678)</p>
            </div>
            <div className="flex items-center w-full ">
              <input
                placeholder="Search for a item..."
                className="w-96 h-12 bg-blue-200 rounded-l-lg text-xl pl-4
            "
              ></input>
              <FaSearch className="bg-blue-200 h-full text-lg rounded-r-lg " />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-1/3 h-40 mt-16 justify-evenly">
          <button className="flex bg-red-500 hover:bg-red-400 h-10 rounded-md w-40 justify-center items-center text-white">
            <FaPlus className="mr-4" />
            <Link to="addrepair">Add new repair</Link>
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
      <div className="appliance-container m-12 ">
        <table className="w-full bg-gray-300 ">
          <tr className="h-16 text-sm">
            <th>Prod No.(SKU)</th>
            <th>Model No</th>

            <th>Category</th>
            <th>Location</th>
            <th>Priorty</th>
            <th>Engineer</th>
            <th>Status</th>
            <th>Created</th>
            <th>Edit</th>
          </tr>
          {appliances?.map((listing, listingIndex) => (
            <tr
              key={listingIndex}
              className="h-18 bg-gray-100 border-gray-300 border-2 text-sm "
            >
              <td>{listing.jobnumber}</td>
              <td>{listing.model}</td>
              <td>{listing.catergory}</td>
              <td className="rounded-lg h-8">{listing.location}</td>

              <td className="">
                {listing.priorty <= 2 ? (
                  <p className="bg bg-yellow-100 rounded-xl h-6 flex items-center justify-center font-bold text-xs">
                    low priorty
                  </p>
                ) : (
                  <p className="bg bg-red-400 rounded-xl h-6 flex items-center justify-center font-bold text-xs">
                    high priorty
                  </p>
                )}
              </td>

              <td>{listing.engineer}</td>
              <td className="">
                {listing.status === "completed" ? (
                  <div className="flex items-center justify-center relative">
                    <FaRegCheckCircle className="text-green-500 mr-4" />
                    <p>{listing.status}</p>
                    <FaInfoCircle className="ml-2" onClick={handleModal} />
                    {toggle && (
                      <div className=" absolute rounded-xl p-8 h-24 text-xs bg-slate-400 w-72 flex flex-col justify-evenly right-10">
                        <div
                          onClick={handleModal}
                          className=" bg-red-700 rounded-xl w-6 h-6 text-white flex text-base items-center justify-center absolute -right-1 -top-2 hover:cursor-pointer"
                        >
                          x
                        </div>
                        <div className=" items-start">
                          <p className="text-red-600 font-bold underline">
                            Repair:
                          </p>
                          <p>Item is currently being repaired </p>
                        </div>
                        <div className="">
                          <p>Completed:</p>
                          <p>
                            Item is completed and can be sent back to customer
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaToolbox className="text-red-500 mr-4" />
                    <p>{listing.status}</p>
                    <FaInfoCircle className="ml-2" onClick={handleModal} />
                  </div>
                )}
              </td>
              <td>{listing.created}</td>
              <td>
                <div className="flex flex-col justify-evenly items-center">
                  <button className=" rounded-md mb-2 bg-green-400 text-white text-sm w-16 h-6 flex items-center justify-evenly mt-2">
                    <FaPenFancy />
                    Edit
                  </button>
                  <button className="rounded-md mb-2 bg-blue-400 text-white text-sm w-16 h-6 flex items-center justify-evenly">
                    Images
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CurrentRepairs;
