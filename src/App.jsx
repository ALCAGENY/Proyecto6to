import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ComponenteRegistro } from "./Componentes/Registro/ComponenteRegistro/ComponenteRegistro";
import { ComponenteRegistroPaciente } from "./Componentes/RegistroPaciente/ComponenteRegistroPaciente/ComponenteRegistroPaciente";
import { ComponenteSesion } from "./Componentes/InicioDeSesion/ComponenteSesion/ComponenteSesion";
import { ComponentePaginaDeInicio } from "./Componentes/PaginaDeInicio/ComponentePaginaDeInicio/ComponentePaginaDeInicio";
import { ComponenteDatosPaciente } from "./Componentes/DatosPaciente/ComponenteDatosPaciente/ComponenteDatosPaciente";
import { EditarDatosPaciente } from "./Componentes/DatosPaciente/EditarDatosPaciente/EditarDatosPaciente";
import { EditarDatosFamiliar } from "./Componentes/DatosPaciente/EditarDatosFamiliar/EditarDatosFamiliar";
import { ComponenteDatosDoctor } from "./Componentes/DatosDoctor/ComponenteDatosDoctor/ComponenteDatosDoctor";
import { ComponenteHistorial } from "./Componentes/Historial/ComponenteHistorial";
Ñ

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponenteSesion/>
  },
  {
    path: '/Registro',
    element: <ComponenteRegistro/>
  },
  {
    path: '/RegistroPaciente',
    element: <ComponenteRegistroPaciente/>
  },
  {
    path: '/Inicio',
    element: <ComponentePaginaDeInicio/>
  },
  {
    path: '/DatosPaciente',
    element: <ComponenteDatosPaciente/>
  },
  {
    path: '/EditarDatosPaciente',
    element: <EditarDatosPaciente />
  },
  {
    path: '/EditarDatosFamiliar',
    element: <EditarDatosFamiliar />
  },
  {
    path: '/DatosDoctor',
    element: <ComponenteDatosDoctor />
  },
  {
    path: '/Historial',
    element: <ComponenteHistorial />
  }

 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;   