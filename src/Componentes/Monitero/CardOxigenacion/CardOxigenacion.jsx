import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";

export function CardOxigenacion() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const oximeterSeriesRef = useRef(null);
  const baseValue = 0;
  const [oximeterValue, setOximeterValue] = useState(baseValue); // Estado para almacenar el último valor del oxímetro

  // Generate initial data for the oximeter chart
  const generateInitialData = (numberOfPoints = 50) => {
    const data = [];
    const date = new Date(Date.UTC(2022, 0, 1, 12, 0, 0, 0));
    for (let i = 0; i < numberOfPoints; i++) {
      data.push({ time: date.getTime() / 1000, value: baseValue });
      date.setUTCSeconds(date.getUTCSeconds() + 1);
    }
    return data;
  };

  // Fetch function to get the latest oximeter data from the API
  const fetchOximeterData = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/v1/oximeter/all");
      const data = await response.json();
      if (data.length > 0) {
        const latestOximeterValue = parseFloat(data[data.length - 1].valor); // Obtener el último valor
        setOximeterValue(latestOximeterValue); // Actualizar el estado con el valor más reciente

        // Agregar nuevo punto al gráfico y actualizarlo
        const time = new Date().getTime() / 1000;
        oximeterSeriesRef.current.update({ time, value: latestOximeterValue });
      } else {
        console.error("No se recibieron datos de oxímetro.");
      }
    } catch (error) {
      console.error("Error al obtener los datos del oxímetro:", error);
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

    const oximeterSeries = chart.addLineSeries({
      color: "rgb(34, 193, 34)", // Verde
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });
    oximeterSeriesRef.current = oximeterSeries;

    // Load initial data
    const initialData = generateInitialData();
    oximeterSeries.setData(initialData);

    // Fetch initial oximeter data
    fetchOximeterData();

    // Interval to fetch and update the data every second
    const intervalId = setInterval(fetchOximeterData, 1000);

    chart.timeScale().fitContent();

    return () => {
      clearInterval(intervalId);
      chart.remove();
    };
  }, []);

  return (
      <div ref={chartContainerRef}  className="h-full w-full"/>
  );
}
