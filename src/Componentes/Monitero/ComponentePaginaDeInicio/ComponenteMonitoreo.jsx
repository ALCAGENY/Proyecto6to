import React, { useEffect, useState } from 'react';
import { ComponenteNavegacion } from "../../UI/Navegacion/ComponenteNavegacion/ComponenteNavegacion";
import { CardRadioGrama } from "../CardRadiograma/CardRadioGrama";
import CardTemperatura from "../CardTemperatura/CardTemperatura";
import { CardOxigenacion } from "../CardOxigenacion/CardOxigenacion";

export function ComponenteMonitoreo() {
  const [temperature, setTemperature] = useState(0);
  const [oximeterValue, setOximeterValue] = useState(0); // Estado para el valor de oxigenación
  const [bpmValue, setBpmValue] = useState(0); // Estado para almacenar el valor de BPM

  // Aquí va el código de obtención de temperatura (ya lo tienes)
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch('https://easycode-api.dreamapp.com.mx/api/v1/body-temperature/all');
        const data = await response.json();
        if (data.length > 0) {
          const latestTemperature = parseFloat(data[data.length - 1].valor);
          setTemperature(latestTemperature);
        } else {
          console.error("No se recibieron datos de temperatura.");
        }
      } catch (error) {
        console.error("Error al obtener los datos de temperatura:", error);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 1000);
    return () => clearInterval(interval);
  }, []);

  // Aquí obtienes el valor de oxigenación
  useEffect(() => {
    const fetchOximeterData = async () => {
      try {
        const response = await fetch("https://easycode-api.dreamapp.com.mx/api/v1/oximeter/all");
        const data = await response.json();
        if (data.length > 0) {
          const latestOximeterValue = parseFloat(data[data.length - 1].valor);
          setOximeterValue(latestOximeterValue); // Actualiza el valor de oxigenación
        } else {
          console.error("No se recibieron datos de oxímetro.");
        }
      } catch (error) {
        console.error("Error al obtener los datos de oxímetro:", error);
      }
    };

    fetchOximeterData();
    const interval = setInterval(fetchOximeterData, 1000);
    return () => clearInterval(interval);
  }, []);

  // Aquí obtienes el valor de BPM desde el CardRadioGrama
  useEffect(() => {
    const fetchBpmData = async () => {
      try {
        const response = await fetch("https://easycode-api.dreamapp.com.mx/api/v1/heart-rate/all");
        const data = await response.json();
        if (data.length > 0) {
          const latestBpmValue = parseFloat(data[data.length - 1].BPM);
          setBpmValue(latestBpmValue); // Actualiza el valor de BPM
        } else {
          console.error("No se recibieron datos de BPM.");
        }
      } catch (error) {
        console.error("Error al obtener los datos de BPM:", error);
      }
    };

    fetchBpmData();
    const interval = setInterval(fetchBpmData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-full w-full flex flex-col md:flex-row">
      <section className="w-full md:w-1/5 h-auto md:h-screen p-5 animate-fade-right animate-duration-[2000ms]">
        <nav className="w-full h-full">
          <ComponenteNavegacion />
        </nav>
      </section>

      <section className="w-full md:w-4/5 h-auto md:h-screen p-9">
        <fieldset className="w-full h-full">
          <section className="px-5 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full flex flex-col md:flex-row h-auto md:h-2/3 gap-20">
              {/* Card for Cardiogram */}
              <fieldset className="w-full h- md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-red-500 text-5xl animate-pulse">❤️</div>
                <p className="text-lg mt-2 font-bold">Datos Cardiograma</p>
                <span className="text-3xl font-bold">{bpmValue} BPM</span> {/* Aquí pasas el BPM */}
              </fieldset>

              {/* Card for Temperature */}
              <fieldset className="w-full md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-blue-500 text-5xl">🌡️</div>
                <p className="text-lg mt-2 font-bold">Datos Temperatura</p>
                <span className="text-3xl font-bold">{temperature} °C</span>
              </fieldset>

              {/* Card for Oximeter */}
              <fieldset className="w-full md:w-1/3 bg-white rounded-full shadow-md p-5 flex flex-col items-center justify-center">
                <div className="text-purple-500 text-5xl">🩸🩸</div>
                <p className="text-lg mt-2 font-bold">Datos Oxigenación</p>
                <span className="text-3xl font-bold">{oximeterValue}%</span> {/* Muestra el valor de oxigenación aquí */}
              </fieldset>
            </fieldset>
          </section>

          {/* Additional section with Cards */}
          <section className="flex flex-col md:flex-row h-auto md:h-2/3 mt-9 gap-5 animate-fade animate-duration-[3000ms]">
            <fieldset className="w-full md:w-1/3">
              <CardRadioGrama bpmValue={bpmValue} /> {/* Pasa el BPM a CardRadioGrama */}
            </fieldset>
            <fieldset className="w-full md:w-1/3 flex items-center justify-center bg-white">
              <CardTemperatura temperature={temperature} /> {/* Pasa la temperatura aca */}
            </fieldset>
            <fieldset className="w-full md:w-1/3">
              <CardOxigenacion oximeterValue={oximeterValue} /> {/* Pasa el valor de oxigenación */}
            </fieldset>
          </section>
        </fieldset>
      </section>
    </main>
  );
}
