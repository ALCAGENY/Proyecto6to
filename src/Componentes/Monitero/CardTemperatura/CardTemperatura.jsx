import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { ModalTemperaturaAlerta } from '../../UI/Modal/ModalTemperaturaAlerta';

export default function CardTemperatura({ temperature }) {  

  const [showModal, setShowModal] = useState(false); 

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
          max: 50,
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.2, '#7CFFB2'],
                [0.4, '#58D9F9'],
                [0.6, '#FDDD60'],
                [0.8, '#FFA500'],
                [1, '#FF6E76']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: { color: 'auto' }
          },
          axisTick: { length: 12, lineStyle: { color: 'auto', width: 2 } },
          splitLine: { length: 20, lineStyle: { color: 'auto', width: 5 } },
          axisLabel: {
            color: '#464646',
            fontSize: 17,
            distance: -66,
            formatter: function (value) {
              let emoji = "😐";
              if (value < 10) emoji = "😁";
              else if (value < 20) emoji = "😊";
              else if (value < 30) emoji = "🙂";
              else if (value < 40) emoji = "😟";
              else emoji = "😖";
              return `${emoji}\n${value}°C`;
            }
          },
          title: { offsetCenter: [0, '15%'], fontSize: 20 },
          detail: {
            fontSize: 30,
            offsetCenter: [0, '-10%'],
            valueAnimation: true,
            formatter: '{value} °C',
            color: 'inherit'
          },
          data: [
            { value: temperature, name: '' } 
          ]
        }
      ]
    };

    myChart.setOption(option);

    if (temperature >= 37) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }

    return () => {
      myChart.dispose();
    };
  }, [temperature]);

  return (<>
     <div id="main" style={{ width: '100%', height: '300px' }} />
    <div>
      {showModal && <ModalTemperaturaAlerta />}
    </div>
  </>
  );
}
