import React from "react";
import { useState } from "react";
import { Titulos } from "../Texto";
import { InpuT } from "../InpuT";
import { Boton } from "../Boton";
import { ModalVerificado } from "./ModalVerificado";

export function ModalDatosFamiliar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGuardarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <main
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
      aria-modal="true"
      role="dialog"
    >
      <section className="bg-ColorFondo h-3/4 w-4/12 rounded-3xl flex justify-center items-center">
        <section className="bg-white h-4/5 w-4/5 flex justify-center p-4 rounded-3xl">
          <fieldset>
            <div className="flex justify-center">
              <Titulos textoTitulo="Datos Del Familiar" />
            </div>
            <fieldset className="w-full space-y-5 mt-5">
              <div>
                <InpuT className="" type="text" placeholder="Nombre" />
              </div>
              <div>
                <InpuT
                  className=""
                  type="text"
                  placeholder="Relacion con el Paciente"
                />
              </div>
              <div>
                <InpuT className="" type="text" placeholder="Correo" />
              </div>
              <div>
                <InpuT
                  className=""
                  type="text"
                  placeholder="Numero de Emergencia"
                />
              </div>

              <div className="text-center">
                <Boton textoBoton="Agregar" onClick={handleGuardarClick} />
              </div>
            </fieldset>
          </fieldset>
        </section>
      </section>
    </main>
    {isModalOpen && <ModalVerificado onClose={handleCloseModal} />}
    </>
  );
}
