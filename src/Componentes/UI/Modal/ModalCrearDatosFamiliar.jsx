import React, { useState } from "react";
import { InpuT } from "../InpuT";
import { Boton } from "../Boton";
import { ModalExito } from "./ModalExito"; 

export function ModalCrearDatosFamiliar() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    telefono: "",
    relacion: "",
    correo: "",
  });
  const [error, setError] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  // Obtener el token del localStorage
  const token = localStorage.getItem('token');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.apellido_p) newErrors.apellido_p = "El apellido paterno es obligatorio.";
    if (!formData.apellido_m) newErrors.apellido_m = "El apellido materno es obligatorio.";
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio.";
    else if (!/^\d{10}$/.test(formData.telefono))
      newErrors.telefono = "El teléfono debe tener 10 dígitos.";

    if (!formData.relacion) newErrors.relacion = "La relación es obligatoria.";

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.correo) newErrors.correo = "El correo es obligatorio.";
    else if (!emailRegex.test(formData.correo))
      newErrors.correo = "Por favor ingresa un correo electrónico válido.";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGuardarClick = async () => {
    if (validateForm()) {
      try {
        // Verificar si el token está presente antes de hacer la solicitud
        if (!token) {
          console.error("No se ha encontrado un token de autenticación.");
          return;
        }

        const response = await fetch("http://localhost:8081/api/v1/emergency-contacts/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Incluir el token en la cabecera
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Datos guardados correctamente");
          setModalVisible(true); // Muestra el modal al guardar los datos correctamente
        } else {
          console.log("Error al guardar los datos");
        }
      } catch (error) {
        console.log("Error en la conexión con la API:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Cierra el modal
  };

  return (
    <>
      <main
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
        aria-modal="true"
        role="dialog"
      >
        <section className="bg-ColorFondo p-5 h-auto max-h-[90vh] w-full max-w-md md:max-w-lg lg:max-w-xl rounded-3xl flex justify-center items-center overflow-auto">
          <section className="bg-white w-11/12 h-auto flex justify-center p-4 sm:p-6 rounded-3xl">
            <fieldset className="flex flex-col gap-4 sm:gap-6 w-full">
              <h2 className="text-center text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4">
                Datos del Familiar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <InpuT
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`border ${error.nombre ? "border-red-500" : "border-none"} p-2 rounded-full`}
                  />
                  {error.nombre && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.nombre}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <InpuT
                    type="text"
                    name="apellido_p"
                    placeholder="Apellido Paterno"
                    value={formData.apellido_p}
                    onChange={handleInputChange}
                    className={`border ${error.apellido_p ? "border-red-500" : "border-none"} p-2 rounded-full`}
                  />
                  {error.apellido_p && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.apellido_p}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <InpuT
                    type="text"
                    name="apellido_m"
                    placeholder="Apellido Materno"
                    value={formData.apellido_m}
                    onChange={handleInputChange}
                    className={`border ${error.apellido_m ? "border-red-500" : "border-none"} p-2 rounded-full`}
                  />
                  {error.apellido_m && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.apellido_m}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <InpuT
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`border ${error.telefono ? "border-red-500" : "border-none"} p-2 rounded-full`}
                  />
                  {error.telefono && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.telefono}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <select
                    name="relacion"
                    value={formData.relacion}
                    onChange={handleInputChange}
                    className={`w-full p-2 border text-gray-600 bg-ColorFondo bg-opacity-70 sm:p-1 md:p-2 rounded-full mt-2 text-sm sm:text-base md:text-lg transform transition-transform duration-500 hover:scale-105 ${error.relacion ? "border-red-500" : "border-none"}`}
                  >
                    <option value="">Relación con el paciente</option>
                    <option value="padre">Padre</option>
                    <option value="madre">Madre</option>
                    <option value="hijo/a">Hijo/a</option>
                    <option value="hermano/a">Hermano/a</option>
                    <option value="esposo/a">Esposo/a</option>
                  </select>
                  {error.relacion && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.relacion}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <InpuT
                    type="text"
                    name="correo"
                    placeholder="Correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    className={`border ${error.correo ? "border-red-500" : "border-none"} p-2 rounded-full`}
                  />
                  {error.correo && (
                    <p className="text-red-500 text-sm absolute bottom-2 left-2">
                      {error.correo}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-3 sm:mt-4">
                <Boton textoBoton="Guardar" onClick={handleGuardarClick} /> 
              </div>
            </fieldset>
          </section>
        </section>
      </main>

      {/* Modal que se muestra cuando los datos se guardan correctamente */}
      {modalVisible && (
        <ModalExito onClose={handleCloseModal} />
      )}
    </>
  );
}
