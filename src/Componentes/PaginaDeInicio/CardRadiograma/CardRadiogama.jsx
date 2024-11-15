import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const HeartbeatChart = () => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);
    const heartbeatSeriesRef = useRef(null);
    const baseValue = 60;
    const maxValue = 60;
    const minValue = 60;

    // Genera datos iniciales del cardiograma
    const generateInitialData = (numberOfPoints = 50) => {
        const data = [];
        const date = new Date(Date.UTC(2022, 0, 1, 12, 0, 0, 0));
        for (let i = 0; i < numberOfPoints; i++) {
            data.push({ time: date.getTime() / 1000, value: baseValue });
            date.setUTCSeconds(date.getUTCSeconds() + 1);
        }
        return data;
    };

    // Función para actualizar el cardiograma en tiempo real
    const addHeartbeatData = () => {
        const time = new Date().getTime() / 1000;
        let value = baseValue;

        // Simulación de un latido en 3 etapas: alto (110), bajo (40), y vuelta a la base (60)
        const rand = Math.random();
        if (rand < 0.1) {
            value = maxValue; // Pico alto
        } else if (rand < 0.33) {
            value = minValue; // Pico bajo
        }

        // Agrega el nuevo punto y desplaza el gráfico
        heartbeatSeriesRef.current.update({ time, value });
    };

    useEffect(() => {
        const chartOptions = {
            layout: {
                textColor: 'black',
                background: { type: 'solid', color: 'white' },
            },
            grid: {
                vertLines: { color: '#eee' },
                horzLines: { color: '#eee' },
            },
        };

        const chart = createChart(chartContainerRef.current, chartOptions);
        chartRef.current = chart;

        const heartbeatSeries = chart.addLineSeries({
            color: 'rgb(225, 87, 90)',
            lineWidth: 2,
            crossHairMarkerVisible: true,
        });
        heartbeatSeriesRef.current = heartbeatSeries;

        // Carga los datos iniciales
        const initialData = generateInitialData();
        heartbeatSeries.setData(initialData);

        // Intervalo para simular latidos en tiempo real
        const intervalId = setInterval(addHeartbeatData, 450);

        chart.timeScale().fitContent();

        return () => {
            clearInterval(intervalId);
            chart.remove();
        };
    }, []);

    return <div ref={chartContainerRef} className="w-full h-96" />;
};

export default HeartbeatChart;