import React, { useState, useEffect } from "react";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { ModalExito } from "../../UI/Modal/ModalExito";
import { Boton } from "../../UI/Boton";

export function FormularioRegistroPaciente() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    apellido_p: "",
    apellido_m: "",
    genero: "",
    edad: "",
    peso: "",
    altura: "",
    estado: "Chiapas",  
    municipio: "",
    nombre: "",          
    telefono: "",
    correo: "",
    contrasena: ""
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

    // Eliminar el error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.apellido_p) newErrors.apellido_p = "El apellido paterno es obligatorio.";
    if (!formData.apellido_m) newErrors.apellido_m = "El apellido materno es obligatorio.";
    if (!formData.genero) newErrors.genero = "El género es obligatorio.";

    if (!formData.edad) {
      newErrors.edad = "La edad es obligatoria.";
    } else if (isNaN(formData.edad)) {
      newErrors.edad = "La edad debe ser un número válido.";
    } else if (formData.edad < 18 || formData.edad > 100) {
      newErrors.edad = "La edad debe estar entre 18 y 100 años.";
    }

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
      const datos = { ...formData };

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
              {errors.apellido_p && <p className="text-red-500 text-xs absolute bottom-1 left-2">{errors.apellido_p}</p>}
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
              {errors.edad && <p className="text-red-500 text-xs absolute bottom-1 left-2">{errors.edad}</p>}
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
              {errors.altura && <p className="text-red-500 text-xs absolute bottom-1 left-2">{errors.altura}</p>}
            </div>

            <div className="relative">
              <Parrafos textoParrafo="Estado" />
              <div className="bg-ColorFondo bg-opacity-70 w-full sm:p-1 md:p-2 rounded-full mt-2 text-sm sm:text-base md:text-lg">
                {formData.estado}
              </div>
            </div>
          </section>

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
              {errors.apellido_m && <p className="text-red-500 text-xs absolute bottom-1 left-2">{errors.apellido_m}</p>}
            </div>

            <div className="relative">
              <Parrafos textoParrafo="Género" />
              <select
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
                className={`border ${errors.genero ? 'border-red-500' : 'border-none'} bg-ColorFondo bg-opacity-70 w-full sm:p-1 md:p-2 rounded-full mt-2 text-sm sm:text-base md:text-lg transform transition-transform duration-500 hover:scale-105`}
              >
                <option value="">Seleccione</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Prefiero no decirlo">Prefiero no decirlo</option>
              </select>
              {errors.genero && <p className="text-red-500 text-xs absolute left-2">{errors.genero}</p>}
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
              {errors.peso && <p className="text-red-500 text-xs absolute bottom-1 left-2">{errors.peso}</p>}
            </div>

            <div className="relative">
              <Parrafos textoParrafo="Municipio" />
              <select
                name="municipio"
                value={formData.municipio}
                onChange={handleInputChange}
                className={`border ${errors.municipio ? 'border-red-500' : 'border-none'} bg-ColorFondo bg-opacity-70 w-full sm:p-1 md:p-2 rounded-full mt-2 text-sm sm:text-base md:text-lg transform transition-transform duration-500 hover:scale-105`}
              >
                <option value="">Seleccione</option>
                <option value="Suchiapa">Suchiapa</option>
                <option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
                <option value="San Cristóbal ">San Cristóbal </option>
              </select>
              {errors.municipio && <p className="text-red-500 text-xs absolute left-2">{errors.municipio}</p>}
            </div>
          </section>
        </div>

        <div className="flex justify-center">
          <Boton
            textoBoton="Guardar"
            onClick={handleGuardarClick}
          />
        </div>
      </section>

      {isModalOpen && <ModalExito onClose={handleCloseModal} />}
    </>
  );
}
