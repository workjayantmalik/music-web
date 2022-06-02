import React, { useState } from 'react';
import { IconCheckMark } from '~icons/IconCheckMark';
import { IconCross } from '~icons/IconCross';
import { IconUser } from '~icons/IconUser';

interface IInputProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  validate: (value: string) => string | void;
  value: string;
  onInput?: (value: string) => void;
  icon: React.FC;
}

export const Input: React.FC<IInputProps> = ({
  label,
  placeholder = '',
  required = false,
  validate,
  type = 'text',
  value,
  onInput,
  icon,
}) => {
  const [state, setState] = useState({ error: '' });

  const handleOnInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const valid = validate(e.currentTarget.value);
    if (!valid) {
      setState({ error: '' });
      if (!!onInput) return onInput(e.currentTarget.value);
    } else {
      setState({ error: valid });
    }
  };

  const id = String((Math.random() % Number.MAX_VALUE) - 100);

  const Icon = icon;
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="font-medium">
        {label} {required && <span className="font-normal text-gray-500">(Required)</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-10 my-px ml-px flex items-center justify-center pointer-events-none rounded-l text-gray-500">
          <Icon />
        </div>
        <input
          id={id}
          className="block border border-gray-200 rounded pl-10 pr-3 py-2 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          type={type}
          placeholder={placeholder}
          value={value}
          onInput={handleOnInputChange}
          required={required}
        />
        <div className="absolute inset-y-0 right-0 w-10 my-px mr-px flex items-center justify-center pointer-events-none rounded-r text-gray-500 bg-gray-100 border-l border-gray-200">
          {!state.error && <IconCheckMark className="text-emerald-500" />}
          {!!state.error && <IconCross className="text-red-500" />}
        </div>
      </div>
      {!!state.error && <small className="text-red-500">{state.error}</small>}
    </div>
  );
};
