import axios from "axios";
import { useEffect, useState } from "react";

const Borrar = () => {
  const [numero, setNumero] = useState("1");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/empresas/${numero}`);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };
    getData();
  }, [numero]);

  const handleClick = (e) => {
    const number = e.target.value;
    setNumero(number);
  };

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 m-6">
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="1">1</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="2">2</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="3">3</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="4">4</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="5">5</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="6">6</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="7">7</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="8">8</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="9">9</button>
      <button className="p-2 bg-sky-700 rounded-md hover:bg-sky-600" onClick={handleClick} value="10">10</button>
    </div>
  );
};

export default Borrar;