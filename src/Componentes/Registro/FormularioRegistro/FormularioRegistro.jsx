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
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio.";
    else if (!/^\d{10}$/.test(formData.telefono)) newErrors.telefono = "El teléfono debe tener 10 dígitos.";
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.correo) newErrors.correo = "El correo es obligatorio.";
    else if (!emailRegex.test(formData.correo)) newErrors.correo = "Por favor ingresa un correo electrónico válido.";

    if (!formData.contrasena) newErrors.contrasena = "La contraseña es obligatoria.";
    else if (formData.contrasena.length < 6) newErrors.contrasena = "La contraseña debe tener al menos 6 caracteres.";
    
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGuardarClick = () => {
    if (validateForm()) {
      localStorage.setItem("registroPerfil", JSON.stringify(formData));

      const savedData = localStorage.getItem("registroPerfil");
      if (savedData) {
        console.log("Datos guardados:", JSON.parse(savedData));
      } else {
        console.log("No se guardaron los datos.");
      }

      setIsModalOpen(true);
    }
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

        <div className="mt-3 sm:mt-5 relative">
          <Parrafos textoParrafo="Nombre" />
          <InpuT
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className={`border ${error.nombre ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
          />
          {error.nombre && (
            <p className="text-red-500 text-sm absolute bottom-2 left-2">{error.nombre}</p>
          )}
        </div>
        
        <div className="mt-2 sm:mt-4 relative">
          <Parrafos textoParrafo="Teléfono" />
          <InpuT
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className={`border ${error.telefono ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
          />
          {error.telefono && (
            <p className="text-red-500 text-sm absolute bottom-2 left-2">{error.telefono}</p>
          )}
        </div>
        
        <div className="mt-2 sm:mt-4 relative">
          <Parrafos textoParrafo="Correo" />
          <InpuT
            type="text"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            className={`border ${error.correo ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
          />
          {error.correo && (
            <p className="text-red-500 text-sm absolute bottom-2 left-2">{error.correo}</p>
          )}
        </div>
        
        <div className="mt-2 sm:mt-4 relative">
          <Parrafos textoParrafo="Contraseña" />
          <InpuT
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
            className={`border ${error.contrasena ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
          />
          {error.contrasena && (
            <p className="text-red-500 text-sm absolute bottom-2 left-2">{error.contrasena}</p>
          )}
        </div>

        <div className="text-center mt-3 sm:mt-6">
          <Boton textoBoton="Guardar" onClick={handleGuardarClick} />
        </div>
      </main>
      
      {isModalOpen && <ModalDatos onClose={handleCloseModal} />}
    </>
  );
}
