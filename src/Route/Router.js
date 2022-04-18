import {
  Home,
  Login,
  Register,
  Pizza,
  Fastfood,
  Dishes,
  Drinks,
} from "Components/Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedLoginRegisterRoute } from "./ProtectedRoute";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <ProtectedLoginRegisterRoute>
            <Login />
          </ProtectedLoginRegisterRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedLoginRegisterRoute>
            <Register />
          </ProtectedLoginRegisterRoute>
        }
      />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/fastfood" element={<Fastfood />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/drinks" element={<Drinks />} />
    </Routes>
  );
};

export default MainRouter;
