import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const DepthChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (ctx) {
      const data = {
        labels: ['', '', '', '', ''],
        datasets: [
          {
            data: [30, 25, 0, null, null].slice(0, 3),
            backgroundColor: createLinearGradient(ctx, ['rgba(40, 192, 120, 0.6)', 'rgba(40, 192, 120, 0.06)']),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 0,
            fill: "start"
          },
          {
            data: [null, null, 0, 22, 25],
            backgroundColor: createLinearGradient(ctx, ['rgba(255, 93, 93, 0.8)', 'rgba(255, 93, 93, 0.06)']),
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 0,
            fill: "start"
            
          },
        ],
      };

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      const newChartInstance = new Chart(ctx, {
        
        type: 'line',
        data: data,
        options: {
          // responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 3,
          scales: {
            x: {
              beginAtZero: false,
            },
            y: {
              stacked: false,
              // beginAtZero: true,
              grid: {
                display: false,
                color: "rgba(255,99,132,0.2)"
              },
              
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
          },
        },
      });
      newChartInstance.data.datasets.forEach((dataset: any) => {
        dataset.pointRadius = 0;
        dataset.borderCapStyle = 'circle';
        dataset.radius = 0;
      });

      

      newChartInstance.update(); 

      chartInstanceRef.current = newChartInstance;
    }
  }, []);

  const createLinearGradient = (ctx: CanvasRenderingContext2D, colors: string[]) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    return gradient;
  };

  return (
    <div className="w-[calc(100%-5px)] h-[calc(100vh-285px)] bg-neutral-900  rounded-[10px] border-[0.5px] border-white/20 overflow-hidden mt-0 ">
      <canvas className='w-full h-full' ref={chartRef}></canvas>
    </div>
  );
};