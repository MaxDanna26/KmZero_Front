import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default PublicRoutes;
