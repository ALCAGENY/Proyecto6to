import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

export default function CardTemperatura() {
  const [temperature, setTemperature] = useState(36.5); // Temperatura inicial

  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    const option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '75%'],
          radius: '90%',
          min: 0,
          max: 50, // Ajusta el rango de temperatura, por ejemplo, de 0 a 50 grados
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 16,
            distance: -60,
            formatter: function (value) {
              return `${value}°C`; // Muestra el valor con unidad de temperatura
            }
          },
          title: {
            offsetCenter: [0, '-10%'],
            fontSize: 20
          },
          detail: {
            fontSize: 30,
            offsetCenter: [0, '-35%'],
            valueAnimation: true,
            formatter: '{value} °C', // Agrega el símbolo de grados en el detalle
            color: 'inherit'
          },
          data: [
            {
              value: temperature,
              name: 'Temp. Corporal'
            }
          ]
        }
      ]
    };

    // Configuración inicial del gráfico
    myChart.setOption(option);

    // Simulación de datos aleatorios
    const interval = setInterval(() => {
      // Genera un valor aleatorio entre 35°C y 40°C
      const randomTemperature = (Math.random() * 5 + 35).toFixed(1); 
      setTemperature(parseFloat(randomTemperature)); // Actualiza el estado de la temperatura
    }, 5000); // Actualiza cada 5 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
      myChart.dispose();
    };
  }, [temperature]); // Re-renderiza cuando la temperatura cambie

  return <div id="main" style={{ width: '100%', height: '300px' }} />;
}
