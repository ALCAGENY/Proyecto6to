import { useState, useEffect } from 'react';
import axios from 'axios';
import { ComponenteNavegacion } from "../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";

export function ComponenteHistorial() {
  const [historyData, setHistoryData] = useState([]);  // Para almacenar los datos de historial
  const [error, setError] = useState(null);  // Para manejar errores de la solicitud

  // Obtener datos del historial al montar el componente
  useEffect(() => {
    const fetchHistoryData = async () => {
      const token = localStorage.getItem('token');  // Obtener el token desde localStorage
      const userId = localStorage.getItem('userId'); // Obtener el userId desde localStorage

      if (!token || !userId) {
        setError("No se encontró un token de autenticación o ID de usuario");
        return;
      }

      try {
        // Hacer la solicitud con axios, pasando el token en los headers
        const response = await axios.get(`http://localhost:8081/api/v1/sensor-history/user`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        // Si la respuesta es exitosa, almacenar los datos
        setHistoryData(response.data);
      } catch (error) {
        // Manejo de errores
        setError(
          error.response?.data?.message || "Error al obtener los datos del historial de sensores"
        );
      }
    };

    fetchHistoryData();  // Llamar a la función para obtener los datos
  }, []);  // Solo se ejecuta una vez al montar el componente

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!historyData.length) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="h-full w-full flex flex-col md:flex-row">
      {/* Sección de navegación */}
      <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      {/* Sección de tabla */}
      <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
        <fieldset className="w-full h-full">
          {/* Encabezado de la tabla */}
          <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
              <table className="w-full text-center border-collapse">
                <thead className="">
                  <tr>
                    <th className="border border-gray-200 p-2">Fecha</th>
                    <th className="border border-gray-200 p-2">Hora</th>
                    <th className="border border-gray-200 p-2">Signo Vital</th>
                    <th className="border border-gray-200 p-2">Valor</th>
                  </tr>
                </thead>
              </table>
            </fieldset>
          </section>

          {/* Cuerpo de la tabla con la información */}
          <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms] overflow-y-auto">
            <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
              <table className="w-full text-center border-collapse">
                <tbody>
                  {historyData.map((item, index) => (
                    <tr className="hover:bg-gray-100" key={index}>
                      <td className="border border-gray-200 p-2">
                        {new Date(item.create_at).toLocaleDateString() || "No disponible"}
                      </td>
                      <td className="border border-gray-200 p-2">
                        {new Date(item.create_at).toLocaleTimeString() || "No disponible"}
                      </td>
                      <td className="border border-gray-200 p-2">
                        {item.sensorType || "No disponible"}
                      </td>
                      <td className="border border-gray-200 p-2">
                        {item.sensorValue || "No disponible"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
          </section>
        </fieldset>
      </section>
    </main>
  );
}
