import React from 'react';
import { WeekTunesTable } from '~dashboard/WeekTunesTable';

interface IWeeklyTunesCardProps {}

export const WeeklyTunesCard: React.FC<IWeeklyTunesCardProps> = () => {
  return (
    <div>
      <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Header */}
        <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 sm:flex sm:justify-between sm:items-center">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold">This Week</h3>
            <h4 className="text-gray-500 text-sm">Quick way to access your weekly uploads.</h4>
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
              <span>New Upload</span>
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
              <span>More</span>
            </a>
          </div>
        </div>
        <div className="p-5 lg:p-6 grow w-full border-b border-gray-100">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-10 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="hi-solid hi-search inline-block w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="block border border-gray-200 rounded pl-10 pr-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              type="text"
              placeholder="Search tunes.."
            />
          </div>
        </div>
        {/* END Card Header */}
        {/* Card Body */}
        <div className="p-5 lg:p-6 grow w-full">
          <WeekTunesTable />
        </div>
        {/* END Card Body */}
        {/* Card Footer: Pagination */}
        <div className="py-4 px-5 lg:px-6 w-full border-t border-gray-200">
          {/* Visible in mobile */}
          <nav className="flex sm:hidden">
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <svg
                className="hi-solid hi-chevron-left inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="flex items-center grow justify-center px-2 sm:px-4">
              <span>
                {' '}
                Page <span className="font-semibold">1</span> of <span className="font-semibold">20</span>
              </span>
            </div>
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <svg
                className="hi-solid hi-chevron-right inline-block w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
          {/* END Visible in mobile */}
          {/* Visible in desktop */}
          <div className="hidden sm:flex sm:justify-between sm:items-center">
            <div>
              Page <span className="font-semibold">1</span> of <span className="font-semibold">20</span>
            </div>
            <nav className="inline-flex">
              <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg
                  className="hi-solid hi-chevron-left inline-block w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="border-t border-b border-gray-300 flex items-center justify-center px-2 sm:px-4 shadow-sm">
                ...
              </div>
              <button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg
                  className="hi-solid hi-chevron-right inline-block w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
          {/* END Visible in desktop */}
        </div>
        {/* END Card Footer: Pagination */}
      </div>
    </div>
  );
};
