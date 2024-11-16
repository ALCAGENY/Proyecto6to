import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export function CardRadioGrama() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const heartbeatSeriesRef = useRef(null);
  const baseValue = 60;
  const maxValue = 110;
  const minValue = 40;

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
        background: { type: "solid", color: "#cbf0fa" },
      },
      grid: {
        vertLines: { color: "white" },
        horzLines: { color: "white" },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    const heartbeatSeries = chart.addLineSeries({
      color: "rgb(225, 87, 90)",
      lineWidth: 2,
      crossHairMarkerVisible: true,
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
    <div ref={chartContainerRef} className="h-64" />
  );
}