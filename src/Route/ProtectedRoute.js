import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedLoginRegisterRoute = ({ children }) => {
  const isLoggeIn = localStorage.getItem("access-token");
  return isLoggeIn ? <Navigate to="/" /> : children;
};
