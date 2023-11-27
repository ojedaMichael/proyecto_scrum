import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import React from "react";
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
import { useUser } from '../Login/UserContext';
/*import LoginServices from "../Login/LoginServices";*/
function Perfil() {
  const { user } = useUser();
  /*const { user } = LoginServices();*/
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    { link: "/dashboard", title: <Link to="/dashboard">Dashboard</Link> },
    { title: "Perfil", icon: <CiMenuBurger /> },
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
      title: "Log_Out",
      icon: <CiLogout />,
      onClick: console.log("hola"),
    },
  ];
  return (
    <>
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
              <React.Fragment key={index}>
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
                    <ul key={`submenu-${menu.title}`}>
                      {menu.submenuItems.map((submenuItems, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-700 rounded-md"
                        >
                          {submenuItems.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="p-4 sm:ml-64">
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex  flex-col items-center justify-start rounded bg-gray-50 h-20 dark:bg-gray-800">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                PERFIL
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                EDITA TU PERFIL
              </p>
            </div>
          </div>
            <form className=" mt-[70px] max-w-md mx-auto ">
            {user && (
              <>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  defaultValue={user.email}
                />
                {console.log(user)}
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                ></label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  defaultValue={"********"}
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  defaultValue={"********"}
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    defaultValue={user.nombre}
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    defaultValue={user.apellido}
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    defaultValue={user.telefono}
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    defaultValue={user.dni}
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    dni
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Actualizar
              </button>
              </>
              )}
            </form>
        </div>
      </div>
    </>
  );
}

export default Perfil;
