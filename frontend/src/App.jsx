
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./componentes/Login/Login.jsx"
import Form from './componentes/prueba.axios/Form.jsx';
function App() {

  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
