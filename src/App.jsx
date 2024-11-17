import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ComponenteRegistro } from "./Componentes/Registro/ComponenteRegistro/ComponenteRegistro";
import { ComponenteRegistroPaciente } from "./Componentes/RegistroPaciente/ComponenteRegistroPaciente/ComponenteRegistroPaciente";
import { ComponenteSesion } from "./Componentes/InicioDeSesion/ComponenteSesion/ComponenteSesion";
import { ComponentePaginaDeInicio } from "./Componentes/PaginaDeInicio/ComponentePaginaDeInicio/ComponentePaginaDeInicio";
import { ComponenteDatosPaciente } from "./Componentes/DatosPaciente/ComponenteDatosPaciente/ComponenteDatosPaciente";
import { EditarDatosPaciente } from "./Componentes/DatosPaciente/EditarDatosPaciente/EditarDatosPaciente";




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