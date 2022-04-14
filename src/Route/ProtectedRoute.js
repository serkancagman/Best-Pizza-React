import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "Context/UserContext";

export const ProtectedLoginRegisterRoute = ({ children }) => {
  const { user } = React.useContext(UserContext);
  return user ? <Navigate to="/" /> : children;
};
