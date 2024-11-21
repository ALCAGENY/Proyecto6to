import { useState } from "react";
import { Titulos } from "../../UI/Texto";
import { Parrafos } from "../../UI/Texto";
import { InpuT } from "../../UI/InpuT";
import { Boton } from "../../UI/Boton";

export function AgregarDatosDoctor() {
  const [formData, setFormData] = useState({
    id_usuario: localStorage.getItem("userId") || "", // Recuperar el userId del localStorage
    nombre: "",
    especialidad: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Recuperar el token del localStorage

    if (!token) {
      alert("No se encontró un token. Inicia sesión primero.");
      return;
    }

    try {
      const response = await fetch("https://easycode-api.dreamapp.com.mx/api/v1/doctor/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Agregar el token en los encabezados
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Doctor registrado exitosamente");
        setFormData({
          id_usuario: localStorage.getItem("userId") || "",
          nombre: "",
          especialidad: "",
          telefono: "",
          correo: "",
        }); // Limpia el formulario
      } else {
        const errorData = await response.json();
        alert(`Error al registrar: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un error al registrar al doctor.");
    }
  };

  return (
    <>
      <section className="w-full h-full animate-fade animate-duration-[2000ms]">
        <main>
          <div className="text-center">
            <Titulos textoTitulo="Agregar Datos Del Doctor" />
          </div>
          <form onSubmit={handleSubmit}>
            <section className="grid grid-cols-2 gap-4 p-5 mt-10">
              <div>
                <Parrafos textoParrafo="Nombre" className="text-sm font-medium" />
                <InpuT
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"
                />
              </div>

              <div>
                <Parrafos textoParrafo="Especialidad" className="text-sm font-medium" />
                <InpuT
                  type="text"
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={handleChange}
                  className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"
                />
              </div>

              <div>
                <Parrafos textoParrafo="Telefono" className="text-sm font-medium" />
                <InpuT
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"
                />
              </div>

              <div>
                <Parrafos textoParrafo="Correo" className="text-sm font-medium" />
                <InpuT
                  type="text"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="bg-ColorFondo rounded-full p-2 transform transition-transform duration-400 hover:scale-105"
                />
              </div>
            </section>
            <div className="text-center mt-10">
              <Boton textoBoton="Guardar" type="submit" />
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
