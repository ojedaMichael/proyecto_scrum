import { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowLeft } from "react-icons/fi";
import {
  CiSearch,
  CiCircleChevDown,
  CiMenuBurger,
  CiPaperplane,
  CiViewList,
  CiLogout,
} from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import LogOut from "../Login/LogOut";

function Postulacion() {
  const { LogoutButton } = LogOut();
  const [numero, setNumero] = useState("");
  
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [datos, setDatos] = useState([]);
  const [empleosData, setEmpleosData] = useState(null);
  const [personasData, setPersonasData] = useState(null);
  const [isOpenRegistrer, setIsOpenRegistrer] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const Menu = [
    { link: "/dashboard", title: <Link to="/dashboard">Dashboard</Link> },
    {
      link: "/perfil",
      title: <Link to="/perfil">Perfil</Link>,
      icon: <CiMenuBurger />,
    },
    {
      link: "/empresas",
      title: <Link to="/empresas">Empresas</Link>,
      icon: <CiPaperplane />,
      spacing: true,
    },
    {
      link: "/empleos",
      title: <Link to="/empleos">Empleos</Link>,
      icon: <CiViewList />,
    },
    {
      link: "/personas",
      title: <Link to="/personas">Personas</Link>,
      icon: <CiViewList />,
    },
    {
      link: "/postulaciones",
      title: <Link to="/postulaciones">Postulaciones</Link>,
      icon: <CiViewList />,
    },
  ];

  const [formData, setFormData] = useState({
    id_persona: "", 
    id_empleo: ""
  });

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/personas");
        setPersonasData(response.data);
        
      } catch (error) {
        console.error("error al enviar solicitud:", error);
      }
    };
    getData();
  }, []);
 

  const handleRegistrer = async (e) => {

    e.preventDefault();
    
    try {
  
        const response = await axios.post('http://127.0.0.1:8000/api/postulaciones/', formData)
        alert(response.data)
        setUpdateTable(true);
    } catch (error) {
        console.error('error al enviar solicitud:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/postulaciones"
        );
       
        setDatos(response.data);
        setUpdateTable(false);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      }
    };

    fetchData();
  }, [numero, updateTable]);

  useEffect(() => {
    const deleteData = async () => {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/postulaciones/${numero}`
        );
        alert(response.data);
        setUpdateTable(true);
      } catch (error) {
        console.error("Error al borrar de la API", error);
      }
    };
    deleteData();
  }, [numero]);

  const handleDelete = (e) => {
    const number = e.target.value;
    setNumero(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
     
    }));
    console.log(formData);
  };
  return (
    <div className="flex">
      <div
        className={`bg-gray-900 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <FiArrowLeft
          className={`bg-white text-gray-900 text-3xl rounded-full absolute -right-3 top-9 border border-gray-900 cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <CiShop
            className={` bg-amber-300 text-4xl rounded
            cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-right font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            logo empresa
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-slate-700 mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <CiSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            } `}
          />
          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menu.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md ${
                  menu.spacing ? "mt-9 " : "mt-2"
                } `}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <MdSpaceDashboard />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                <span>
                  {menu.submenu && open && (
                    <CiCircleChevDown
                      className={`${setSubmenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </span>
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-700 rounded-md"
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
        <li
          className={`text-gray-300 text-sm flex items-center gap-x-4 mt-6 cursor-pointer p-2 hover:bg-slate-700 rounded-md`}
        >
          <span className="text-2xl block float-left">
            <CiLogout />
          </span>
          <button
            onClick={LogoutButton}
            className={`text-left text-base font-medium flex-1 duration-200 ${
              !open && "hidden"
            }`}
          >
            LogOut
          </button>
        </li>
      </div>

      <div className="p-7">
        <h1 className="text-2x1 font-semibold mb-5">Home page</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="pb-4 bg-white dark:bg-gray-900 flex justify-between">
            <label className="sr-only block">Search</label>
            <button onClick={() => setIsOpenRegistrer(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <>
                <input
                  type="text"
                  id="table-search"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                ></input>
              </>
            </div>
          </div>
          <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg max-h-[450px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <>
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                      </>
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cargo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Detalles Empleo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Requisitos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Modalidad
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salario
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Postulante
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {datos.map((dato, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${dato.id}`}
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`checkbox-table-search-${dato.id}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {dato.id_empleo[0]["idEmpresa"]}
                    </th>
                    <td className="px-6 py-4">
                      {dato.id_empleo[0]["cargo"]}
                    </td>
                    <td className="px-6 py-4">
                      {dato.id_empleo[0]["detallesEmpleo"]}
                    </td>
                    <td className="px-6 py-4">
                      {dato.id_empleo[0]["requisitos"]}
                    </td>
                    <td className="px-6 py-4">
                      {dato.id_empleo[0]["modalidad"]}
                    </td>
                    <td className="px-6 py-4">
                      {dato.id_empleo[0]["salario"]}
                    </td>
                    <td className="px-6 py-4">
                      {dato.id_persona[0]["nombre"]} {dato.id_persona[0]["apellido"]}
                    </td>
                    <td className="px-6 py-4 flex">
                      
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline p-1"
                        onClick={handleDelete}
                        value={dato.id}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {isOpenRegistrer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 border-2 img_glow ">
            <div>
            <form onSubmit={handleRegistrer} className="max-w-md mx-auto">
             
            
             <div className="relative z-0 w-full mb-5 group">
             <label >Selecciona el puesto a postular</label>
             <select className="p-3 rounded-md border border-gray-500 hover:border-sky-500 w-full" onChange={handleChange} id="id_empleo" name="id_empleo">
              {empleosData.map((dato, i) => ( 
                     <option key={i}   value={dato.id} >{dato.cargo}</option>
                  ))}
              </select>
             </div>
             <div className="relative z-0 w-full mb-5 group">
              <label >Selecciona la persona que postula</label>
             <select className="p-3 rounded-md border border-gray-500 hover:border-sky-500 w-full"  onChange={handleChange} id="id_persona" name="id_persona">
              {personasData.map((dato, i) => ( 
                     <option key={i}   value={dato.id} >{dato.nombre} {dato.apellido}</option>
                  ))}
              </select>
             </div>
    
             <button
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >
               Guardar
             </button>
           </form>
            </div>
            <button
              onClick={() => setIsOpenRegistrer(false)}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Postulacion;
