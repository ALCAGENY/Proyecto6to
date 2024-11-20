import { useEffect, useState } from "react";
import axios from "axios";
import { Titulos } from "../../UI/Texto";

export function FormularioDatosDactor() {
  const [doctorData, setDoctorData] = useState({
    nombre: "",
    especialidad: "",
    telefono: "",
    correo: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Recupera el token de localStorage
    const userId = localStorage.getItem("userId"); // Recupera el ID del usuario de localStorage

    if (!token || !userId) {
      setError("No se encontró el token o el ID del usuario. Por favor, inicia sesión.");
      return;
    }

    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/doctor/${userId}`, // Inserta el userId en la URL
          {
            headers: {
              Authorization: `Bearer ${token}`, // Agrega el token al encabezado
            },
          }
        );

        setDoctorData(response.data); // Establece los datos obtenidos del doctor
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        if (error.response) {
          setError(error.response.data.message || "Error al obtener los datos del doctor.");
        } else {
          setError("No se pudo conectar con el servidor.");
        }
      }
    };

    fetchDoctorData();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="w-full h-full animate-fade animate-duration-[3000ms]">
      <section className="w-full h-full">
        <main>
          <div className="text-center">
            <Titulos textoTitulo="Datos Del Doctor" />
          </div>
          <section className="grid grid-cols-2 gap-6 mb-4 mt-24">
            <div>
              <p className="text-sm font-medium">Nombre</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {doctorData.nombre || "Cargando..."}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Especialidad</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {doctorData.especialidad || "Cargando..."}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Teléfono</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {doctorData.telefono || "Cargando..."}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Correo</p>
              <div className="bg-ColorFondo rounded-full p-5 text-center transform transition-transform duration-400 hover:scale-105">
                {doctorData.correo || "Cargando..."}
              </div>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
}
