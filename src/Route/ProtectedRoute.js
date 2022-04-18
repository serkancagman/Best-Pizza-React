import React from "react";
import { Navigate } from "react-router-dom";
import { ShopCartContext } from "Context/ShopCartContext";
export const ProtectedLoginRegisterRoute = ({ children }) => {
  const isLoggeIn = localStorage.getItem("access-token");
  return isLoggeIn ? <Navigate to="/" /> : children;
};

export const ProtectedCartRoute = ({ children }) => {
    const {cart} = React.useContext(ShopCartContext);
  return cart.length > 0  ? children : <Navigate to="/" />;
};
