import { useState, useEffect } from "react";
import axios from "axios";

function EmpleosGet() {
  const [empleosData, setEmpleosData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/empleos");
        setEmpleosData(response.data);
      } catch (error) {
        console.error("error al enviar solicitud:", error);
      }
    };
    getData();
  }, []);

  const deleteData = async (idBorrar) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/empleos/${idBorrar}`
      );
      console.log(response.data);
      const response2 = await axios.get("http://127.0.0.1:8000/api/empleos");
        setEmpleosData(response2.data);
    } catch (error) {
      console.error("error al enviar solicitud:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const idBorrar = e.target[1].value;
    console.log(e);
      deleteData(idBorrar);
  };

  return { empleosData, handleSubmit };
}
export default EmpleosGet;
