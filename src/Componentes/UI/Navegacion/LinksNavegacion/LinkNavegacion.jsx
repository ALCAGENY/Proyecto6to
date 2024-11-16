import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faUser, faUserMd, faHistory, faBook } from "@fortawesome/free-solid-svg-icons";
import { Boton } from "../../Boton";

export function LinkNavegacion() {
    return (
        <>
            <section className="">
                <ul>
                    <li className="mb-5">
                        <a href="/Inicio" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faHome} className="text-lg mr-2" /> 
                            Inicio
                        </a>
                    </li>
                    <li className="mb-5">
                        <a href="/Monitoreos" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faChartBar} className="text-lg mr-2" /> 
                            Monitoreos
                        </a>
                    </li>
                    <li className="mb-5">
                        <a href="/DatosPaciente" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faUser} className="text-lg mr-2" /> 
                            Datos Paciente
                        </a>
                    </li>
                    <li className="mb-5">
                        <a href="/DatosDoctor" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faUserMd} className="text-lg mr-2" /> 
                            Datos Doctor
                        </a>
                    </li>
                    <li className="mb-5">
                        <a href="/Historial" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faHistory} className="text-lg mr-2" /> 
                            Historial
                        </a>
                    </li>
                    <li className="mb-5">
                        <a href="/GuiaUsuario" className="relative group bg-white flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded-md p-4 transform transition-transform duration-300 hover:scale-105">
                            <FontAwesomeIcon icon={faBook} className="text-lg mr-2" /> 
                            Guia de Usuario
                        </a>
                    </li>
                    <div className="mt-8 text-center">
                        <Boton className="bg-white hover:bg-gray-100" textoBoton="Cerrar Sesion" />
                    </div>
                </ul>
            </section>
        </>
    );
}
