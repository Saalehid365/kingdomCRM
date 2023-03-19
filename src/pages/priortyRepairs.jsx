import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";
import { FaSignInAlt, FaVoteYea } from "react-icons/fa";

const PriortyRepairs = () => {
  const [priList, setPriList] = useState([]);
  const priortys = collection(db, "repairs");
  const priortyQuery = query(priortys, where("priorty", "==", "1"));

  useEffect(() => {
    const getList = async () => {
      const priortyList = await getDocs(priortyQuery);
      setPriList(
        priortyList.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(priortyList);
    };
    getList();
  }, []);

  return (
    <div className="bg-gray-200 h-full pb-24 ml-60 sm:w-screen sm:ml-0">
      <div className="h-48 flex items-center pl-40 pt-8 w-full ">
        <p className="text-3xl mr-4">Priorty Repairs</p>
        <p className="text-red-500 text-bold">({priList.length})</p>
      </div>
      <div className="flex items-center w-92 ml-24 mb-10 rounded-r-lg">
        <input
          placeholder="Search for a item..."
          className="w-96 h-12 bg-gray-300 rounded-l-lg text-xl pl-4
            "
        ></input>
      </div>

      <div className="appliance-container w-10/12 ml-24 ">
        <table className=" bg-gray-300 w-full">
          <tr className="h-16 text-sm">
            <th>Prod No.(SKU)</th>
            <th>Model No</th>
            <th>Category</th>
            <th>Location</th>
            <th>Engineer</th>
            <th>Status</th>
            <th>Created</th>
            <th>Completed</th>
          </tr>
          {priList?.map((priortyData, priortyDataIndex) => (
            <tr className="bg-white  h-12 uppercase border-b-2 border-gray-300 text-xs">
              <td>{priortyData.jobNumber}</td>
              <td>{priortyData.model}</td>
              <td>{priortyData.catergory}</td>
              <td>{priortyData.location}</td>
              <td>{priortyData.engineer}</td>
              <td>{priortyData.status}</td>
              <td>{priortyData.created}</td>
              <td className="flex justify-center items-center h-12    ">
                <button className="  flex justify-center items-center bg-green-300 rounded-md text-md p-2  ">
                  <FaSignInAlt />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PriortyRepairs;
