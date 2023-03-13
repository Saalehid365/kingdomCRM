import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEnvelope, FaUserLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "./context";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-2/4 items-center justify-center"
      >
        <p className="text-white text-3xl ml-60 pb-24">Sign up</p>
        <div className=" flex flex-col items-start pl-72">
          <label className="text-md text-white mb-4">Email</label>
          <div className="border-2 h-12 rounded-md flex items-center">
            <FaEnvelope className="text-blue-500 text-4xl h-full bg-black pl-2" />
            <input
              className="w-96 h-full bg-black p-4 text-white"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className=" flex flex-col items-start  pl-72 mt-16">
          <label className="text-md pb-4 text-white">Password</label>
          <div className="border-2 h-12  rounded-md flex items-center">
            <FaUserLock className="text-blue-500 text-4xl h-full bg-black pl-2" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-96 h-full bg-black p-4 text-white"
              placeholder="Enter password..."
            ></input>
          </div>
          <button className="bg-gray-900 hover:bg-gray-700 w-full mt-12 h-12 rounded-md text-blue-500">
            Sign up
          </button>
          <div>
            <p className="text-white mt-4">
              already have an account
              <Link to="/login" className="underline text-blue-500 ml-2">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
