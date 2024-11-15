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

  useEffect(() => {
    const datosPerfil = JSON.parse(localStorage.getItem("registroPerfil"));
    if (datosPerfil) {
      // Establecemos los datos del localStorage en el estado, pero no los mostramos en el formulario
      setFormData((prevState) => ({
        ...prevState,
        nombre: datosPerfil.nombre, // Traemos el nombre del localStorage
        telefono: datosPerfil.telefono, // Traemos el teléfono del localStorage
        correo: datosPerfil.correo, // Traemos el correo del localStorage
        contrasena: datosPerfil.contrasena, // Traemos la contraseña del localStorage
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGuardarClick = async () => {
    // Validar que los campos numéricos no estén vacíos
    if (!formData.apellido_p || !formData.apellido_m || !formData.edad || !formData.peso || !formData.altura) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const datos = {
      // Enviar los datos que ya están en el localStorage + los campos completados por el usuario
      nombre: formData.nombre, // Usamos los datos del localStorage
      apellido_p: formData.apellido_p,
      apellido_m: formData.apellido_m,
      edad: formData.edad,
      genero: formData.genero,
      estado: formData.estado,
      municipio: formData.municipio,
      correo: formData.correo, // Usamos los datos del localStorage
      contrasena: formData.contrasena, // Usamos los datos del localStorage
      telefono: formData.telefono, // Usamos los datos del localStorage
      peso: formData.peso,
      altura: formData.altura,
    };

    // Verifica si los campos numéricos son válidos
    if (isNaN(formData.edad) || isNaN(formData.peso) || isNaN(formData.altura)) {
      alert("Por favor, ingresa valores válidos en los campos de edad, peso y altura.");
      return;
    }

    console.log("Datos a enviar:", datos); // Verifica los datos antes de enviarlos

    try {
      const response = await fetch("http://localhost:8081/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      });

      if (response.ok) {
        setIsModalOpen(true); // Mostrar modal si la respuesta es exitosa
      } else {
        const errorData = await response.json();
        console.error("Error al registrar paciente:", errorData); // Muestra detalles del error
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="h-full w-full rounded-3xl p-10">
        <div>
          <Titulos textoTitulo="Registro De Datos Del Paciente" />
        </div>
        <div className="mt-10 flex gap-14">
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="Apellido Paterno" />
              <InpuT
                type="text"
                name="apellido_p"
                value={formData.apellido_p}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Apellido Materno" />
              <InpuT
                type="text"
                name="apellido_m"
                value={formData.apellido_m}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Genero" />
              <InpuT
                type="text"
                name="genero"
                value={formData.genero}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Edad" />
              <InpuT
                type="text"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
              />
            </div>
          </section>
          <section className="w-full md:w-1/2 space-y-4">
            <div>
              <Parrafos textoParrafo="Peso KG" />
              <InpuT
                type="text"
                name="peso"
                value={formData.peso}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Altura CM" />
              <InpuT
                type="text"
                name="altura"
                value={formData.altura}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Estado" />
              <InpuT
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Parrafos textoParrafo="Municipio" />
              <InpuT
                type="text"
                name="municipio"
                value={formData.municipio}
                onChange={handleInputChange}
              />
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
