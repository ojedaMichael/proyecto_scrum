import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useUser } from './UserContext';
import axios from "axios";
function LoginServices() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { updateUser } = useUser();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
    console.log(login);
  };
  const navigate = useNavigate();
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = login.email;
      const response = await axios.get(
        `http://127.0.0.1:8000/api/login?email=${email}`
      );
      if (response.data) {
        if (
          response.data[0].email === login.email &&
          response.data[0].password === login.password
        ) {
            
            navigate('/dashboard', { replace: true })
            setAcceso(true);
        } else {
          console.log("Email/Password Incorrecto");
        }
      } else {
        console.log("Email/Password Incorrecto");
      }
    } catch (error) {
      console.error("error al enviar solicitud:", error);
    }
    console.log("Datos de login:", login);
  };*/
   // eslint-disable-next-line no-unused-vars
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = login.email;
    const password = login.password;
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      updateUser(response.data.user);
      if (response.data.success) {
        navigate('/dashboard',{ replace: true }); // Ajusta la ruta según tu configuración
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data);
    }
  };

  const LogoutButton = () => {
    console.log('hola');
    const handleLogout = async () => { 
      try {
        await axios.post('http://127.0.0.1:8000/api/logout');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };
    handleLogout();
  };
  return { handleInputChange, handleLogin};
}
export default LoginServices;
