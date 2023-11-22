import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login/Login.jsx";
import Dashboard from "./componentes/dashboard/Dashboard.jsx";
import Empresas from './componentes/empresas/Empresas.jsx';

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
  );
}

export default App;
