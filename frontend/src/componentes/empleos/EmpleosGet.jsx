import { useState, useEffect } from "react";
import axios from "axios";

function EmpleosGet() {
  const [empleosdelete, setEmpleosDelete] = useState(null);
 const [id, setId] = useState("");

 useEffect(() => {
  const deleteData = async () => {
    try {
      console.log(id);
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/empleos/${id}`
      );
      alert(response.data);
      setEmpleosDelete(true);
    } catch (error) {
      console.error("error al enviar solicitud:", error);
    }
  };
  deleteData()
}, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idBorrar = e.target.value;
    setId(idBorrar);
  };

  return { empleosdelete, handleSubmit };
}
export default EmpleosGet;
