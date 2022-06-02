import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

interface IWeeklyGraphProps {}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options: ChartOptions<'line'> = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weekly Reports',
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Bum Bum Bhole, Masti Me Dole',
      data: labels.map((_, i) => i + 1),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const WeeklyGraph: React.FC<IWeeklyGraphProps> = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
