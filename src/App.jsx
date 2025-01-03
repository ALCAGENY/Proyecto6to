import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ComponenteRegistro } from "./Componentes/Registro/ComponenteRegistro/ComponenteRegistro";
import { ComponenteRegistroPaciente } from "./Componentes/RegistroPaciente/ComponenteRegistroPaciente/ComponenteRegistroPaciente";
import { ComponenteSesion } from "./Componentes/InicioDeSesion/ComponenteSesion/ComponenteSesion";
import { ComponenteMonitoreo } from "./Componentes/Monitero/ComponentePaginaDeInicio/ComponenteMonitoreo";
import { ComponenteDatosPaciente } from "./Componentes/DatosPaciente/ComponenteDatosPaciente/ComponenteDatosPaciente";
import { EditarDatosPaciente } from "./Componentes/DatosPaciente/EditarDatosPaciente/EditarDatosPaciente";
import { EditarDatosFamiliar } from "./Componentes/DatosPaciente/EditarDatosFamiliar/EditarDatosFamiliar";
import { ComponenteDatosDoctor } from "./Componentes/DatosDoctor/ComponenteDatosDoctor/ComponenteDatosDoctor";
import { ComponenteDatosProbabilisticos } from "./Componentes/DatosProbabilisticos/ComponenteDatosProbabilisticos/ComponenteDatosProbabilisticos";
import { ModalDePregunta } from "./Componentes/UI/Modal/ModalDePregunta";
import { ComponenteHistorial } from "./Componentes/Historial/ComponenteHistorial";
import { ModalRe } from "./Componentes/UI/Modal/ModalRe";


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
    path: '/Monitoreos',
    element: <ComponenteMonitoreo/>
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
  },
  {
    path: '/DatosProbabilisticos',
    element: <ComponenteDatosProbabilisticos />
  },
  {
    path: '/ModalVerificado',
    element: <ModalRe/>
  },
  {
    path: '/Pregunta',
    element: <ModalDePregunta/>
  },
  

 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;   