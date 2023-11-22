import React from 'react'

function personas(){
    return (
        <div>
          <div class="bg-slate-700 h-screen w-20 lg:w-40 fixed" >
            <div class="flex justify-between border-b-white" > 
                <div>
                    <h3 class="text-white m-4 my-6" > Bolsa de Trabajo </h3>
                </div> 
            </div>
        <hr />
            <div>
                <h2 class="text-white mx-4 m-4 " >Administrador </h2>
    
            </div>
<hr />
            <div>
                <div class=" flex justify-center text-[20px] text-white  my-5" >
                    Opciones
                </div>

                <div class="flex flex-col m-5 text-[12px] text-white  " >
                <a href="#">   Registrar Prospectos </a> 
                <a href="#">   Todos los prospectos </a>
   
                </div>
            </div>
        </div>    

        <div class="flex flex-col h-screen w-full pl-20 lg:pl-40" >
       
            <header class="bg-white p-3">
                <div class="flex justify-between mx-5">
                    <div>
                        Home
                    </div>

                    <div class="relative inline-block text-left " id="userDropdown">
                        <div onclick="toggleDropdown()" class="cursor-pointer flex items-center">
                            Manuel Donado
                        </div>
                        <div id="" class="dropdown hidden mt-0 w-40 absolute right-0 ">
                            <div class="bg-white rounded-lg shadow-lg flex flex-col text-[14px]">
                                <a href="#" class="block px-4 py-2 mx-4 text-gray-800"> Perfil</a>
                                <a href="#" class="block px-4 py-2 mx-4 text-gray-800">  Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="bg-white flex-grow p-4" >
            Prospetos

            <div  class="w-[55%] bg-white m-8 " >
                <h3 class="p-5"  >Información de los Prospectos</h3>
                <p class=" p-5" >
                    Seleccione la acción  que quieras realizar en las pestañas del menu de la izquierda.
                </p>
            </div>
        </div>
            

    </div  >
        </div>
    )
}

export default personas