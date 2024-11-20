import React from "react";
import { useNavigate } from "react-router-dom";
import Verificacion from "../../../assets/Imagenes/Verificacion.png";
import { Parrafos } from "../Texto";
import { Boton } from "../Boton";

export function ModalVerificado() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <main
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-9999" // Asegura la posición superior
        aria-modal="true"
        role="dialog"
      >
        <section className="bg-ColorFondo h-full w-full md:w-4/12 rounded-3xl flex justify-center items-center shadow-lg">
          <section className="bg-white h-full w-full flex justify-center p-4 rounded-3xl">
            <fieldset>
              <div className="flex justify-center">
                <img className="w-1/2" src={Verificacion} alt="DoctorModal" />
              </div>
              <div className="p-10 text-center">
                <Parrafos textoParrafo="Tus Datos Se Guardaron Exitosamente Gracias!" />
              </div>
              <div className="text-center">
                <Boton textoBoton="Iniciar Sesion" onClick={handleNavigate} />
              </div>
            </fieldset>
          </section>
        </section>
      </main>
    </>
  );
}
