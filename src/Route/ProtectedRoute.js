import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "Context/UserContext";

export const ProtectedLoginRegisterRoute = ({ children }) => {
  const isLoggeIn = localStorage.getItem("access-token");
  return isLoggeIn ? <Navigate to="/" /> : children;
};
