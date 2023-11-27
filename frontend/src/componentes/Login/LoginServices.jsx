import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function LoginServices() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
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
      navigate("/dashboard", { replace: true })
      setUser(response.data.user)
      console.log("Respuesta del servidor:", response.data.user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data);
    }
  };

  return { handleInputChange, handleLogin, user};
}
export default LoginServices;
