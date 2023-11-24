// import React from "react";
import Sidebar from "./Sidebar";

import React, { useState } from "react";

const RegistroEmpleo = () => {
  const [datosEmpleo, setDatosEmpleo] = useState({
    titulo: "",
    descripcion: "",
    requisitos: "",
    ubicacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosEmpleo((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //enviar los datos al backend
    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosEmpleo),
      });

      if (response.ok) {
        console.log('Datos de empleo enviados correctamente al backend');
        
      } else {
        console.error('Error al enviar datos de empleo al backend');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Registro de Empleo</h1>

        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-8">Ingresar datos del Empleo</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-gray-700 font-semibold mb-2"
              >
                Tìtulo del Empleo
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={datosEmpleo.titulo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-gray-700 font-semibold mb-2"
              >
                Descripcion del empleo
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={datosEmpleo.descripcion}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="requisitos"
                className="block text-gray-700 font-semibold mb-2"
              >
                Requisitos del empleo
              </label>
              <textarea
                id="requisitos"
                name="requisitos"
                value={datosEmpleo.requisitos}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ubicacion"
                className="block text-gray-700 font-semibold mb-2"
              >
                Ubicacion del empleo
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                value={datosEmpleo.ubicacion}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Registrar Empleo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroEmpleo;
