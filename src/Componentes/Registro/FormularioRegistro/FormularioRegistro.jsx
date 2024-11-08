import React, { useState } from "react";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";
import { ModalDatos } from "../../UI/Modal/ModalDatos";

export function FormularioRegistro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuardarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="w-4/5 mx-auto">
        <div>
          <Titulos className="text-center" textoTitulo="Registro De Perfil" />
        </div>
        <div className="mt-3 sm:mt-10">
          <Parrafos textoParrafo="Correo" />
          <InpuT type="text"/>
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Nombre" />
          <InpuT type="text"/>
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Apellido" />
          <InpuT type="text"/>
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Teléfono" />
          <InpuT type="text"/>
        </div>
        <div className="text-center mt-3 sm:mt-6">
          <Boton textoBoton="Guardar" onClick={handleGuardarClick} />
        </div>
      </main>
      {isModalOpen && <ModalDatos onClose={handleCloseModal} />}
    </>
  );
}
