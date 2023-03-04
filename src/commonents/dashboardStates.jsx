import React from "react";

const DashboardStates = () => {
  return (
    <div className="flex flex-col justify-around pt-8">
      <div className=" flex justify-evenly ">
        <div className="card border w-1/3 h-40 my-8 rounded-xl ">
          <p className="flex border-b-2 pl-8 text-xl font-semibold h-12 pt-2">
            Invetory
          </p>
          <div className="flex items-start pt-8 justify-evenly h-full">
            <div className="flex flex-col items-start justify-center ">
              <p className="font-bold">43</p>
              <p>Total no of parts ordered</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">28</p>
              <p>Total no of appliances</p>
            </div>
          </div>
        </div>
        <div className="card border w-1/3 h-40 my-8 rounded-xl ">
          <p className="flex border-b-2 pl-8 text-xl font-semibold h-12 pt-2">
            Repairs
          </p>
          <div className="flex items-start pt-8 justify-evenly h-full">
            <div className="flex flex-col items-start justify-center ">
              <p className="font-bold">128</p>
              <p>Completed repairs</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">86</p>
              <p>Current Repairs</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly ">
        <div className="card border w-1/3 h-40 my-8 rounded-xl ">
          <p className="flex border-b-2 pl-8 text-xl font-semibold h-12 pt-2">
            Priorty repairs
          </p>
          <div className="flex items-start pt-8 justify-evenly h-full">
            <div className="flex flex-col items-start justify-center ">
              <p className="font-bold">15</p>
              <p>Priorty level 1</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">24</p>
              <p>Priorty level 2</p>
            </div>
          </div>
        </div>
        <div className="card border w-1/3 h-40 my-8 rounded-xl ">
          <p className="flex border-b-2 pl-8 text-xl font-semibold h-12 pt-2">
            Highest quantity
          </p>
          <div className="flex items-start pt-8 justify-evenly h-full">
            <div className="flex flex-col items-start justify-center ">
              <p className="font-bold">243</p>
              <p>Dishwasher</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">197</p>
              <p>Washing machine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStates;
