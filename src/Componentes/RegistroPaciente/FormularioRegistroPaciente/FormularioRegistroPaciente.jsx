import React, { useState, useEffect } from "react";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";
import { ModalDatosFamiliar } from "../../UI/Modal/ModalDatosFamiliar";

export function FormularioRegistroPaciente() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    apellido_p: "",
    apellido_m: "",
    genero: "",
    edad: "",
    peso: "",
    altura: "",
    estado: "",
    municipio: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const datosPerfil = JSON.parse(localStorage.getItem("registroPerfil"));
    if (datosPerfil) {
      setFormData((prevState) => ({
        ...prevState,
        nombre: datosPerfil.nombre,
        telefono: datosPerfil.telefono,
        correo: datosPerfil.correo,
        contrasena: datosPerfil.contrasena,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.apellido_p) newErrors.apellido_p = "El apellido paterno es obligatorio.";
    if (!formData.apellido_m) newErrors.apellido_m = "El apellido materno es obligatorio.";
    if (!formData.genero) newErrors.genero = "El género es obligatorio.";
    
    if (!formData.edad) newErrors.edad = "La edad es obligatoria.";
    else if (isNaN(formData.edad)) newErrors.edad = "La edad debe ser un número válido.";

    if (!formData.peso) newErrors.peso = "El peso es obligatorio.";
    else if (isNaN(formData.peso)) newErrors.peso = "El peso debe ser un número válido.";

    if (!formData.altura) newErrors.altura = "La altura es obligatoria.";
    else if (isNaN(formData.altura)) newErrors.altura = "La altura debe ser un número válido.";

    if (!formData.estado) newErrors.estado = "El estado es obligatorio.";
    if (!formData.municipio) newErrors.municipio = "El municipio es obligatorio.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGuardarClick = async () => {
    if (validateForm()) {
      const datos = {
        nombre: formData.nombre,
        apellido_p: formData.apellido_p,
        apellido_m: formData.apellido_m,
        edad: formData.edad,
        genero: formData.genero,
        estado: formData.estado,
        municipio: formData.municipio,
        correo: formData.correo,
        contrasena: formData.contrasena,
        telefono: formData.telefono,
        peso: formData.peso,
        altura: formData.altura,
      };

      try {
        const response = await fetch("http://localhost:8081/api/v1/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        });

        if (response.ok) setIsModalOpen(true);
        else console.error("Error al registrar paciente:", await response.json());
      } catch (error) {
        console.error("Error al conectar con la API:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <section className="h-full w-full rounded-3xl py-10">
      <div className="text-center">
        <Titulos textoTitulo="Registro De Datos Del Paciente" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 p-4 md:p-10 rounded-3xl">
        <section className="w-full md:w-1/2 space-y-4">
          <div className="relative">
            <Parrafos textoParrafo="Apellido Paterno" />
            <InpuT
              type="text"
              name="apellido_p"
              value={formData.apellido_p}
              onChange={handleInputChange}
              className={`border ${errors.apellido_p ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.apellido_p && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.apellido_p}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Edad" />
            <InpuT
              type="text"
              name="edad"
              value={formData.edad}
              onChange={handleInputChange}
              className={`border ${errors.edad ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.edad && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.edad}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Altura CM" />
            <InpuT
              type="text"
              name="altura"
              value={formData.altura}
              onChange={handleInputChange}
              className={`border ${errors.altura ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.altura && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.altura}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Estado" />
            <InpuT
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
              className={`border ${errors.estado ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.estado && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.estado}</p>
            )}
          </div>
        </section> {/* SEGUNDA SECCIION */}
        <section className="w-full md:w-1/2 space-y-4">
        <div className="relative">
            <Parrafos textoParrafo="Apellido Materno" />
            <InpuT
              type="text"
              name="apellido_m"
              value={formData.apellido_m}
              onChange={handleInputChange}
              className={`border ${errors.apellido_m ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.apellido_m && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.apellido_m}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Genero" />
            <InpuT
              type="text"
              name="genero"
              value={formData.genero}
              onChange={handleInputChange}
              className={`border ${errors.genero ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.genero && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.genero}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Peso KG" />
            <InpuT
              type="text"
              name="peso"
              value={formData.peso}
              onChange={handleInputChange}
              className={`border ${errors.peso ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.peso && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.peso}</p>
            )}
          </div>
          <div className="relative">
            <Parrafos textoParrafo="Municipio" />
            <InpuT
              type="text"
              name="municipio"
              value={formData.municipio}
              onChange={handleInputChange}
              className={`border ${errors.municipio ? 'border-red-500' : 'border-none'} p-2 rounded-full`}
            />
            {errors.municipio && (
              <p className="text-red-500 text-sm absolute bottom-2 left-2 transition-all duration-500 ease-in-out opacity-100">{errors.municipio}</p>
            )}
          </div>
        </section>
      </div>
      <div className="mt-3 text-center">
        <Boton textoBoton="Siguiente" onClick={handleGuardarClick} />
      </div>
    </section>
    {isModalOpen && <ModalDatosFamiliar onClose={handleCloseModal} />}
  </>
  
  );
}
