import { useState, useEffect } from "react";
import axios from "axios";
import { ComponenteNavegacion } from "../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";

export function ComponenteHistorial() {
  const [historyData, setHistoryData] = useState([]); // Almacenar todos los datos
  const [currentPage, setCurrentPage] = useState(1);  // Página actual
  const [error, setError] = useState(null);          // Manejar errores
  const itemsPerPage = 25;                           // Cantidad de elementos por página

  useEffect(() => {
    const fetchHistoryData = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        setError("No se encontró un token de autenticación o ID de usuario");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8081/api/v1/sensor-history/user`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Ordenar los datos de más reciente a más antiguo
        const sortedData = response.data.sort(
          (a, b) => new Date(b.create_at) - new Date(a.create_at)
        );

        setHistoryData(sortedData);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Error al obtener los datos del historial de sensores"
        );
      }
    };

    fetchHistoryData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!historyData.length) {
    return <p>Cargando...</p>;
  }

  // Calcular los datos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = historyData.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(historyData.length / itemsPerPage);

  return (
    <main className="h-full w-full flex flex-col md:flex-row">
      <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
        <fieldset className="w-full h-full">
          <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
              <table className="w-full text-center border-collapse">
                <thead>
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

          <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms] overflow-y-auto">
            <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
              <table className="w-full text-center border-collapse">
                <tbody>
                  {currentData.map((item, index) => (
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

          {/* Paginación */}
          <div className="flex justify-center bg-white">
            <button
              className="px-4 py-2 m-1 bg-ColorFondo rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </button>
            <span className="px-4 py-2 m-1">{`Página ${currentPage} de ${totalPages}`}</span>
            <button
              className="px-4 py-2 m-1 bg-ColorFondo rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Siguiente
            </button>
          </div>
        </fieldset>
      </section>
    </main>
  );
}
