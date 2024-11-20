import React from "react";
import { useNavigate } from "react-router-dom";
import DoctorModal from "../../../assets/Imagenes/DoctorModal.png";
import { Parrafos } from "../Texto";
import { Boton } from "../Boton";


export function ModalRe(){
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/RegistroPaciente");
    };
  
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4" aria-modal="true" role="dialog">
        <section className="bg-ColorFondo h-3/4 w-4/12 rounded-3xl flex justify-center items-center">
          <section className="bg-white h-4/5 w-4/5 flex justify-center p-4 rounded-3xl">
            <fieldset>
              <div className="flex justify-center">
                <img className="w-1/2" src={DoctorModal} alt="DoctorModal" />
              </div>
              <div className="p-10 text-center">
                <Parrafos textoParrafo="Para continuar, necesitamos que completes tus datos, agrega tus datos antes de continuar." />
              </div>
              <div className="text-center">
                <Boton
                  textoBoton="Agregar"
                  onClick={handleNavigate}
                  className="btn-fondoFuerte"
                />
              </div>
            </fieldset>
          </section>
        </section>
      </main>
    );
}