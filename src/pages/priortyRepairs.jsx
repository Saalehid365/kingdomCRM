import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";
import { FaVoteYea } from "react-icons/fa";

const PriortyRepairs = () => {
  const [priList, setPriList] = useState([]);
  const priortys = collection(db, "repairs");
  const priortyQuery = query(priortys, where("priorty", "==", 2));

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
    <div className="bg-gray-200 h-screen ml-60 w-full">
      <div className="h-48 flex items-center ml-40 pt-8 w-92 ">
        <p className="text-3xl mr-4">Priorty Repairs</p>
        <p className="text-red-500 text-bold">({priList.length})</p>
      </div>

      <div className="appliance-container w-10/12 ml-24  ">
        <table className="w-11/12 bg-gray-300">
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
            <tr className="bg-white  h-20 uppercase border-b-2 border-gray-300">
              <td>{priortyData.jobNumber}</td>
              <td>{priortyData.model}</td>
              <td>{priortyData.catergory}</td>
              <td>{priortyData.location}</td>
              <td>{priortyData.engineer}</td>
              <td>{priortyData.status}</td>
              <td>{priortyData.created}</td>
              <td className="flex justify-center items-center h-full pt-4 ">
                <button className="flex flex-col justify-center items-center bg-green-500 rounded-md text-md h-12 p-2  ">
                  <FaVoteYea /> Click if completed
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
