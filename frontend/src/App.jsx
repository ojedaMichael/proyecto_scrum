import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login/login.jsx";
import Dashboard from "./componentes/dashboard/Dashboard.jsx";
import Empresas from "./componentes/empresas/Empresas.jsx";
import Personas from "./componentes/Personas/personas";
import Empleos from "./componentes/empleos/Empleos.jsx";
import SkillsModal from "./componentes/vistamodal/SkillsModal.jsx";
import React, { useState } from 'react';
import Vistamodals from "./componentes/vistamodals/Vistamodals.jsx";
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/empleos" element={<Empleos />} />
          <Route path="/vistamodals" element={<Vistamodals />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
