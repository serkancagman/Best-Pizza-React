import { Home, Login, Register } from "Components/Pages";
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
    </Routes>
  );
};

export default MainRouter;
