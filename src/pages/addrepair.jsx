import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

const Addrepair = () => {
  return (
    <div className="ml-96 h-screen mt-14 ">
      <div className="flex flex-col justify-center items-start w-4/5 ml-36 h-3/4 bg-gray-300">
        <p className="bg-red-500 rounded w-full">Add a repair</p>
        <form className="h-full bg-gray-200 w-full">
          <div className="flex h-28 bg-green-300 justify-start">
            <div className="w-1/4 border border-gray-600">
              <p className="">1.</p>
              <div>
                <p>Categorty</p>
                <p>appliance type</p>
              </div>
            </div>
            <div className="w-1/4">
              <p className="">1.</p>
              <div>
                <p>Categorty</p>
                <p>appliance type</p>
              </div>
            </div>
            <div className="w-1/4">
              <p className="">1.</p>
              <div>
                <p>Categorty</p>
                <p>appliance type</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addrepair;
