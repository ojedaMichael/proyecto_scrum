import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  CiSearch,
  CiCircleChevDown,
  CiMenuBurger,
  CiPaperplane,
  CiViewList,
  CiLogout,
  CiUser,
  CiHome,
} from "react-icons/ci";

import { BsFileEarmarkPerson,  BsHouses } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
function Slidenavs() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
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
          Job Board
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
      </div>

      <div className="p-4 sm:ml-62">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex  flex-col items-center justify-start rounded bg-gray-50 h-20 dark:bg-gray-800">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              DASHBOARD
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Pagina Web para configurar las empresas, personas y empleos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slidenavs;
