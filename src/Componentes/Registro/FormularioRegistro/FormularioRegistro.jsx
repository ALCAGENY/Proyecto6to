import React, { useState } from "react";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";
import { ModalDatos } from "../../UI/Modal/ModalDatos";

export function FormularioRegistro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    contrasena: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGuardarClick = () => {
    localStorage.setItem("registroPerfil", JSON.stringify(formData)); // Guardar en localStorage
    
    // Verificar si los datos se guardaron correctamente
    const savedData = localStorage.getItem("registroPerfil");
    if (savedData) {
      console.log("Datos guardados:", JSON.parse(savedData)); // Mostrar los datos guardados en la consola
    } else {
      console.log("No se guardaron los datos.");
    }

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
          <Parrafos textoParrafo="Nombre" />
          <InpuT
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Telefono" />
          <InpuT
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Correo" />
          <InpuT
            type="text"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-2 sm:mt-4">
          <Parrafos textoParrafo="Contraseña" />
          <InpuT
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-center mt-3 sm:mt-6">
          <Boton textoBoton="Guardar" onClick={handleGuardarClick} />
        </div>
      </main>
      {isModalOpen && <ModalDatos onClose={handleCloseModal} />}
    </>
  );
}
