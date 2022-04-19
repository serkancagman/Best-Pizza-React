import React from "react";
import { Navigate } from "react-router-dom";
import { ShopCartContext } from "Context/ShopCartContext";
import { UserContext } from "Context/UserContext";
export const ProtectedLoginRegisterRoute = ({ children }) => {
  const { user } = React.useContext(UserContext);
  return user ? <Navigate to="/" /> : children;
};

export const ProtectedCartRoute = ({ children }) => {
  const { cart, orderStep, processStepIndex } =
    React.useContext(ShopCartContext);
  const { user } = React.useContext(UserContext);
  if (cart.length > 0 && user) {
    return children;
  } else if (cart.length > 0 && !user) {
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/" />;
  }
};
