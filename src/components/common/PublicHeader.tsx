import React from 'react';
import { RoutesDict } from '~lib/RoutesDict';
import NextLink from 'next/link';

interface IPublicHeaderProps {
  isAuthenticated?:boolean
}

export const PublicHeader: React.FC<IPublicHeaderProps> = ({isAuthenticated = false}) => {
  return (
    <header id="page-header" className="flex flex-none items-center bg-white py-10">
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
        {/* Logo */}
        <div>
          <NextLink href={RoutesDict.public.welcome}>
            <div className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-indigo-600 hover:text-indigo-400 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
              <span>Mehra Records</span>
            </div>
          </NextLink>
        </div>
        {/* END Logo */}
        <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          {/* Navigation */}
          <nav className="text-sm md:text-base space-x-4 md:space-x-6">
            <NextLink href={RoutesDict.public.features}>
              <a className="font-semibold text-gray-900 hover:text-gray-500">Features</a>
            </NextLink>
            <NextLink href={RoutesDict.public.pricing}>
              <a className="font-semibold text-gray-900 hover:text-gray-500">Pricing</a>
            </NextLink>
            <NextLink href={RoutesDict.public.about}>
              <a className="font-semibold text-gray-900 hover:text-gray-500">About</a>
            </NextLink>

            <NextLink href={RoutesDict.public.contact}>
              <a className="font-semibold text-gray-900 hover:text-gray-500">Contact</a>
            </NextLink>
          </nav>
          {/* END Navigation */}
          {/* Actions */}
          <div className="flex items-center justify-center space-x-2">
            <NextLink href={RoutesDict.auth.login}>
              <a className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Sign In</span>
              </a>
            </NextLink>
            {isAuthenticated ? (
               <NextLink href={RoutesDict.portal.dashboard}>
               <a className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                 <svg
                   fill="currentColor"
                   viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg"
                   className="opacity-50 hi-solid hi-plus inline-block w-5 h-5">
                   <path
                     fillRule="evenodd"
                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                     clipRule="evenodd"
                   />
                 </svg>
                 <span>Dashboard</span>
               </a>
             </NextLink>
            ): (
 <NextLink href={RoutesDict.auth.signup}>
 <a className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
   <svg
     fill="currentColor"
     viewBox="0 0 20 20"
     xmlns="http://www.w3.org/2000/svg"
     className="opacity-50 hi-solid hi-plus inline-block w-5 h-5">
     <path
       fillRule="evenodd"
       d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
       clipRule="evenodd"
     />
   </svg>
   <span>New Account</span>
 </a>
</NextLink>
            )}
           
          </div>
          {/* END Actions */}
        </div>
      </div>
    </header>
  );
};
