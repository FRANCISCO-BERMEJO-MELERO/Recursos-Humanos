import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import "./index.css";
import Navegacion from "./plantilla/navegacion";
import Agregarempleado from "./empleados/agregarempleado";
import EditarEmpleado from "./empleados/editarEmpleado";
import Footer from "./plantilla/footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <BrowserRouter>
        <Navegacion/>
        <div className="flex-grow mx-auto px-4 py-8 w-full max-w-screen-lg mt-20">
          <div className="rounded-lg overflow-hidden h-full">
            <Routes>
              <Route exact path="/" element={<ListadoEmpleados/>} />
              <Route exact path="/agregar" element={<Agregarempleado/>}/>
              <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
              {/* Añadir rutas para otros componentes */}
            </Routes>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
