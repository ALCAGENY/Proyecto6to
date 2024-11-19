import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export function CardOxigenacion () {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const heartbeatSeriesRef = useRef(null);
  const baseValue = 90;
  const maxValue = 110;
  const minValue = 85;

  // Generate initial data for the cardiogram
  const generateInitialData = (numberOfPoints = 50) => {
    const data = [];
    const date = new Date(Date.UTC(2022, 0, 1, 12, 0, 0, 0));
    for (let i = 0; i < numberOfPoints; i++) {
      data.push({ time: date.getTime() / 1000, value: baseValue });
      date.setUTCSeconds(date.getUTCSeconds() + 1);
    }
    return data;
  };

  // Update function for real-time cardiogram
  const addHeartbeatData = () => {
    const time = new Date().getTime() / 1000;
    let value = baseValue;

    // Simulate a heartbeat in three stages
    const rand = Math.random();
    if (rand < 0.1) {
      value = maxValue; // High peak
    } else if (rand < 0.33) {
      value = minValue; // Low peak
    }

    // Add new point and shift chart
    heartbeatSeriesRef.current.update({ time, value });
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
        vertLine: {
          visible: false, // Oculta la línea vertical del crosshair
        },
        horzLine: {
          visible: false, // Oculta la línea horizontal del crosshair
        },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    const heartbeatSeries = chart.addLineSeries({
        color: "rgb(34, 193, 34)",  // Color verde
      lineWidth: 2,
      crossHairMarkerVisible: false, // Desactiva el marcador del crosshair
    });
    heartbeatSeriesRef.current = heartbeatSeries;

    // Load initial data
    const initialData = generateInitialData();
    heartbeatSeries.setData(initialData);

    // Interval to simulate real-time heartbeat
    const intervalId = setInterval(addHeartbeatData, 450);

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
