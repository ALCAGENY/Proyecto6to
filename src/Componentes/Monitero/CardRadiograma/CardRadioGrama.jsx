import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export function CardRadioGrama() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const heartbeatSeriesRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "#FFFFFF" },
      },
      grid: {
        vertLines: { color: "#e5e5e5" },
        horzLines: { color: "#e5e5e5" },
      },
      crosshair: {
        vertLine: { visible: false },
        horzLine: { visible: false },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    const heartbeatSeries = chart.addLineSeries({
      color: "rgb(225, 87, 90)",
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    heartbeatSeriesRef.current = heartbeatSeries;

    // Función para obtener los datos desde la API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/heart-rate/all");
        const data = await response.json();
        
        // Procesa los datos y actualiza el gráfico
        data.forEach((point) => {
          const newPoint = {
            time: new Date(point.createdAt).getTime() / 1000, // Convierte la fecha a timestamp en segundos
            value: point.ECG,
          };
          heartbeatSeriesRef.current.update(newPoint);
        });

        chart.timeScale().fitContent();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Llama a la función fetchData cada segundo para actualizar los datos
    const intervalId = setInterval(fetchData, 1000); // Intervalo de 1 segundo (1000 ms)

    // Limpieza: limpia el intervalo y el gráfico cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
      chart.remove();
    };
  }, []);

  return (
    <div ref={chartContainerRef} className="h-full w-full" />
  );
}
