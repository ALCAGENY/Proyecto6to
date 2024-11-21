import { useState, useEffect } from "react";
import axios from "axios";
import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";

export function ComponenteDatosProbabilisticos() {
  const [temperatureData, setTemperatureData] = useState([]); // Almacena todos los datos
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 10; // Número de tarjetas por página

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://3.210.148.31:8000/temperature_summary");
        setTemperatureData((prevData) => [response.data, ...prevData]); // Agrega nuevos datos al inicio
      } catch (err) {
        setError(err.message);
      }
    };

    const interval = setInterval(fetchData, 5000); // Llama a la API cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  // Calcular los datos de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = temperatureData.slice(indexOfFirstItem, indexOfLastItem);

  // Total de páginas
  const totalPages = Math.ceil(temperatureData.length / itemsPerPage);

  // Cambiar de página
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <main className="h-full w-full flex flex-col md:flex-row">
        {/* Sección de navegación */}
        <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
          <nav className="w-full h-full">
            <ComponenteNavegacion />
          </nav>
        </section>

        {/* Sección de contenido */}
        <section className="w-full md:w-4/5 h-auto md:h-screen p-10">
          <fieldset className="w-full h-full">
            {/* Encabezado */}
            <section className="bg-white px-5 flex text-center p-4 w-full h-20 animate-fade animate-duration-[3000ms]">
              <fieldset className="w-full flex items-center justify-center animate-fade animate-duration-[3000ms]">
                <h1 className="text-xl font-bold">Resumen de Temperatura</h1>
              </fieldset>
            </section>

            {/* Cuerpo */}
            <section className="bg-white mt-10 p-5 w-full h-4/5 flex flex-col animate-fade animate-duration-[3000ms] overflow-y-auto">
              <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                {error && (
                  <p className="text-red-500 text-center">
                    Error: {error}
                  </p>
                )}
                {currentData.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {currentData.map((data, index) => (
                      <div
                        key={index}
                        className="p-6 bg-ColorFondo rounded-lg shadow-md"
                      >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                          Estado: {data.status}
                        </h2>
                        <p className="">
                          <strong>Promedio:</strong> {data.average_temperature}°C
                        </p>
                        <p className="text-gray-600">
                          <strong>Inicio:</strong> {data.start_time}
                        </p>
                        <p className="text-gray-600">
                          <strong>Fin:</strong> {data.end_time}
                        </p>
                        <p className="font-bold mt-4">
                          {data.message}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  !error && (
                    <p className="text-gray-500 text-center">
                      Cargando datos...
                    </p>
                  )
                )}

                {/* Paginación */}
                <div className="flex justify-center items-center mt-6">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-ColorFondo hover:bg-opacity-70"
                    }`}
                  >
                    Anterior
                  </button>
                  <span className="mx-2 text-gray-700">
                    Página {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === totalPages
                        ? "bg-ColorFondo cursor-not-allowed"
                        : "bg-ColorFondo hover:bg-opacity-70"
                    }`}
                  >
                    Siguiente
                  </button>
                </div>
              </fieldset>
            </section>
          </fieldset>
        </section>
      </main>
    </>
  );
}
