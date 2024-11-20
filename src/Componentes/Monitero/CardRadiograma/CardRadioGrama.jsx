import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";

export function CardRadioGrama() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const bpmSeriesRef = useRef(null);  // Cambié el nombre de la serie a bpmSeriesRef
  const baseValue = 0;
  const [bpmValue, setBpmValue] = useState(baseValue); // Estado para almacenar el último valor de BPM

  // Generate initial data for the BPM chart
  const generateInitialData = (numberOfPoints = 50) => {
    const data = [];
    const date = new Date(Date.UTC(2022, 0, 1, 12, 0, 0, 0));
    for (let i = 0; i < numberOfPoints; i++) {
      data.push({ time: date.getTime() / 1000, value: baseValue });
      date.setUTCSeconds(date.getUTCSeconds() + 1);
    }
    return data;
  };

  // Fetch function to get the latest BPM data from the API
  const fetchBpmData = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/v1/heart-rate/all");
      const data = await response.json();
      if (data.length > 0) {
        const latestBpmValue = parseFloat(data[data.length - 1].BPM); // Obtener el último valor de BPM
        setBpmValue(latestBpmValue); // Actualizar el estado con el valor más reciente

        // Agregar nuevo punto al gráfico y actualizarlo
        const time = new Date().getTime() / 1000;
        bpmSeriesRef.current.update({ time, value: latestBpmValue });
      } else {
        console.error("No se recibieron datos de BPM.");
      }
    } catch (error) {
      console.error("Error al obtener los datos del BPM:", error);
    }
  };

  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "#FFFFFF" },
      },
      grid: {
        vertLines: { color: "white" },
        horzLines: { color: "white" },
      },
      crosshair: {
        vertLine: { visible: false },
        horzLine: { visible: false },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    const bpmSeries = chart.addLineSeries({
      color: "rgb(255, 99, 132)", 
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    bpmSeriesRef.current = bpmSeries;

    // Load initial data
    const initialData = generateInitialData();
    bpmSeries.setData(initialData);

    // Fetch initial BPM data
    fetchBpmData();

    // Interval to fetch and update the data every second
    const intervalId = setInterval(fetchBpmData, 1000);

    chart.timeScale().fitContent();

    return () => {
      clearInterval(intervalId);
      chart.remove();
    };
  }, []);

  return (
      <div ref={chartContainerRef} className="h-full w-full" />
  );
}
