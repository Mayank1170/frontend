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
            // label: 'Green Area',
            data: [30, 25, 0, null, null].slice(0, 3), 
            backgroundColor: createLinearGradient(ctx, ['rgba(40, 192, 120, 0.6)', 'rgba(40, 192, 120, 0.02)']),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 0,
            fill: "start"
          },
          {
            // label: 'Red Area',
            data: [null, null, 0, 22, 25],
            backgroundColor: createLinearGradient(ctx, ['rgba(255, 93, 93, 0.8)', 'rgba(255, 93, 93, 0.02)']),
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 0,
            fill : "start"
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
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
           plugins: {
            legend: {
              display: false, // Hide the legend (which includes buttons)
            },
          },
        },
      });
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
    <div className='rounded-full w-full aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-16 xl:aspect-h-9'>
    <canvas ref={chartRef} className='w-full h-full'></canvas>
  </div>
  );
};