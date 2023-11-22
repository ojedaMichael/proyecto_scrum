import { useState,useEffect } from "react";
import axios from 'axios';
import { FiArrowLeft } from "react-icons/fi";
import { CiSearch,CiCircleChevDown,CiMenuBurger,CiPaperplane,CiViewList,CiLogout } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
function empresas() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    { link: "/dashboard", title: <Link to="/dashboard">Dashboard</Link> },
    { title: "Empresa", icon:<CiMenuBurger /> },
    { title: "Media", icon:<CiPaperplane />, spacing:true },
    {
    title: "Projects",icon:<CiViewList />,
    submenu: true,
    submenuItems: [
    { title: "Submenu 1" },
    { title: "Submenu 2" },
    { title: "Submenu 3" },
   
      ],
   },
    { title: "Analytics" },
    { title: "Inbox" },
    { title: "Profile", spacing:true },
    { title: "Setting" },
    {title: "Logout",icon:<CiLogout /> },
  ];
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/empresas');
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

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
                logo empresa
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
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"></input>
            </>
            
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <>
                      <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                      </>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    rubro
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    rift
                </th>
                <th scope="col" class="px-6 py-3">
                    telefono
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
  {datos.map((dato) => (
    <tr key={dato.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id={`checkbox-table-search-${dato.id}`}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={`checkbox-table-search-${dato.id}`} className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {dato.nombre}
      </th>
      <td className="px-6 py-4">{dato.rubro}</td>
      <td className="px-6 py-4">{dato.email}</td>
      <td className="px-6 py-4">{dato.rif}</td>
      <td className="px-6 py-4">{dato.telefono}</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit
        </a>
        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
          Remove
        </a>
      </td>
    </tr>
  ))}
</tbody>

    </table>
</div>
      </div>    
    </div>
  );
}

export default empresas;
