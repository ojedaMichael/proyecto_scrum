import axios from "axios";
import { useEffect, useState } from "react";

const Editar = () => {
  const [numero, setNumero] = useState("1");
  const [data, setData] = useState('{}')
 
  const [formData, setFormData] = useState({
    nombre: data.nombre || '',
    rubro: data.rubro || '',
    email: data.email || '',
    rif: data.rif || '',
    telefono: data.telefono || ''
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.put(`http://127.0.0.1:8000/api/empresas/${numero}`, formData)
                console.log(response.data)
            
        } catch (error) {
            console.error('error al enviar solicitud:', error)
        }
    }
    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/empresas/${numero}`);
            setData(response.data);
            setFormData({
                nombre: response.data.nombre || '',
                rubro: response.data.rubro || '',
                email: response.data.email || '',
                rif: response.data.rif || '',
                telefono: response.data.telefono || ''
              });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

  return (
    <>
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


 <form onSubmit={handleSubmit}>
        <label>
            nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
        </label>
        <br />
        <label>
            rubro:
            <input type="text" name="rubro" value={formData.rubro} onChange={handleChange}/>
        </label>
        <br />
        <label>
            email:
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
        </label>
        <br />
        <label>
            rif:
            <input type="text" name="rif" value={formData.rif} onChange={handleChange}/>
        </label>
        <br />
        <label>
            telefono:
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
        </label>
        <br />

       
        <button type="submit">Enviar</button>
    </form>
    </>
  );
};

export default Editar;