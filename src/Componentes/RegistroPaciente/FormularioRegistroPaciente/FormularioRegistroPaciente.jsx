import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";
import React, { useState } from "react";
import { ModalDatosFamiliar } from "../../UI/Modal/ModalDatosFamiliar";

export function FormularioRegistroPaciente() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuardarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className=" h-full w-full rounded-3xl p-10">
        <div>
          <Titulos textoTitulo="Registro De Datos Del Paciente" />
        </div>
        <div className="mt-10 flex gap-14">
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="Apellido Paterno" />
              <InpuT className="" type="text" placeholder="Apellido Paterno" />
            </div>
            <div>
              <Parrafos textoParrafo="Apellido Materno" />
              <InpuT className="" type="text" placeholder="Apellido Materno" />
            </div>
            <div>
              <Parrafos textoParrafo="Genero" />
              <InpuT className="" type="text" placeholder="Genero" />
            </div>
            <div>
              <Parrafos textoParrafo="Edad" />
              <InpuT className="" type="text" placeholder="Edad" />
            </div>
          </section>
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="Peso KG" />
              <InpuT className="" type="text" placeholder="Peso KG" />
            </div>
            <div>
              <Parrafos textoParrafo="Altura CM" />
              <InpuT className="" type="text" placeholder="Altura CM" />
            </div>
            <div>
              <Parrafos textoParrafo="Ciudad" />
              <InpuT className="" type="text" placeholder="Ciudad" />
            </div>
            <div>
              <Parrafos textoParrafo="" />
              <InpuT className="" type="text" placeholder="" />
            </div>
          </section>
        </div>
        <div className="mt-7 text-center">
          <Boton textoBoton="Siguiente" onClick={handleGuardarClick} />
        </div>
      </section>
      {isModalOpen && <ModalDatosFamiliar onClose={handleCloseModal} />}
    </>
  );
}
