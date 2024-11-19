import { useState } from "react";
import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { AgregarDatosDoctor } from "../AgregarDatosDoctor/AgregarDatosDoctor";
import { FormularioDatosDactor } from "../FormularioDatosDoctor/FormularioDatosDoctor";
import { EditarDatosDoctor } from "../EditarDatosDoctor/EditarDatosDoctor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function ComponenteDatosDoctor() {
  const navigate = useNavigate();
  const [mostrarComponente, setMostrarComponente] = useState(null);

  const handleAgregarDoctor = () => {
    setMostrarComponente("agregar");
  };

  const handleEditarDatosDoctor = () => {
    setMostrarComponente("editar");
  };

  return (
    <>
      <main className="h-full w-full flex flex-col md:flex-row">
        <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
          <nav className="w-full h-full">
            <ComponenteNavegacion />
          </nav>
        </section>

        <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
          <fieldset className="w-full h-full">
            <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
              <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
                <FontAwesomeIcon icon={faUserMd} className="text-lg mr-2" />
                Agregar Doctor
                <button
                  className="ml-3 text-blue-500 hover:text-blue-700 transform transition-transform duration-400 hover:scale-105"
                  onClick={handleAgregarDoctor}
                >
                  <FontAwesomeIcon icon={faEdit} className="ml-1" />
                  Agregar
                </button>
              </fieldset>
              <div className="w-px bg-gray-300 mx-4"></div>
              <fieldset className="w-full flex items-center justify-center bg-white animate-fade animate-duration-[3000ms]">
                <FontAwesomeIcon icon={faUserMd} className="text-lg mr-2" />
                Datos Doctor
                <button
                  className="ml-3 text-blue-500 hover:text-blue-700 transform transition-transform duration-400 hover:scale-105"
                  onClick={handleEditarDatosDoctor}
                >
                  <FontAwesomeIcon icon={faEdit} className="ml-1 " />
                  Editar
                </button>
              </fieldset>
            </section>

            <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms]">
              <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                {mostrarComponente === "agregar" && <AgregarDatosDoctor />}
                {mostrarComponente === "editar" && <EditarDatosDoctor />}
              </fieldset>
              <div className="w-px bg-gray-300 mx-4"></div>
              <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                <FormularioDatosDactor />
              </fieldset>
            </section>
          </fieldset>
        </section>
      </main>
    </>
  );
}
