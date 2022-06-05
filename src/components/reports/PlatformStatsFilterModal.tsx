import clsx from 'clsx';
import React, { useState } from 'react';

interface IPlatformStatsFilterModalProps {
  isVisible?: boolean;
  onSuccess: (month: number, year: number) => void;
  onCancel: () => void;
}

export const PlatformStatsFilterModal: React.FC<IPlatformStatsFilterModalProps> = ({
  onSuccess,
  onCancel,
  isVisible = false,
}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState('');

  const currentMonth = new Date().getMonth() + 1;

  return (
    <div
      className={clsx(
        isVisible ? '' : 'hidden',
        'transition ease-out duration-200',
        'z-50 text-left fixed inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-75 p-4 lg:p-8',
      )}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="tk-modal-with-form"
      aria-hidden="false">
      {/* Modal Dialog */}
      {/*
    Show/Hide with transitions
enter         'transition ease-out duration-200'
enter-start   'transform opacity-0 scale-125'
enter-end     'transform opacity-100 scale-100'
leave         'transition ease-in duration-100'
leave-start   'transform opacity-100 scale-100'
leave-end     'transform opacity-0 scale-125'
  */}
      <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden w-full max-w-md mx-auto" role="document">
        <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between items-center">
          <h3 className="font-medium flex items-center space-x-2">
            <svg
              className="hi-solid hi-user-add inline-block w-5 h-5 opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span>Filter Report</span>
          </h3>
          <div className="-my-4">
            <button
              type="button"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600">
              <svg
                className="hi-solid hi-x inline-block w-4 h-4 -mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-5 lg:p-6 grow w-full">
          <p className="text-gray-600 mb-5">
            Select Month and Year to update platform reports as per selected month and year.
          </p>
          <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
            <div className="space-y-1 grow">
              <label htmlFor="tk-inputs-default-select" className="font-medium">
                Month
              </label>
              <select
                onChange={e => setMonth(Number(e.currentTarget.value))}
                className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                id="tk-inputs-default-select">
                <option value={0} selected={currentMonth == 1}>
                  January
                </option>
                <option value={1} selected={currentMonth == 2}>
                  Feburary
                </option>
                <option value={2} selected={currentMonth == 3}>
                  March
                </option>
                <option value={3} selected={currentMonth == 4}>
                  April
                </option>
                <option value={4} selected={currentMonth == 5}>
                  May
                </option>
                <option value={5} selected={currentMonth == 6}>
                  June
                </option>
                <option value={6} selected={currentMonth == 7}>
                  July
                </option>
                <option value={7} selected={currentMonth == 8}>
                  August
                </option>
                <option value={8} selected={currentMonth == 9}>
                  September
                </option>
                <option value={9} selected={currentMonth == 10}>
                  October
                </option>
                <option value={10} selected={currentMonth == 11}>
                  November
                </option>
                <option value={11} selected={currentMonth == 12}>
                  December
                </option>
              </select>
            </div>
            <div className="space-y-1 grow">
              <label htmlFor="tk-inputs-default-select-2" className="font-medium">
                Year
              </label>
              <select
                className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                id="tk-inputs-default-select-2">
                {Array.from({ length: new Date().getFullYear() + 1 - 2020 }).map((_, i) => (
                  <option key={`${i}`} value={2020 + i}>
                    {2020 + i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 text-right space-x-1">
          <button
            onClick={() => onCancel()}
            type="button"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-indigo-600 hover:text-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600">
            Cancel
          </button>
          <button
            onClick={() => onSuccess(month, parseInt(year))}
            type="button"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
            Save Filter
          </button>
        </div>
      </div>
      {/* END Modal Dialog */}
    </div>
  );
};
