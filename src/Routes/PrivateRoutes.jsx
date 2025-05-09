import React from "react";
import { Route, Routes } from "react-router-dom";
import AjustesUser from "../Pages/AjustesUser/AjustesUser";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/Ajustes" element={<AjustesUser />} />
    </Routes>
  );
};

export default PrivateRoutes;
