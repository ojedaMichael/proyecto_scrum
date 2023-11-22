
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from "./componentes/Login/login.jsx"
=======
import Login from "./componentes/Login/Login.jsx"

>>>>>>> f99a519c5b9e2e6cb7f0cbea50e4ca06ff640d2f
import Dashboard from "./componentes/dashboard/Dashboard.jsx";
import Empresas from './componentes/empresas/Empresas.jsx';
import Form from './componentes/prueba.axios/Form.jsx';

function App() {

  return (
    <>

     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/empresas" element={<Empresas/>}/>

      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
