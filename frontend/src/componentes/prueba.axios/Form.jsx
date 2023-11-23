import { useState } from "react";
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        rubro: '',
        email: '',
        rif: '',
        telefono: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/empresas/12')
            console.log(response.data)
            
        } catch (error) {
            console.error('error al enviar solicitud:', error)
        }
    }
  return (
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
  )
}

export default Form