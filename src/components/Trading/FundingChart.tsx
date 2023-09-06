import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

export const FundingChart: React.FC = () => {
  const data = {
    labels: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0], 
    datasets: [
      {
        label:'',
        data: [2, -3, 1, -4, 1, 5,2,2, -3, 1, -4, 1,2, -3, 1, -4, 1, 5, 5, -3, 1,2, -3, 1, -4, 1, 5, -4, 1, 5,2, -3,2,2, -3, 1, -4, 1, 5, -3, 1, -4, 1, 5, 1, -4, 1, 5], 
        fill: false,
        borderColor: '#ffffff',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'center',
        min: 0,
        max: 3, 
        ticks: {
          stepSize: 0.2,
          display: false
        },
        title: {
          display: false,
          text: 'X-axis',
        },
      },
      y: {
        min: -15,
        max: 15, 
        ticks: {
          display: false,
        },
      },
      
    },
  };
  

  return (
    <div className="relative w-full h-full bg-neutral-900 rounded-[10px] border-[0.5px] border-white/20 overflow-hidden">
      <Line data={data} options={options} />
    </div>
  );
};



