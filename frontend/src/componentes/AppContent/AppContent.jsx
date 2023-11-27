import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../Login/login.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Empresas from "../empresas/Empresas.jsx";
import Personas from "../Personas/personas.jsx";
import Empleos from "../empleos/Empleos.jsx";
import Perfil from "../Perfil/Perfil.jsx";
import { useUser } from "../Login/UserContext.jsx";
const AppContent = () => {
  const { user } = useUser();
  return (
    <div>
      {/* Puedes incluir aquí un encabezado común para toda la aplicación, por ejemplo */}
      <header>
        <h1>Mi Aplicación</h1>
      </header>

      {/* Aquí utilizamos el enrutamiento para definir qué componente renderizar */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/perfil"
            element={user ? <Perfil /> : <Navigate to="/" />}
          />
          <Route
            path="/empresas"
            element={user ? <Empresas /> : <Navigate to="/" />}
          />
          <Route
            path="/personas"
            element={user ? <Personas /> : <Navigate to="/" />}
          />
          <Route
            path="/empleos"
            element={user ? <Empleos /> : <Navigate to="/" />}
          />
           <Route
            path="/logout"
            element={user ? <Empleos /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppContent;
