import { useState, useEffect } from "react";
import axios from "axios";
import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";

export function ComponenteDatosProbabilisticos() {
  const [temperatureData, setTemperatureData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener los datos desde la API con Axios
    axios
      .get("http://localhost:8000/temperature_summary")
      .then((response) => {
        setTemperatureData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
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
                <h1 className="text-xl font-bold">Resumen de Temperatura</h1>
              </fieldset>
            </section>

            {/* Cuerpo de la tabla con la información */}
            <section className="bg-white mt-10 p-5 w-full h-4/5 flex animate-fade animate-duration-[3000ms] overflow-y-auto">
              <fieldset className="bg-white w-full animate-fade animate-duration-[3000ms]">
                {/* Mostrar la card */}
                {error && (
                  <p className="text-red-500 text-center">
                    Error: {error}
                  </p>
                )}
                {temperatureData ? (
                  <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Estado: {temperatureData.status}
                    </h2>
                    <p className="text-gray-600">
                      <strong>Promedio:</strong> {temperatureData.average_temperature}°C
                    </p>
                    <p className="text-gray-600">
                      <strong>Moda:</strong> {temperatureData.mode_temperature}°C
                    </p>
                    <p className="text-gray-600">
                      <strong>Inicio:</strong> {temperatureData.start_time}
                    </p>
                    <p className="text-gray-600">
                      <strong>Fin:</strong> {temperatureData.end_time}
                    </p>
                    <p className="text-gray-800 font-bold mt-4">
                      {temperatureData.message}
                    </p>
                  </div>
                ) : (
                  !error && (
                    <p className="text-gray-500 text-center">
                      Cargando datos...
                    </p>
                  )
                )}
              </fieldset>
            </section>
          </fieldset>
        </section>
      </main>
    </>
  );
}
