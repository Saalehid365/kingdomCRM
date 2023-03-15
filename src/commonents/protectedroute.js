import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "./context";

const Protected = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;

/*import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context";

const Protectedroute = ({ Children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return Children;
};

export default Protectedroute;*/
