import React, { useState } from "react";
import DoctorModal from "../../../assets/Imagenes/DoctorModal.png";
import { ModalCrearDatosFamiliar } from "./ModalCrearDatosFamiliar"; // Modal que se abrirá
import { Parrafos } from "../Texto";
import { Boton } from "../Boton";

export function ModalDePregunta () {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
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
                onClick={openModal} // Abre el modal cuando se hace clic
                className="btn-fondoFuerte"
              />
            </div>
          </fieldset>
        </section>
      </section>
      
      {/* Aquí se renderiza el modal ModalCrearDatosFamiliar si isModalOpen es true */}
      {isModalOpen && <ModalCrearDatosFamiliar closeModal={closeModal} />}
    </main>
  );
}
    