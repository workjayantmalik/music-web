import { ArcElement, Chart as ChartJS, ChartOptions, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface IPlatformMonthWiseStatsCardProps {}

ChartJS.register(ArcElement, Tooltip, Legend);

export const options: ChartOptions<'doughnut'> = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
};

export const data = {
  labels: [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Platform',
      data: [
        1_00_000, 2_00_000, 1_50_000, 3_43_000, 5_00_000, 1_63_000, 1_00_000, 2_00_000, 1_50_000, 3_43_000, 5_00_000,
        1_63_000,
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(155, 160, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(155, 160, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const PlatformMonthWiseStatsCard: React.FC<IPlatformMonthWiseStatsCardProps> = () => {
  return (
    <section className="flex flex-col rounded shadow-sm bg-white overflow-hidden mb-5">
      {/* Card Header */}
      <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 sm:flex sm:justify-between sm:items-center">
        <div className="text-center sm:text-left">
          <h3 className="font-semibold">Month wise Stats</h3>
          <h4 className="text-gray-500 text-sm">A simple and clean interface to monitor your tunes.</h4>
        </div>
        <div className="mt-3 sm:mt-0 text-center sm:text-right flex flex-row gap-2">
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="hi-solid hi-plus inline-block w-4 h-4">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Download</span>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="hi-solid hi-users inline-block w-4 h-4">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Filter</span>
          </a>
        </div>
      </div>
      {/* END Card Header */}
      {/* Card Body */}
      <div className="p-5 lg:p-6 grow w-full">
        {/* Placeholder */}
        <div className="rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-4">
          <Doughnut options={options} data={data} />
        </div>
      </div>
      {/* END Card Body */}
    </section>
  );
};
