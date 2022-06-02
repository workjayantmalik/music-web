import clsx from 'clsx';
import React from 'react';

interface IStatCardsProps {
  active: number;
  approved: number;
  total: number;
  pending: number;
  blocked: number;
  className?: string;
}

export const StatCards: React.FC<IStatCardsProps> = ({ active, approved, blocked, pending, total, className }) => {
  return (
    <section className={clsx('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8', className)}>
      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">
              {pending}/{total}
            </dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Pending</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">{active}</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Active</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">10</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Rejected</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">0</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Conditional OK</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">0</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Suspended</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">4</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Expiring Soon</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-star inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">4</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Expired</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}

      {/* Card: Simple Widget with Icon */}
      <article className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
        {/* Card Body: Simple Widget with Icon */}
        <div className="p-5 lg:p-6 grow w-full flex justify-between items-center">
          <div className="flex justify-center items-center rounded-xl w-16 h-16 bg-indigo-100">
            <svg
              className="hi-solid hi-briefcase inline-block w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          <dl className="text-right">
            <dt className="text-2xl font-semibold">{blocked}</dt>
            <dd className="uppercase font-medium text-sm text-gray-500 tracking-wider">Terminated</dd>
          </dl>
        </div>
        {/* END Card Body: Simple Widget with Icon */}
      </article>
      {/* END Card: Simple Widget with Icon */}
    </section>
  );
};
