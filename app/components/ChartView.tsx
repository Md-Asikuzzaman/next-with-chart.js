// components/MyLineChart.tsx
'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ScriptableContext,
  Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  BarElement,
  ArcElement,
  Filler
);

const ChartView = () => {
  const [chart, setChart] = useState<string>('');

  useEffect(() => {
    setChart(chart);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <select
        value={chart}
        onChange={(e) => setChart(e.target.value)}
        className='select select-bordered w-full max-w-xs'
      >
        <option value=''>Choose any chart</option>
        <option value='line-chart'>Line Chart</option>
        <option value='bar-chart'>Bar Chart</option>
        <option value='pie-chart'>Pie Chart</option>
      </select>

      {chart === 'line-chart' && (
        <div>
          <h2 className='text-center text-3xl font-bold mb-5'>Line Chart</h2>
          <div className='w-full h-[400px] flex justify-center'>
            <Line
              data={{
                labels: [
                  '2023-01',
                  '2023-02',
                  '2023-03',
                  '2023-04',
                  '2023-05',
                  '2023-06',
                  '2023-07',
                  '2023-08',
                  '2023-09',
                  '2023-10',
                  '2023-11',
                  '2023-12',
                ],
                datasets: [
                  {
                    pointRadius: 0,
                    pointHoverRadius: 2,
                    data: [
                      100, 120, 260, 134, 168, 132, 200, 150, 220, 190, 290,
                      280,
                    ],
                    backgroundColor: (context: ScriptableContext<'line'>) => {
                      const ctx = context.chart.ctx;
                      const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                      gradient.addColorStop(0, 'rgba(91,56,237,0.9)');
                      gradient.addColorStop(1, 'rgba(91,56,237,0.2)');
                      return gradient;
                    },

                    fill: true,
                    borderColor: 'rgba(91,56,237,255)',
                  },
                ],
              }}
            />
          </div>
        </div>
      )}

      {chart == '' && (
        <div>
          <h2 className='text-center text-3xl font-bold mb-5'>Line Chart</h2>
          <div className='w-full h-[400px] flex justify-center'>
            <Line
              data={{
                labels: [
                  '2023-01',
                  '2023-02',
                  '2023-03',
                  '2023-04',
                  '2023-05',
                  '2023-06',
                  '2023-07',
                  '2023-08',
                  '2023-09',
                  '2023-10',
                  '2023-11',
                  '2023-12',
                ],
                datasets: [
                  {
                    pointRadius: 0,
                    pointHoverRadius: 2,
                    data: [
                      100, 120, 260, 134, 168, 132, 200, 150, 220, 190, 290,
                      280,
                    ],
                    backgroundColor: (context: ScriptableContext<'line'>) => {
                      const ctx = context.chart.ctx;
                      const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                      gradient.addColorStop(0, 'rgba(91,56,237,0.9)');
                      gradient.addColorStop(1, 'rgba(91,56,237,0.2)');
                      return gradient;
                    },

                    fill: true,
                    borderColor: 'rgba(91,56,237,255)',
                  },
                ],
              }}
            />
          </div>
        </div>
      )}

      {chart === 'bar-chart' && (
        <div>
          <h2 className='text-center text-3xl font-bold mb-5'>Bar Chart</h2>
          <div className='w-full h-[400px] flex justify-center'>
            <Bar
              data={{
                labels: [
                  '2023-01',
                  '2023-02',
                  '2023-03',
                  '2023-04',
                  '2023-05',
                  '2023-06',
                  '2023-07',
                  '2023-08',
                  '2023-09',
                  '2023-10',
                  '2023-11',
                  '2023-12',
                ],
                datasets: [
                  {
                    data: [
                      100, 120, 260, 134, 168, 132, 200, 150, 220, 190, 290,
                      280,
                    ],
                    backgroundColor: [
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}

      {chart === 'pie-chart' && (
        <div>
          <h1 className='text-center text-3xl font-bold mb-5'>Pie Chart</h1>
          <div className='w-full h-[400px] flex justify-center'>
            <Pie
              data={{
                labels: [
                  '2023-01',
                  '2023-02',
                  '2023-03',
                  '2023-04',
                  '2023-05',
                  '2023-06',
                  '2023-07',
                  '2023-08',
                ],
                datasets: [
                  {
                    data: [100, 120, 260, 134, 168, 132, 200, 150],
                    backgroundColor: [
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ChartView;
