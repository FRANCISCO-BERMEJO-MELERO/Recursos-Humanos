import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import "./index.css";
import Navegacion from "./plantilla/navegacion";
import Agregarempleado from "./empleados/agregarempleado";
import EditarEmpleado from "./empleados/editarEmpleado";
import Footer from "./plantilla/footer";
function App() {
  return (
    <div className=" bg-gradient-to-r from-blue-400 to-purple-500 h-screen">
      <BrowserRouter>
        <Navegacion/>
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
            <Routes>
              <Route exact path="/" element={<ListadoEmpleados/>} />
              <Route exact path="/agregar" element={<Agregarempleado/>}/>
              <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
              {/* Añadir rutas para otros componentes */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
