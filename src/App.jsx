import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ComponenteRegistro } from "./Componentes/Registro/ComponenteRegistro/ComponenteRegistro";
import { ComponenteRegistroPaciente } from "./Componentes/RegistroPaciente/ComponenteRegistroPaciente/ComponenteRegistroPaciente";
import { ComponenteSesion } from "./Componentes/InicioDeSesion/ComponenteSesion/ComponenteSesion";
import { ComponentePaginaDeInicio } from "./Componentes/PaginaDeInicio/ComponentePaginaDeInicio/ComponentePaginaDeInicio";



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