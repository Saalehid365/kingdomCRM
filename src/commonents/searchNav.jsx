import React from "react";
import { FaAngleDown, FaLanguage, FaSearch, FaSun } from "react-icons/fa";

const SearchNav = () => {
  const current = new Date();

  const time = current.toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-white h-20 flex justify-center items-center border-b-2 ml-64">
      <div className="flex w-1/3 pl-12 items-center ">
        <input
          placeholder="Search for anythin here..."
          className="h-8 rounded-l-lg  bg-blue-100 text-base pl-4 w-2/3"
        ></input>
        <FaSearch className="bg-blue-100 h-8 rounded-r-lg pr-2 w-6" />
      </div>
      <div className="w-1/3 flex items-center justify-center ">
        <FaLanguage
          className="mr-4 text-3xl
        "
        />
        <p>English (US)</p>
        <button>
          <FaAngleDown />
        </button>
      </div>
      <div className="w-1/3 flex flex-col items-end">
        <div className="flex items-center w-60 justify-center">
          <FaSun className="text-yellow-500 text-xl mr-2" />
          <p>Good Morning</p>
        </div>
        <div className="flex items-center w-60 justify-evenly">
          <p>14 January 2022</p>
          <FaSun
            className="text-yellow-500 text-xs
          "
          />
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
