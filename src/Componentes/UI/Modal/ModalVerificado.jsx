import React from "react";
import { useNavigate } from "react-router-dom";
import Verificacion from "../../../assets/Imagenes/Verificacion.png"
import { Parrafos } from "../Texto";
import { Boton } from "../Boton";

export function ModalVerificado() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
       <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4" aria-modal="true" role="dialog">
      <section className="bg-ColorFondo h-3/4 w-4/12 rounded-3xl flex justify-center items-center">
        <section className="bg-white h-4/5 w-4/5 flex justify-center p-4 rounded-3xl">
          <fieldset>
            <div className="flex justify-center">
              <img className="w-1/2" src={Verificacion} alt="DoctorModal" />
            </div>
            <div className="p-10 text-center">
              <Parrafos textoParrafo="Tus Datos Se Guardaron Exitosamente Gracias!" />
            </div>
            <div className="text-center">
              <Boton
                textoBoton="Iniciar Sesion"
                onClick={handleNavigate}
              />
            </div>
          </fieldset>
        </section>
      </section>
    </main>
    </>
  );
}
