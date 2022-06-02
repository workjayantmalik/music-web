import React from 'react';

interface IWeekTunesTableProps {}

interface ITableRowProps {
  id: string;
  cover: string;
  tune: string;
  artist: string;
  status: string;
  onEdit: (id: string) => void;
}
const TableRow: React.FC<ITableRowProps> = ({ id, cover, tune, artist, status, onEdit }) => {
  return (
    <tr>
      <td className="p-3 hidden md:table-cell text-center">
        <img src={cover} alt="album cover" className="inline-block w-10 h-10 rounded-full" />
      </td>
      <td className="p-3">
        <p className="font-medium">{tune}</p>
        <p className="text-gray-500">{artist}</p>
      </td>
      <td className="p-3 text-center">
        <span className="w-4 h-4 bg-emerald-300 rounded-full inline-block md:hidden">&nbsp;</span>
        <div className="font-semibold px-2 py-1 leading-4 hidden md:inline-block text-xs rounded-full text-emerald-700 bg-emerald-200">
          {status}
        </div>
      </td>
      <td className="p-3 text-center">
        <button
          onClick={() => onEdit(id)}
          type="button"
          className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
          <svg
            className="hi-solid hi-pencil inline-block w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <span className="hidden sm:inline">Edit</span>
        </button>
      </td>
    </tr>
  );
};

export const WeekTunesTable: React.FC<IWeekTunesTableProps> = () => {
  return (
    <div className="border border-gray-200 rounded overflow-x-auto min-w-full bg-white">
      {/* Alternate Responsive Table */}
      <table className="min-w-full text-sm align-middle">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase hidden md:table-cell text-center">
              Album
            </th>
            <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-left">
              Name
            </th>
            <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
              Status
            </th>
            <th className="p-3 text-gray-700 bg-gray-100 font-semibold text-sm tracking-wider uppercase text-center">
              Actions
            </th>
          </tr>
        </thead>
        {/* END Table Header */}
        {/* Table Body */}
        <tbody>
          {Array.from({ length: 4 }).map((_, i) => (
            <TableRow
              key={i}
              id="1"
              tune="Bum Bum Bhole"
              status="active"
              cover="https://source.unsplash.com/mEZ3PoFGs_k/64x64"
              onEdit={id => console.log({ id })}
              artist="Jayant Malik"
            />
          ))}
        </tbody>
        {/* END Table Body */}
      </table>
      {/* END Alternate Responsive Table */}
    </div>
  );
};
