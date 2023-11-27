import { useState,useEffect } from "react";
import axios from 'axios';
import { FiArrowLeft } from "react-icons/fi";
import { CiSearch,CiCircleChevDown,CiMenuBurger,CiPaperplane,CiViewList,CiLogout,CiUser,CiHome,} from "react-icons/ci";
import { BsFileEarmarkPerson,  BsHouses } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


<<<<<<< HEAD
function personas() {

=======
function Personas() {
  const [numero, setNumero] = useState("");
  const [id, setId] = useState("");
>>>>>>> 7828b2272b6a8197eb2c570100465d8a1db3a540
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [datos, setDatos] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
<<<<<<< HEAD

=======
  const [isOpenRegistrer, setIsOpenRegistrer] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
>>>>>>> 7828b2272b6a8197eb2c570100465d8a1db3a540
 
 
  const Menu = [
    { link: "/dashboard", title: <Link to="/dashboard">Dashboard</Link>, icon: <CiHome /> },
    { title: "Perfil", icon:<CiUser /> },
    {
      link: "/empresas",
      title: <Link to="/empresas">Empresas</Link>,
      icon:<BsHouses />,
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
      icon:<BsFileEarmarkPerson />,
    },
    {
      link: "/personas",
      title: <Link to="/personas">LogOut</Link>,
      icon: <CiLogout />
    },
  ];

<<<<<<< HEAD
  useEffect(() => {
    async function fetchData() {
=======

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    telefono: '',
    password: ''
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await axios.put(`http://127.0.0.1:8000/api/personas/${id}`, formData)
        alert(response.data)
        setUpdateTable(true);
        
    } catch (error) {
        console.error('error al enviar solicitud:', error)
    }
}

const handleRegistrer = async (e) => {

  e.preventDefault();
  
  try {

      const response = await axios.post('http://127.0.0.1:8000/api/personas/', formData)
      alert(response.data)
      setUpdateTable(true);
  } catch (error) {
      console.error('error al enviar solicitud:', error)
  }
}

  useEffect(() => {
    const getDataId = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/personas/${id}`);
        console.log(response.data);
        
        setFormData({
          nombre: response.data?.nombre || '',
          apellido: response.data?.apellido || '',
          email: response.data?.email || '',
          dni: response.data?.dni || '',
          telefono: response.data?.telefono || '',
          password: response.data?.password || ''
          });
    } catch (error) {
        console.error('Error al obtener datos de la API para editar', error);
    }
    };
    getDataId();
  }, [id]);


  useEffect(() => {
    const fetchData = async () => {
>>>>>>> 7828b2272b6a8197eb2c570100465d8a1db3a540
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/personas'); // Realiza la solicitud GET para obtener datos
        setDatos(response.data); // Establece los datos en el estado
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData(); 
  }, []); 






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
          <CiShop className={` bg-amber-300 text-4xl rounded
            cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
            <h1 className={`text-white origin-right font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
            Job Board
            </h1>
        </div>
        <div className={`flex items-center rounded-md bg-slate-700 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`} >
        <CiSearch  className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"} `}/>
        <input type={"search"} placeholder="search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>
        <ul className="pt-2">
          {Menu.map((menu,index)=>
          <>
          <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md ${menu.spacing ? "mt-9 ": "mt-2"} `}>
            <span className="text-2xl block float-left">
            {menu.icon ? menu.icon : <MdSpaceDashboard />}
            </span>
            <span  className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}
            </span>
            <span>
                {menu.submenu && open &&(
                    <CiCircleChevDown  className={`${setSubmenuOpen && "rotate-180"}`} onClick={()=>
                        setSubmenuOpen(!submenuOpen)
                    }/>
                )}
            </span>
          </li>
            {menu.submenu && submenuOpen&& open &&(
                <ul>
                    {menu.submenuItems.map((submenuItems,index)=>(
                        <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-700 rounded-md">
                            {submenuItems.title}
                        </li>
                    ))}
                </ul>
            )}
          </>
          )}
        </ul>
      </div>


      <div className="p-7">
        <h1 className="text-2x1 font-semibold">Home page</h1>     
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
                  Nombre:
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Apellido:
                </th>
                <th scope="col" className="px-6 py-3">
                  Email:
                </th>
                <th scope="col" className="px-6 py-3">
                  DNI:
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefono:
                </th>
                <th scope="col" className="px-6 py-3">
                  Password:
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato, index) => (
                <tr
                  key={index}
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
                    {dato.nombre}
                  </th>
                  <td className="px-6 py-4">{dato.apellido}</td>
                  <td className="px-6 py-4">{dato.email}</td>
                  <td className="px-6 py-4">{dato.dni}</td>
                  <td className="px-6 py-4">{dato.telefono}</td>
                  <td className="px-6 py-4">{dato.password}</td>
                  <td className="px-6 py-4 flex">
                    <button
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline p-1"
                      onClick={(e) => [ 
                        handleClick(e),
                        setIsOpen(true)
                        
                      ]}
                      value={dato.id}
                    >
                      Edit
                    </button>
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
      {isOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
       <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 border-2 img_glow ">
         <div>
           <form onSubmit={handleSubmit} className="max-w-md mx-auto">
             <div className="relative z-0 w-full mb-5 group">
               <input
                 type="text"
                 name="nombre"
                 id="nombre"
                 value={formData.nombre}
                 onChange={handleChange}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" "
                 required
               />
               <label
               
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                 Nombre
               </label>
             </div>
             <div className="relative z-0 w-full mb-5 group">
               <input
                 type="text"
                 name="apellido"
                 id="apellido"
                 value={formData.apellido}
                 onChange={handleChange}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" "
                 required
               />
               <label
                
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                 apellido
               </label>
             </div>
             <div className="relative z-0 w-full mb-5 group">
               <input
                 type="text"
                 name="email"
                 id="email"
                 value={formData.email}
                 onChange={handleChange}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" "
                 required
               />
               <label
                 
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                 Email
               </label>
             </div>
             <div className="relative z-0 w-full mb-5 group">
               <input
                 type="text"
                 name="password"
                 id="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" "
                 required
               />
               <label
                 
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                 Password
               </label>
             </div>
             <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-5 group">
                 <input
                   type="text"
                   name="dni"
                   id="dni"
                   value={formData.dni}
                   onChange={handleChange}
                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" "
                   required
                 />
                 <label
                   
                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                 >
                   dni
                 </label>
               </div>
               <div className="relative z-0 w-full mb-5 group">
                 <input
                   type="text"
                   name="telefono"
                   id="telefono"
                   value={formData.telefono}
                   onChange={handleChange}
                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" "
                   required
                 />
                 <label
                   
                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                 >
                   telefono
                 </label>
               </div>
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
           onClick={() => setIsOpen(false)}
           className="bg-red-500 p-2 rounded-md text-white"
         >
           cerrar
         </button>
       </div>
     </div>
      )}

        {isOpenRegistrer && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 border-2 img_glow ">
            <div>
              <form onSubmit={handleRegistrer} className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                  
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                   
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    apellido
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
               <input
                 type="text"
                 name="password"
                 id="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" "
                 required
               />
               <label
                 
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                 Password
               </label>
             </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="dni"
                      id="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      dni
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="telefono"
                      id="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      telefono
                    </label>
                  </div>
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

export default Personas;
